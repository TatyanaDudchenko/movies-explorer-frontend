import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';

function SavedMovies({ savedMovies, moviesUrl, onLikeClickState, onMovieLikeDelete, setTooltipMessage, handleInfoTooltipOpen, handlePreloaderOpen, setIsPreloaderOpen }) {

    const [savedMoviesSearchResult, setSavedMoviesSearchResult] = useState([] || savedMovies);
    const [savedMoviesSearchText, setSavedMoviesSearchText] = useState('');
    const [isSavedMoviesToggleClick, setIsSavedMoviesToggleClick] = useState(false);

    // сохраняем фильмы в локальное хранилище для последующего использования в функциональности переключения чекбокса короткометражек в неактивное состояние
    useEffect(() => {
        localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    }, [savedMovies]);

    function searchAndFilterSavedMovies(savedMoviesSearchText, savedMovies, isToggleClick) {
        handlePreloaderOpen(); //запускаем прелоадер

        const delay = setTimeout(() => {
            let findMoviesInSaved = [];

            savedMovies.forEach((item) => {
                if (item.nameRU?.toLowerCase().indexOf(savedMoviesSearchText.toLowerCase()) > -1) {
                    findMoviesInSaved.push(item)
                }
            });

            if (findMoviesInSaved.length === 0) {
                setTooltipMessage('Ничего не найдено');
                handleInfoTooltipOpen();
            }

            setSavedMoviesSearchResult(findMoviesInSaved); // сохраняем массив с найденными фильмами

            // сохраняем фильмы в локальное хранилище для последующего использования в функциональности переключения чекбокса короткометражек в неактивное состояние
            localStorage.setItem('savedMovies', JSON.stringify(findMoviesInSaved));

            if (isSavedMoviesToggleClick === true) {
                setSavedMoviesSearchResult(savedMoviesSearchResult => [...savedMoviesSearchResult].filter((item) => item.duration <= 40));

                // сохраняем фильмы в локальное хранилище для последующего использования в функциональности переключения чекбокса короткометражек в активное состояние
                localStorage.setItem('filteredSavedMovies', JSON.stringify(findMoviesInSaved.filter((item) => item.duration <= 40)));
                localStorage.setItem('toggleSavedMoviesState', JSON.stringify(isSavedMoviesToggleClick)); // сохраняем состояние чекбокса в локальное хранилище

            } else {
                // загружаем фильмы из локального хранилища для использования в функциональности переключения чекбокса в неактивное состояние
                setSavedMoviesSearchResult(JSON.parse(localStorage.getItem('savedMovies'))); //
                //   // ничего не найдено
            }

            setIsPreloaderOpen(false); // выключаем прелоадер

            clearTimeout(delay);
        }, 500);
    }

    function filterShotSavedMovies(isSavedMoviesToggleClick) {
        if (isSavedMoviesToggleClick === false) {
            setSavedMoviesSearchResult(savedMoviesSearchResult => [...savedMoviesSearchResult].filter((item) => item.duration <= 40));

            // сохраняем фильмы в локальное хранилище для последующего использования в функциональности переключения чекбокса короткометражек в активное состояние
            localStorage.setItem('filteredSavedMovies', JSON.stringify(savedMoviesSearchResult.filter((item) => item.duration <= 40)));
        } else {
            // загружаем фильмы из локального хранилища для использования в функциональности переключения чекбокса в неактивное состояние
            setSavedMoviesSearchResult(JSON.parse(localStorage.getItem('savedMovies'))); //
            //   // ничего не найдено
        }
    }

    // используем фильмы из локального хранилища для выполнения функциональности переключения чекбокса короткометражек
    useEffect(() => {
        if (isSavedMoviesToggleClick === true) {
            const localStorageFilteredSavedMovies = JSON.parse(localStorage.getItem('filteredSavedMovies'));
            if (!localStorage.getItem('filteredSavedMovies')) return;
            setSavedMoviesSearchResult(localStorageFilteredSavedMovies);
        } else {
            const localStorageSavedMovies = JSON.parse(localStorage.getItem('savedMovies'));
            if (!localStorage.getItem('savedMovies')) return;
            setSavedMoviesSearchResult(localStorageSavedMovies);
        }
    }, [isSavedMoviesToggleClick]);

    function handleSavedMoviesToggleClick() {
        setIsSavedMoviesToggleClick(!isSavedMoviesToggleClick);
        localStorage.setItem('toggleSavedMoviesState', JSON.stringify(!isSavedMoviesToggleClick));
        filterShotSavedMovies(isSavedMoviesToggleClick);
    }

    useEffect(() => {
        setSavedMoviesSearchResult(savedMovies);
    }, [savedMovies]);

    return (
        <div className='saved-movies-container'>
            <SearchForm
                onSearchAndFilterFunction={searchAndFilterSavedMovies}
                searchTextQuery={savedMoviesSearchText}
                setSearchTextQuery={setSavedMoviesSearchText}
                keyInStorageSearchText={'savedMoviesSearchText'}
                onToggleClick={handleSavedMoviesToggleClick}
                onToggleClickState={isSavedMoviesToggleClick}
                onSetIsToggleClick={setIsSavedMoviesToggleClick}
                movArr={savedMovies}
                setTooltipMessage={setTooltipMessage}
                handleInfoTooltipOpen={handleInfoTooltipOpen} />
            <MoviesCardList
                moviesUrl={moviesUrl}
                savedMovies={savedMovies}
                savedMoviesSearchResult={savedMoviesSearchResult}
                onLikeClickState={onLikeClickState}
                onMovieLikeDelete={onMovieLikeDelete}
                setSavedMoviesSearchResult={setSavedMoviesSearchResult} />

        </div>
    )
}

export default SavedMovies;