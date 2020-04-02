import { domElements, validURL } from "./base";

export const getQueryInput = () => domElements.searchQueryInput.value;
export const getIngredientsInput = () => domElements.searchIngredientsInput.value;

export const clearInput = () => {
  domElements.searchQueryInput.value = "";
  domElements.searchIngredientsInput.value = "";
};
export const clearResults = () => {
  domElements.searchResultList.innerHTML = "";
  domElements.searchResultPagination.innerHTML = "";
};
const printRecipe = (recipe) => {
  const markup = `
     <li><a class="results_link" href="${recipe.href}">
                        <figure class="results_fig">
                            <img src="${recipe.thumbnail}" alt="${
        recipe.title
    }">
                        </figure>
                        <div class="results_data">
                            <h4 class="results_name">${stringLengthLimit(
        recipe.title
    )}</h4>
                            <p class="results_author">${recipe.author}</p>
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
  switch (true) {
    case page === 1 && pages > 1:
      // Show only button go to next page
      button = createPaginationButtons(page, "next");
      break;
    case page < pages:
      // Show both buttons previous / next
      button = `
            ${createPaginationButtons(page, "next")}
            ${createPaginationButtons(page, "prev")}`;

      break;
    case page === pages && pages > 1:
      // Show only button go to previous page
      button = createPaginationButtons(page, "prev");
      break;
  }
  domElements.searchResultPagination.insertAdjacentHTML("afterbegin", button);
};

export const printResults = (recipes, page = 1, resPerPage = 10) => {
  // render results of current page
  const start = (page - 1) * resPerPage;
  const end = page * resPerPage;

  recipes.slice(start, end).forEach(e => {
    // console.log(e);
    if (validURL(e.thumbnail)) {
      e.author = e.href.split("/")[2].replace("www.", "");
      printRecipe(e);
    } else {
      e.author = e.href.split("/")[2].replace("www.", "");
      e.thumbnail = "images/no-image.png";
      printRecipe(e);
    }
  });
  // Render Pagination Buttons
  if (recipes.length !== 10) {
    renderPaginationButtons(page, recipes.length, resPerPage);
  }
};

/*
// STRING Title = Pasta with Tomato and spinach
acc : 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc : 5 / acc + cur.length = 9 / newTitle = ['Pasta','with']
acc : 9 / acc + cur.length = 15 / newTitle = ['Pasta','with','Tomato']
acc : 15 / acc + cur.length = 18 / newTitle = ['Pasta','with','Tomato']
acc : 18 / acc + cur.length = 18 / newTitle = ['Pasta','with','Tomato'] -> The word 'and' not passed on array newTitle
acc : 18 / acc + cur.length = 18 / newTitle = ['Pasta','with','Tomato'] -> The word 'spinach' not passed on array newTitle
*/
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
