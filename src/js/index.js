// Global Application Controller
import Search from "./models/Search";
import {RECIPE_API, SETTINGS} from "./constants";

const recipePuppy = new Search(RECIPE_API.RecipePuppy.url, 'GET', RECIPE_API.RecipePuppy.apiHost, RECIPE_API.RecipePuppy.apiKey);
recipePuppy.getRecipePuppyResults(50, '', '');
console.log(SETTINGS.baseUrl);
