import {domElements} from './base';

export const getInput = () => domElements.searchInput.value;

const printRecipe = recipe => {

};
export const printResults = recipes => {
    recipes.forEach(printRecipe);
};
