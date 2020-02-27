// Global Application Controller
import Search from "./models/Search";
let recipePuppydata;
const recipePuppy = new Search(100,'hamburger','onions');

recipePuppy.getRecipePuppyResultsAxios(10);

