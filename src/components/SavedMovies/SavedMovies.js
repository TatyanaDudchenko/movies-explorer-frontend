import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';


function SavedMovies({ savedMovies, moviesUrl, onGetFoundMovies, onToggleClick, onToggleClickState, onLikeClickState, onMovieLikeDelete }) {

    const [savedMoviesSearchResult, setSavedMoviesSearchResult] = useState([] || savedMovies);
    const [savedMoviesSearchText, setSavedMoviesSearchText] = useState('');
    const [isSavedMoviesToggleClick, setIsSavedMoviesToggleClick] = useState(false);



    function searchAndFilterSavedMovies(savedMoviesSearchText, savedMovies, isToggleClick) {
        let findMoviesInSaved = [];

        savedMovies.forEach((item) => {
            if (item.nameRU?.toLowerCase().indexOf(savedMoviesSearchText.toLowerCase()) > -1) {
                findMoviesInSaved.push(item)
            }
            else if (item.nameEN?.toLowerCase().indexOf(savedMoviesSearchText.toLowerCase()) > -1) {
                findMoviesInSaved.push(item)
            }
            else if (item.description?.toLowerCase().indexOf(savedMoviesSearchText.toLowerCase()) > -1) {
                findMoviesInSaved.push(item)
            }
            else if (item.year?.toLowerCase().indexOf(savedMoviesSearchText.toLowerCase()) > -1) {
                findMoviesInSaved.push(item)
            }
            else if (item.country?.toLowerCase().indexOf(savedMoviesSearchText.toLowerCase()) > -1) {
                findMoviesInSaved.push(item)
            }
        })
        // if (findMoviesInSaved.length === 0) {
        //   setTooltipMessage('Ничего не найдено');
        // }
        setSavedMoviesSearchResult(findMoviesInSaved); // сохраняем массив с найденными фильмами

        return findMoviesInSaved;
    }

    function filterShotSavedMovies(isSavedMoviesToggleClick) {
        if (isSavedMoviesToggleClick === false) {
            setSavedMoviesSearchResult(savedMoviesSearchResult => [...savedMoviesSearchResult].filter((item) => item.duration <= 40))
            // } else {
            //   // ничего не найдено
        }
    }

    function handleSavedMoviesToggleClick() {
        setIsSavedMoviesToggleClick(!isSavedMoviesToggleClick);
        filterShotSavedMovies(isSavedMoviesToggleClick);
    }

    useEffect(() => {
        setSavedMoviesSearchResult(savedMovies);
    }, [savedMovies]);

    return (
        <div className='saved-movies-container'>
            <SearchForm
                onGetFoundMovies={onGetFoundMovies}
                // onToggleClick={onToggleClick}
                // onToggleClickState={onToggleClickState}
                onSearchAndFilterFunction={searchAndFilterSavedMovies}
                searchTextQuery={savedMoviesSearchText}
                setSearchTextQuery={setSavedMoviesSearchText}
                keyInStorageSearchText={'savedMoviesSearchText'}
                onToggleClick={handleSavedMoviesToggleClick}
                onToggleClickState={isSavedMoviesToggleClick}
                onSetIsToggleClick={setIsSavedMoviesToggleClick}
                movArr={savedMovies} />
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