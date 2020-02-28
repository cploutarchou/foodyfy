import {RECIPES_API} from '../constants';
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


    async getRecipePuppyResults() {

        let recipePuppyFetchInput = (page) => `${this.recipePuppy.url}?p=${page}${this.ingredients}${this.query}`;
        if (this.cnt <= 10) {
            let page = 1;

            if (!('fetch' in window)) {
                console.error(`Fetch API Not Supported. Your browser is not up-to-date. Version:  ${navigator.userAgent}`);
                return;
            }
            await fetch(recipePuppyFetchInput(page), {
                "method": this.recipePuppy.method,
                "headers": {
                    "x-rapidapi-host": this.recipePuppy.apiHost,
                    "x-rapidapi-key": this.recipePuppy.apiKey,
                    "X-XSS-Protection": "1; mode=block",
                    "X-Frame-Options": "SAMEORIGIN",
                    "X-Content-Type-Options": "nosniff",
                    "Strict-Transport-Security": " max-age=31536000; includeSubDomains; preload"
                }
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(async json => {
                    return this.results = json.results;
                }).catch(onerror => {
                    throw  new Error(`Fetch API Error : ${onerror}`);
                })
        } else {
            let i = this.cnt / 10;
            let data = [];

            for (let page = 1; page <= i; page++) {
                if (!('fetch' in window)) {
                    console.error(`Fetch API Not Supported. Your browser is not up-to-date. Version:  ${navigator.userAgent}`);
                    return;
                }
                await fetch(recipePuppyFetchInput(page), {
                    "method": this.recipePuppy.method,
                    "headers": {
                        "x-rapidapi-host": this.recipePuppy.apiHost,
                        "x-rapidapi-key": this.recipePuppy.apiKey,
                        "X-XSS-Protection": "1; mode=block",
                        "X-Frame-Options": "SAMEORIGIN",
                        "X-Content-Type-Options": "nosniff",
                        "Strict-Transport-Security": " max-age=31536000; includeSubDomains; preload"
                    }
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(async json => {
                        data.push(json.results);

                    }).catch(onerror => {
                        throw  new Error(`Fetch API Error : ${onerror}`);
                    })
            }
            return this.results = data.flat()

        }
    }

    async getRecipePuppyResultsAxios(noOfItems) {
        noOfItems = 1;
        const config = {
            method: this.recipePuppy.method,
            url: `${this.recipePuppy.url}?p=${noOfItems}${this.ingredients}${this.query}`,
            "headers": {
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
            this.results = res.data.results;
        } catch (e) {
            alert(e);
        }


    }



}


