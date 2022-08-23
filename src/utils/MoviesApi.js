  class MoviesApi {
    constructor({baseUrl}) {
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
    headers: {
      authorization: `Bearer ${localStorage.getItem('movies')}`,
    }
  })
    .then(this._checkResponse)

  }

}

const api = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default api;