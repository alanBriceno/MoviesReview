import { useEffect, useState } from 'react';

import nyTimesAPI from '../api/NyTimesAPI';

const useMovieReview = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const response = await nyTimesAPI.get('/reviews/picks.json');

    setReviews(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    getReviews();
  }, []);

  return {
    reviews,
    isLoading,
  };
};

export default useMovieReview;
