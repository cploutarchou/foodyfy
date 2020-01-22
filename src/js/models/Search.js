export default class Search {


    constructor(url, method, apiHost, apiKey) {
        // this.query = query;
        this.url = url;
        this.method = method;
        this.apiHost = apiHost;
        this.apiKey = apiKey;
    }

    async getRecipePuppyResults(cnt, ingredients, query,) {

        if (cnt <= 10) {
            let page = 1;
            ingredients = " " ? ingredients = " " : ingredients = `&i=${ingredients}`;
            query = " " ? query = " " : query = `&q=${query}`;
            if (!('fetch' in window)) {
                console.error(`Fetch API Not Supported. Your browser is not up-to-date. Version:  ${navigator.userAgent}`);
                return;
            }
            await fetch(`${this.url}?p=${page}${ingredients}${query}`, {
                "method": this.method,
                "headers": {
                    "x-rapidapi-host": this.apiHost,
                    "x-rapidapi-key": this.apiKey,
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
                    this.results = json.results;
                    console.log(json.results);
                }).catch(onerror => {
                    throw  new Error(`Fetch API Error : ${onerror}`);
                })
        } else {
            let i = cnt / 10;
            let data = [];

            for (let x = 1; x <= i; x++) {
                ingredients = " " ? ingredients = " " : ingredients = `&i=${ingredients}`;
                query = " " ? query = " " : query = `&q=${query}`;
                if (!('fetch' in window)) {
                    console.error(`Fetch API Not Supported. Your browser is not up-to-date. Version:  ${navigator.userAgent}`);
                    return;
                }
                await fetch(`${this.url}?p=${x}${ingredients}${query}`, {
                    "method": this.method,
                    "headers": {
                        "x-rapidapi-host": this.apiHost,
                        "x-rapidapi-key": this.apiKey
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
                        console.log(data);
                    }).catch(onerror => {
                        throw  new Error(`Fetch API Error : ${onerror}`);
                    })

            }

        }

    }


}
