import axios from 'axios';

const fetchImages = ({ query, queryPage = 1, perPage = 12, apiKey = '20023331-464bd2371129c2e39a7fc1f52' }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${queryPage}&per_page=${perPage}&key=${apiKey}&image_type=photo&orientation=horizontal`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
