import { BEATFILM_URL } from "./constants";

class MoviesApi {
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

  getMovies() {
    return fetch(`${this.url}`).then((dataCards) => this._checkStatus(dataCards));
  }
}

export const moviesApi = new MoviesApi({
  url: `${BEATFILM_URL}/beatfilm-movies`,
  headers: {
    "Content-Type": "application/json",
  },
});
