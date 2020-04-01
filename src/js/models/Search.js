import {RECIPES_API, SETTINGS} from '../config';
import axios from 'axios';

export default class Search {
    constructor(cnt, query, ingredients) {
        // this.query = query;

        this.recipePuppy = {
            url: RECIPES_API.RecipePuppy.url,
            method: 'GET',
            apiHost: RECIPES_API.RecipePuppy.apiHost,
            apiKey: RECIPES_API.RecipePuppy.apiKey
        };
        this.cnt = cnt;
        this.ingredients = `&i=${ingredients}`;
        this.query = `&q=${query}`;


    }


    async getResults() {

        if (this.cnt <= 10) {
            let page = 1;
            axios({
                "method": this.recipePuppy.method,
                "url": `${this.recipePuppy.url}?p=${page}${this.ingredients}${this.query}`,
                "headers": {
                    "content-type": "application/octet-stream",
                    "x-rapidapi-host": this.recipePuppy.apiHost,
                    "x-rapidapi-key": this.recipePuppy.apiKey
                }
            }).then((response) => {
                if (response.status !== 200) {
                    throw new Error('Network response was not ok');
                }
                this.results = response.data.results;
                return this.results
            }).catch((error) => {
                console.log(error)
            })
        } else {
            let i = this.cnt / 10;
            let data = [];
            for (let page = 1; page <= i; page++) {
                axios({
                    "method": this.recipePuppy.method,
                    "url": `${this.recipePuppy.url}?p=${page}${this.ingredients}${this.query}`,
                    "headers": {
                        "content-type": "application/octet-stream",
                        "x-rapidapi-host": this.recipePuppy.apiHost,
                        "x-rapidapi-key": this.recipePuppy.apiKey
                    }
                }).then((response) => {
                    if (response.status !== 200) {
                        throw new Error('Network response was not ok');
                    }
                    const newArr = Array.from(response.data.results);
                    data.push(...newArr);
                }).catch((error) => {
                    throw  new Error(`Fetch API Error : ${error}`);
                });
            }
            return this.results = data;

        }

    }


}


