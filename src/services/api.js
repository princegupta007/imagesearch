import axios from 'axios';

const API_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'zfZujowNOF7PhzZLTyGdneMeUDDHRpUBqJB3HLhwbHw';

export const fetchImages = (query, page) => {
  return axios.get(`${API_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: 6,
      client_id: ACCESS_KEY,
    },
  });
};

export const fetchImageDetails = (id) => {
  return axios.get(`${API_URL}/photos/${id}`, {
    params: {
      client_id: ACCESS_KEY,
    },
  });
};
