import React from 'react';

import {
  View, ActivityIndicator, FlatList,
} from 'react-native';

import MovieItem from '../components/MovieItem';
import useMovieReview from '../hooks/useMovieReviews';

const HomeScreen = () => {
  const { isLoading, reviews } = useMovieReview();

  if (isLoading) {
    return <ActivityIndicator size={50} />;
  }
  return (
    <View>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.display_title}
        renderItem={({ item }) => (<MovieItem movie={item} />)}
      />
    </View>
  );
};

export default HomeScreen;
