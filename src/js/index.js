// Global Application Controller
import Search from "./models/Search";
import {RECIPE_API} from "./constants";

let data;
const recipePuppy = new Search(RECIPE_API.RecipePuppy.url, 'GET', RECIPE_API.RecipePuppy.apiHost, RECIPE_API.RecipePuppy.apiKey);
data = recipePuppy.getRecipePuppyResults(50, '', '');
data.then(() => console.log(recipePuppy.results));
