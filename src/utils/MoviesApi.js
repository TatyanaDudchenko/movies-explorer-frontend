class MoviesApi {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  _checkResponse(result) {
    if (result.ok) {
      return result.json();
    }

    return Promise.reject(`Ошибка ${result.status}`);
  }

  // метод для загрузки начальных карточек фильмов с сервера
  getFoundMovies() {
    return fetch(`${this.baseUrl}`, {
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem('jwt')}`,
      // }
    })
      .then(this._checkResponse)

  }

  // метод для сохранения фильма
  putMovieInSaved(movie) {
    return fetch(`${this.baseUrl}`, {
      method: 'PUT',
      headers: {
        // authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailerLink: movie.trailerLink,
        thumbnail: movie.thumbnail,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        movieId: movie.movieId,
      })
    })
      .then(this._checkResponse)

  }

  // метод для удаления фильма
  deleteMovieFromSaved(itemId) {
    return fetch(`${this.baseUrl}/${itemId}`, {
      method: 'DELETE',
      headers: {
        // authorization: `Bearer ${localStorage.getItem("jwt")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: itemId,
      })
    })
      .then(this._checkResponse)

  }

}

const api = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default api;