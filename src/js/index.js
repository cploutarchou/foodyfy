// Global Application Controller
import Search from "./models/Search";
import { domElements, loader } from "./views/base";
import * as searchView from "./views/searchView";
// import Recipe from "./models/Recipe";

/** Global State of App
 * - Search object
 * - Current recipe object
 * - Liked recipes
 *
 */
const state = {};
/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
  // 1)  Get query from view
  const query = searchView.getQueryInput();
  if (query) {
    // 2) New Search object and add to the state
    state.search = new Search(query);
    // 3) Prepare UI For search results
    searchView.clearInput();
    searchView.clearResults();
    loader(domElements.resultArea, true);
    // 4 ) Search for recipes
    await state.search.getResults();
    // 5) Render results on UI
    // console.log(state.search.results);
    loader(domElements.resultArea, false);
    searchView.printResults(state.search.result);
  }
};

domElements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

domElements.searchResultPagination.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.printResults(state.search.result, goToPage);
  }
});

/**
 * RECIPE CONTROLLER
 */
// const r = new Recipe();
