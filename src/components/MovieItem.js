import React from 'react';

import { useNavigation } from '@react-navigation/native';
import {
  Text, Image,
} from 'react-native';
import styled from 'styled-components/native';

import MoviePropTypes from '../prop-types/MoviePropTypes';

const MovieContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: white;
  flex-direction: row;
  border-color: grey;
  border-bottom-width: 1px;
`;

const ImageContainer = styled.View`
  width: 100px;
  height: 100px;
`;

const InfoContainer = styled.View`
  flex: 1;
  padding-horizontal: 10px;
  padding-top: 10px;
`;

const Title = styled.Text`
  font-size: 18px;
  fontWeight: bold;
  padding-bottom: 5px;
`;

const ReleaseDateContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

const ReleaseDate = styled.Text`
  color: grey;
`;

const MovieItem = ({ movie }) => {
  const navigation = useNavigation();
  return (
    <MovieContainer onPress={() => navigation.navigate('Review', { movie })}>
      <ImageContainer>
        <Image source={{ uri: movie.multimedia.src }} resizeMode="cover" style={{ flex: 1 }} />
      </ImageContainer>
      <InfoContainer>
        <Title>{movie.display_title}</Title>
        <Text>{movie.headline}</Text>
        <ReleaseDateContainer>
          <ReleaseDate>
            {`Release date: ${movie.publication_date}`}
          </ReleaseDate>
        </ReleaseDateContainer>

      </InfoContainer>
    </MovieContainer>
  );
};

MovieItem.propTypes = {
  movie: MoviePropTypes.isRequired,
};

export default MovieItem;
