// Global Application Controller

const getResults = async (query) => {
    if (!('fetch' in window)) {
        console.error('Fetch API not found, try including the polyfill');
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
            return await console.log(json.results);
        }).catch(onerror => {
            throw  new Error(`Fetch API not found, try including the polyfill. Error : ${onerror}`);
        })
};

getResults('pizza');
