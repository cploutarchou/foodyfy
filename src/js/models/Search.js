import { RECIPES_API } from "../config";
import axios from "axios";

export default class Search {
  constructor (cnt, query, ingredients) {
    this.recipePuppy = {
      url: RECIPES_API.RecipePuppy.url,
      method: "GET",
      apiHost: RECIPES_API.RecipePuppy.apiHost,
      apiKey: RECIPES_API.RecipePuppy.apiKey
    };
    this.cnt = cnt;
    this.ingredients = `&i=${ingredients}`;
    this.query = `&q=${query}`;
  }

  async getResults () {
    let i = Math.ceil(this.cnt / 10);
    let start;
    if (i === 1) {
      start = 1;
      i = 2;
    } else {
      start = 1;
      i = i + 1;
    }
    const data = [];
    for (let page = start; page < i; page++) {
      const config = {
        url: `${this.recipePuppy.url}?p=${page}${this.ingredients}${this.query}`,
        method: this.recipePuppy.method,
        headers: {
          "x-rapidapi-host": this.recipePuppy.apiHost,
          "x-rapidapi-key": this.recipePuppy.apiKey,
          "X-XSS-Protection": "1; mode=block",
          "X-Frame-Options": "SAMEORIGIN",
          "X-Content-Type-Options": "nosniff",
          "Strict-Transport-Security": " max-age=31536000; includeSubDomains; preload"
        }
      };
      try {
        const res = await axios(config);
        data.push(...res.data.results);
      } catch (e) {
        alert(e);
      }
    }

    // eslint-disable-next-line no-return-assign
    return this.results = data;
  }
}
