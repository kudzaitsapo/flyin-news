import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL || 'https://newsapi.org/v2'
});

export function createUrl(endpoint, separator = '?') {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY || '';
    return instance.defaults.baseURL + endpoint + separator + 'apiKey=' + apiKey;
}