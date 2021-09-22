const currentUrl = window.location.href;
export const BASE_URL = 
currentUrl.includes('ngrok') ? 
    "https://0151-197-210-84-91.ngrok.io" : 
    'http://localhost:3000';

