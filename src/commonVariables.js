const currentUrl = window.location.href;
export const BASE_URL = 
currentUrl.includes('ngrok') ? 
    "https://minitoken.herokuapp.com/" : 
    'http://localhost:3000/';

