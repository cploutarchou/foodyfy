// Global Application Controller
import Search from "./models/Search";
import {RECIPES_API} from "./constants";

let data;
const recipePuppy = new Search(RECIPES_API.RecipePuppy.url, 'GET', RECIPES_API.RecipePuppy.apiHost, RECIPES_API.RecipePuppy.apiKey);
data = recipePuppy.getRecipePuppyResults(100, '', '');
data.then(() => console.log(recipePuppy.results));
