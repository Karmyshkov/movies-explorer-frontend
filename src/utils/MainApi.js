import { BASE_URL } from "./constants";

class MainApi {
  constructor({ url, headers }) {
    this.url = url;
    this.headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  login({ email, password }) {
    return fetch(`${this.url}/signin`, {
      method: "POST",
      headers: this.headers,
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((dataMovie) => this._checkStatus(dataMovie));
  }

  register({ name, email, password }) {
    return fetch(`${this.url}/signup`, {
      method: "POST",
      headers: this.headers,
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((dataMovie) => this._checkStatus(dataMovie));
  }

  logout = () => {
    return fetch(`${BASE_URL}/signout`, {
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }).then((res) => this._checkStatus(res));
  };

  getUserData = () => {
    return fetch(`${BASE_URL}/users/me`, {
      headers: this.headers,
      credentials: "include",
    }).then((token) => this._checkStatus(token));
  };

  changeUserIngo = ({ name, email }) => {
    return fetch(`${this.url}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      credentials: "include",
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((dataMovie) => this._checkStatus(dataMovie));
  };

  saveMovie(movie) {
    return fetch(`${this.url}/movies`, {
      method: "POST",
      headers: this.headers,
      credentials: "include",
      body: JSON.stringify(movie),
    }).then((dataMovie) => this._checkStatus(dataMovie));
  }

  getSavedMovies() {
    return fetch(`${this.url}${"/movies"}`, { credentials: "include" }).then(
      (dataMovies) => this._checkStatus(dataMovies)
    );
  }

  deleteMovie(movieId) {
    return fetch(`${this.url}/movies/${movieId}`, {
      method: "DELETE",
      credentials: "include",
    }).then((dataMovie) => this._checkStatus(dataMovie));
  }
}

export const mainApi = new MainApi({
  url: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
