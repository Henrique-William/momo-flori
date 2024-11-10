import axios from 'axios';

const prodURL = "https://momo-flori-back.onrender.com";
const devURL = "http://localhost:8000";

const api = axios.create({
    baseURL: prodURL,
});

export default api;