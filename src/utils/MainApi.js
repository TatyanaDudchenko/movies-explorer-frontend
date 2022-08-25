export const BASE_URL = 'https://api.movies-explorer-dudta.nomoreparties.sbs';

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  throw new Error({status: response.status});
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
      authorization : `Bearer ${token}`,
    }
  })
  .then((response) => checkResponse(response))
};