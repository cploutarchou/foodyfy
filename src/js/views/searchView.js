import {domElements} from './base';

export const getInput = () => domElements.searchInput.value;

const printRecipe = recipe => {
    const markup = `
     <li><a class="results__link results__link" href="${recipe.href}">
                        <figure class="results__fig">
                            <img src="${recipe.thumbnail}" alt="${recipe.title}">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${recipe.title}</h4>
                            <p class="results__author"></p>
                        </div>
                    </a>
 </li>
`;
    domElements.searchResultList.insertAdjacentHTML('beforeend', markup);
};
export const printResults = recipes => {
    if (recipes.thumbnail !== '')
        recipes.forEach(printRecipe);

};
