import {domElements, validURL} from './base';

export const getInput = () => domElements.searchInput.value;

const printRecipe = recipe => {
    const markup = `
     <li><a class="results_link" href="${recipe.href}">
                        <figure class="results_fig">
                            <img src="${recipe.thumbnail}" alt="${recipe.title}">
                        </figure>
                        <div class="results_data">
                            <h4 class="results_name">${recipe.title}</h4>
                            <p class="results_author">${recipe.href}}</p>
                        </div>
                    </a>
 </li>
`;
    domElements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

export const printResults = recipes => {
    recipes.forEach(((e) => {
        if (validURL(e.thumbnail))
            printRecipe(e);
    }));

};
