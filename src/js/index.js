// Global Application Controller

const getResults = async (query) => {
    if (!('fetch' in window)) {
        console.error(`Fetch API Not Supported. Your browser is not up-to-date. Version:  ${navigator.userAgent}`);
        return;
    }
    await fetch(`https://cors.cpdevlabs.com/http://www.recipepuppy.com/api/?q=${query}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(async json => {
            return console.log(json.results);
        }).catch(onerror => {
            throw  new Error(`Fetch API Error : ${onerror}`);
        })
};

getResults('pizza');
