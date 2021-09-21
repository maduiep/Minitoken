const currentUrl = window.location.href;
export const BASE_URL = 
currentUrl.includes('ngrok') ? 
    "https://4214-105-112-97-92.ngrok.io" : 
    'http://localhost:3000/';

