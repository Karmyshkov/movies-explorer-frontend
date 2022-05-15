const BASE_URL = "https://api.karmyskov-cinema.nomoredomains.work";

class Api {
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

  registration({ name, email, password }) {
    return fetch(`${this.url}/signup`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then((dataCard) => this._checkStatus(dataCard));
  }
}

export const api = new Api({
  url: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
