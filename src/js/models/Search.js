import { RECIPES_API } from '../config'
import axios from 'axios'

export default class Search {
  constructor (cnt, query, ingredients) {
    this.recipePuppy = {
      url: RECIPES_API.RecipePuppy.url,
      method: 'GET',
      apiHost: RECIPES_API.RecipePuppy.apiHost,
      apiKey: RECIPES_API.RecipePuppy.apiKey
    }
    this.cnt = cnt
    this.ingredients = `&i=${ingredients}`
    this.query = `&q=${query}`
  }

  async getResults () {
    let i = Math.round(this.cnt / 10)
    console.log(`The i values is ${i}`)
    let start
    if (i === 1) {
      start = 1
      i = 2
      console.log(`The i values is ${i}`)
    } else {
      start = 1
      i = i + 1
    }
    // eslint-disable-next-line prefer-const
    let data = []
    for (let page = start; page < i; page++) {
      axios({
        method: this.recipePuppy.method,
        url: `${this.recipePuppy.url}?p=${page}${this.ingredients}${this.query}`,
        headers: {
          'content-type': 'application/octet-stream',
          'x-rapidapi-host': this.recipePuppy.apiHost,
          'x-rapidapi-key': this.recipePuppy.apiKey
        }
      })
        .then(response => {
          if (response.status !== 200) {
            throw new Error('Network response was not ok')
          }
          const newArr = Array.from(response.data.results)
          data.push(...newArr)
        })
        .catch(error => {
          throw new Error(`Fetch API Error : ${error}`)
        })
    }
    return (this.results = data)
  }
}
