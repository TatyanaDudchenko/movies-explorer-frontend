export const BASE_URL = 'http://localhost:3001';

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


// // метод для сохранения фильма
// export const putMovieInSaved = (movieId) => {
//   return fetch(`${BASE_URL}/movies`, {
//     method: 'PUT',
//     headers: {
//       authorization: `Bearer ${localStorage.getItem('jwt')}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       country: movieId.country,
//       director: movieId.director,
//       duration: movieId.duration,
//       year: movieId.year,
//       description: movieId.description,
//       image: movieId.image,
//       trailerLink: movieId.trailerLink,
//       thumbnail: movieId.thumbnail,
//       nameRU: movieId.nameRU,
//       nameEN: movieId.nameEN,
//       movieId: movieId.movieId,
//     })
//   })
//     .then((response) => checkResponse(response))

// }

// // метод для удаления фильма
// export const deleteMovieFromSaved = (itemId) => {
//   return fetch(`${BASE_URL}/${itemId}`, {
//     method: 'DELETE',
//     headers: {
//       // authorization: `Bearer ${localStorage.getItem("jwt")}`,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       _id: itemId,
//     })
//   })
//     .then((response) => checkResponse(response))

// }