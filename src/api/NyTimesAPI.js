import axios from 'axios';

const nyTimesAPI = axios.create({
  baseURL: 'https://api.nytimes.com/svc/movies/v2',
  params: {
    'api-key': 'yrjuBBhX1rtF9Xi3MJarX8GM3vnO5Pko',
  },
});

export default nyTimesAPI;
