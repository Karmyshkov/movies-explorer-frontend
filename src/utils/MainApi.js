//const BASE_URL = "https://api.karmyskov-cinema.nomoredomains.work";
const BASE_URL = "http://localhost:3000";

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
    }).then((dataCard) => this._checkStatus(dataCard));
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
    }).then((dataCard) => this._checkStatus(dataCard));
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
    }).then((dataCard) => this._checkStatus(dataCard));
  };
}

export const mainApi = new MainApi({
  url: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
