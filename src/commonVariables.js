const currentUrl = window.location.href;
export const BASE_URL = 
currentUrl.includes('ngrok') ? 
    "https://4a12-197-210-55-239.ngrok.io" : 
    'http://localhost:3000';

