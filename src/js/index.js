// Global Application Controller
import Search from "./models/Search";
let data;
const recipePuppy = new Search(50,'','');
data = recipePuppy.getRecipePuppyResults();
data.then(() => console.log(recipePuppy.results));
