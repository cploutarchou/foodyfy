// Global Application Controller
import Search from "./models/Search";

const search = new Search('https://recipe-puppy.p.rapidapi.com/', 'GET', 'recipe-puppy.p.rapidapi.com', 'ba6857687cmshde324ee2aaaa83bp17b197jsn3e2030e4c0fa');
search.getRecipePuppyResults('', '', 500);

