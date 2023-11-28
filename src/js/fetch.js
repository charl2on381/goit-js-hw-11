import axios from 'axios';

const perPage = 40;
let totalPages = 0;

export async function fetchImmages(query, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '40949345-0f3d1e4697fcfb1af6f448d75';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
    // page: currentPage,
    // per_page: perPage,
  });

  const response = await axios.get(`${BASE_URL}?${params}`);
  totalPages = response.data.totalHits / perPage;
  return response;
}

export { totalPages };
