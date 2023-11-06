         
import axios, { Axios } from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40210238-72924526e0480010730b712b1';

export async function getSearch(searchValue, pageNew) {
const params = new URLSearchParams({
    key: API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: pageNew,
    per_page: 40,
})
    
   return await axios.get(`${BASE_URL}?${params}`);
     
}