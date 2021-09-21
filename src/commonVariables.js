const currentUrl = window.location.href;
export const BASE_URL = 
currentUrl.includes('ngrok') ? 
    "https://4e67-105-112-97-92.ngrok.io" : 
    'http://localhost:3000/';

