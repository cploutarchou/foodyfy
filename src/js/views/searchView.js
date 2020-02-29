import {domElements, validURL} from './base';

export const getInput = () => domElements.searchInput.value;

export const clearInput = () => {
    domElements.searchInput.value = "";
};
export const clearResults = () => {
    domElements.searchResultList.innerHTML = "";
};
const printRecipe = recipe => {
    const markup = `
     <li><a class="results_link" href="${recipe.href}">
                        <figure class="results_fig">
                            <img src="${recipe.thumbnail}" alt="${recipe.title}">
                        </figure>
                        <div class="results_data">
                            <h4 class="results_name">${stringLengthLimit(recipe.title)}</h4>
                            <p class="results_author">${recipe.author}</p>
                        </div>
                    </a>
 </li>
`;
    domElements.searchResultList.insertAdjacentHTML('beforeend', markup);
};

export const printResults = recipes => {
    let itemCount = 0;
    recipes.forEach(((e) => {
        if (validURL(e.thumbnail)) {
            e.author = e.href.split('/')[2].replace('www.', '');
            printRecipe(e);
            itemCount++;
        }
    }));
    console.log(itemCount);
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
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);

        return `${newTitle.join(' ')}...`;
    }

    return title;
};
