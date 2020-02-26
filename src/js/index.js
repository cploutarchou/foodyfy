// Global Application Controller
import Search from "./models/Search";
let data;
const recipePuppy = new Search(100,'omelet','onions');
data = recipePuppy.getRecipePuppyResults();
data.then(() => console.log(recipePuppy.results));
