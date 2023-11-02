import axios from "axios";
import Notiflix from 'notiflix';

const URL = "https://pixabay.com/api/";
const KEY = "40210238-72924526e0480010730b712b1";

export const options = {
  params: {
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};