export const BASE_URL = 'https://api.movies-explorer-dudta.nomoreparties.sbs';
// export const BASE_URL = 'http://localhost:3001';

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error({ status: response.status });
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password
    })
  })
    .then((response) => checkResponse(response))
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
    .then((response) => checkResponse(response))
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  })
    .then((response) => checkResponse(response))
};

// метод для загрузки информации о пользователе с сервера
export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    }
  })
    .then((response) => checkResponse(response))
};

// метод для загрузки сохраненных фильмов с сервера
export const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
    }
  })
    .then((response) => checkResponse(response))
}

// метод для сохранения фильма
export const putMovieInSaved = (movie, moviesUrl) => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `${moviesUrl}${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `${moviesUrl}${movie.image.formats.thumbnail.url}`,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      movieId: movie.id,
    })
  })
    .then((response) => checkResponse(response))
};

// метод для удаления фильма
export const deleteMovieFromSaved = (movieId) => {
  return fetch(`${BASE_URL}/movies/${movieId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _id: movieId,
    })
  })
    .then((response) => checkResponse(response))
};

// метод для редактирования профиля
export const editProfile = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('jwt')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email
    })
  })
    .then((response) => checkResponse(response))
};