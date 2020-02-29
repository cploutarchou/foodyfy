// Global Application Controller
import Search from "./models/Search";
import {domElements, loader} from "./views/base";
import * as searchView from './views/searchView';

/** Global State of App
 * - Search object
 * - Current recipe object
 * - Liked recipes
 *
 */
const state = {};
const controlSearch = async () => {
    // 1)  Get query from view
    const query = searchView.getInput(); //TODO

    if (query) {
        // 2) New Search object and add to the state
        state.search = new Search(100, query, '');

        // 3) Prepare UI For search results
        searchView.clearInput();
        searchView.clearResults();
        loader(domElements.resultArea, true);
        // 4 ) Search for recipes
        await state.search.getRecipePuppyResults();
        // 5) Render results on UI
        // console.log(state.search.results);
        loader(domElements.resultArea, false);
        searchView.printResults(state.search.results);
    }

};
domElements.searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    controlSearch().then(r => {
    });
});




