import { RECIPES_API } from "../config";
import axios from "axios";

export default class Search {
  constructor (query) {
    this.url = RECIPES_API.url;
    this.query = `&q=${query}`;
  }

  async getResults () {
    const config = {
      url: `${this.url}?${this.query}`
    };
    try {
      const res = await axios(config);
      this.result = res.data.recipes;
    } catch (error) {
      console.error(error);
    }
  }
}
