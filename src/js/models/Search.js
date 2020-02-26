export default class Search {
    constructor(url, method, apiHost, apiKey,query,ingredients,cnt) {
        // this.query = query;
        this.url = url;
        this.method = method;
        this.apiHost = apiHost;
        this.apiKey = apiKey;
        this.cnt = cnt;
        this.ingredients = ingredients;
        this.query = query;

    }


    async getRecipePuppyResults() {
        this.ingredients = " " ? this.ingredients = " " : this.ingredients = `&i=${this.ingredients}`;
        this.query = " " ? this.query = " " : this.query = `&q=${this.query}`;
        if (this.cnt <= 10) {
            let page = 1;

            if (!('fetch' in window)) {
                console.error(`Fetch API Not Supported. Your browser is not up-to-date. Version:  ${navigator.userAgent}`);
                return;
            }
            await fetch(`${this.url}?p=${page}${this.ingredients}${this.query}`, {
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
                    return this.results = json.results;
                }).catch(onerror => {
                    throw  new Error(`Fetch API Error : ${onerror}`);
                })
        } else {
            let i = this.cnt / 10;
            let data = [];

            for (let x = 1; x <= i; x++) {
                if (!('fetch' in window)) {
                    console.error(`Fetch API Not Supported. Your browser is not up-to-date. Version:  ${navigator.userAgent}`);
                    return;
                }
                await fetch(`${this.url}?p=${x}${this.ingredients}${this.query}`, {
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
                        data.push(json.results);

                    }).catch(onerror => {
                        throw  new Error(`Fetch API Error : ${onerror}`);
                    })
            }
            return this.results = data.flat();

        }
    }
}


