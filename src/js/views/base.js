/**
 * Created by Christos Ploutarchou
 * Project : foodyfy
 * Filename : base.js
 * Date: 2/28/2020
 * Time: 10:38 PM
 **/
export const domElements = {
  searchForm: document.querySelector(".search"),
  searchQueryInput: document.querySelector(".search_field"),
  searchIngredientsInput: document.querySelector("#ingredients"),
  resultArea: document.querySelector(".results"),
  searchResultList: document.querySelector(".results_list"),
  searchResultPagination: document.querySelector(".results_pages")
};

export const elementStrings = {
  loader: "lds-roller"
};

export const validURL = (str) => {
  const pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
  return !!pattern.test(str);
};

export const loader = (parentElement, isActive) => {
  if (isActive) {
    const loaderHtml = `<div class="${elementStrings.loader}"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;
    parentElement.insertAdjacentHTML("afterbegin", loaderHtml);
  } else {
    const loader = document.querySelector(`.${elementStrings.loader}`);
    if (loader) loader.parentElement.removeChild(loader);
  }
};
