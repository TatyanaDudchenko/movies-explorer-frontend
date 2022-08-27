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

  // метод для постановки лайка
  putLike(itemId) {
    return fetch(`${this.baseUrl}/${itemId}/likes`, {
      method: 'PUT',
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

  // метод для удаления лайка
  deleteLike(itemId) {
    return fetch(`${this.baseUrl}/${itemId}/likes`, {
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