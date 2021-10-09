const currentUrl = window.location.href;
export const BASE_URL = 
currentUrl.includes('minitoken') ? 
    "https://minitoken.herokuapp.com/" : 
    'http://localhost:3000/';

