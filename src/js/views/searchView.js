import { domElements } from "./base";

export const getQueryInput = () => domElements.searchQueryInput.value;

export const clearInput = () => {
  domElements.searchQueryInput.value = "";
};
export const clearResults = () => {
  domElements.searchResultList.innerHTML = "";
  domElements.searchResultPagination.innerHTML = "";
};
const printRecipe = (recipe) => {
  const markup = `
     <li><a class="results_link" href="#${recipe.recipe_id}">
                        <figure class="results_fig">
                            <img src="${recipe.image_url}" alt="${
        recipe.title
    }">
                        </figure>
                        <div class="results_data">
                            <h4 class="results_name">${stringLengthLimit(
        recipe.title
    )}</h4>
                            <p class="results_author">${recipe.publisher}</p>
                        </div>
                    </a>
 </li>
`;
  domElements.searchResultList.insertAdjacentHTML("beforeend", markup);
};

const createPaginationButtons = (page, type) => `         
         
                 <button class="btn-inline results_btn--${type}" data-goto="${
    type === "prev" ? page - 1 : page + 1
}"
                    <span>Page${type === "prev" ? page - 1 : page + 1}</span>
                    <span  class="fa fa-arrow-circle-${
    type === "prev" ? "left" : "right"
}"></span>
                </button>`;

const renderPaginationButtons = (page, resultNumber, resultsPerPage) => {
  const pages = Math.ceil(resultNumber / resultsPerPage);

  let button;
  if (page === 1 && pages > 1) {
    // Only button to go to next page
    button = createPaginationButtons(page, "next");
  } else if (page < pages) {
    // Both buttons
    button = `
          ${createPaginationButtons(page, "prev")}
          ${createPaginationButtons(page, "next")}
      `;
  } else if (page === pages && pages > 1) {
    // Only button to go to prev page
    button = createPaginationButtons(page, "prev");
  }
  domElements.searchResultPagination.insertAdjacentHTML("afterbegin", button);
};

export const printResults = (recipes, page = 1, resPerPage = 10) => {
  // render results of current page
  // console.log(e);
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;
  console.log(recipes);
  recipes.slice(start, end).forEach(printRecipe);
  // Render Pagination Buttons
  renderPaginationButtons(page, recipes.length, resPerPage);
};


const stringLengthLimit = (title, limit = 20) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);

    return `${newTitle.join(" ")}...`;
  }

  return title;
};
