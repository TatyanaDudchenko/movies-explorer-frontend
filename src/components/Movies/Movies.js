import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useState, useEffect } from 'react';

function Movies({
    movies,
    filteredMovies,
    moviesSearchResult,
    setMoviesSearchResult,
    savedMovies,
    moviesUrl,
    onGetFoundMovies,
    onToggleClick,
    onToggleClickState,
    onSetIsToggleClick,
    onLikeClickState,
    onMovieLike,
    onSearchAndFilterMovies,
    setTooltipMessage,
    handleInfoTooltipOpen,
}) {

    const [searchText, setSearchText] = useState('');
    const [showMovies, setShowMovies] = useState([]);
    const [isMoreButtonActive, setMoreButtonActive] = useState(false);

    const [numberOfMoviesToShow, setnumberOfMoviesToShow] = useState(12);
    const [numberOfMoviesToShowAdd, setNumberOfMoviesToShowAdd] = useState(3);

    const moreButtonActiveClassName = 'movies-container__more-button_active';

    const SIZE_DESKTOP = 1280;
    const SIZE_TABLET = 768;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function changeWidth() {
        setWindowWidth(window.innerWidth);
    }

    function handleMoreButtonClick() {
        setShowMovies(showMovies => moviesSearchResult.slice(0, showMovies.length + numberOfMoviesToShowAdd));
        if (showMovies.length >= moviesSearchResult.length - numberOfMoviesToShowAdd) {
            setMoreButtonActive(false);
        }
    }

    useEffect(() => {
        setShowMovies(moviesSearchResult.slice(0, numberOfMoviesToShow));
    }, [moviesSearchResult, numberOfMoviesToShow]);


    useEffect(() => {
        const localStorageSearchText = localStorage.getItem('searchText');
        if (!localStorage.getItem('searchText')) return;
        setSearchText(localStorageSearchText);
    }, []);

    useEffect(() => {
        if (moviesSearchResult.length <= numberOfMoviesToShow) {
            setMoreButtonActive(false);
        } else {
            setMoreButtonActive(true);
        }
    }, [moviesSearchResult.length, numberOfMoviesToShow]);

    useEffect(() => {
        if (moviesSearchResult.length <= numberOfMoviesToShow) {
            setMoreButtonActive(false);
        } else {
            setMoreButtonActive(true);
        }
    }, [moviesSearchResult.length, numberOfMoviesToShow]);

    useEffect(() => {
        window.addEventListener("resize", changeWidth);
        return () => {
            window.removeEventListener("resize", changeWidth);
        };
    });

    useEffect(() => {
        if (windowWidth >= SIZE_DESKTOP) {
            setnumberOfMoviesToShow(12);
            setNumberOfMoviesToShowAdd(3);
        } else if (windowWidth < SIZE_DESKTOP && windowWidth > SIZE_TABLET) {
            setnumberOfMoviesToShow(8);
            setNumberOfMoviesToShowAdd(2);
        } else {
            setnumberOfMoviesToShow(5);
            setNumberOfMoviesToShowAdd(2);
        }
    }, [windowWidth]);

    return (
        <div className='movies-container'>
            <SearchForm
                onGetFoundMovies={onGetFoundMovies}
                onToggleClick={onToggleClick}
                onToggleClickState={onToggleClickState}
                movArr={movies}
                onSetIsToggleClick={onSetIsToggleClick}
                setMoviesSearchResult={setMoviesSearchResult}
                searchTextQuery={searchText}
                searchText={searchText}
                setSearchTextQuery={setSearchText}
                setSearchText={setSearchText}
                keyInStorageSearchText={'searchText'}
                onSearchAndFilterFunction={onSearchAndFilterMovies}
                setTooltipMessage={setTooltipMessage}
                handleInfoTooltipOpen={handleInfoTooltipOpen} />
            <MoviesCardList
                moviesUrl={moviesUrl}
                movies={movies}
                showMovies={showMovies}
                filteredMovies={filteredMovies}
                onToggleClickState={onToggleClickState}
                savedMovies={savedMovies}
                onLikeClickState={onLikeClickState}
                onMovieLike={onMovieLike} />
            <div className='movies-container__more-button-container'>
                <button
                    onClick={handleMoreButtonClick}
                    type='button'
                    className={`movies-container__more-button ${isMoreButtonActive && moreButtonActiveClassName}`}>
                    Еще
                </button>
            </div>
        </div>
    )
}

export default Movies;