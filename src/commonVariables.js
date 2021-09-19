const currentUrl = window.location.href;
export const BASE_URL = currentUrl.includes('ngrok') ? "http://6ad7-105-112-102-136.ngrok.io" : 'http://localhost:3000/';

