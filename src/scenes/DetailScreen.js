import React from 'react';

import { View, Image } from 'react-native';
import styled from 'styled-components/native';

const BodyContainer = styled.View`
  padding-left: 10px;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 200px;
`;

const Divider = styled.View`
  border-bottom-color: grey;
  border-bottom-width: 1px;
`;

const LinkButton = styled.TouchableOpacity`
  padding-vertical: 10px;
  padding-right: 30px;
`;

const LinkButtonText = styled.Text`
  color: #7CA9FC;
`;

const MovieTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  padding-vertical: 10px;
`;

const Info = styled.Text`
  padding-vertical: 10px;
  padding-right: 20px;
`;

const DetailScreen = ({ route, navigation }) => {
  const { movie } = route.params;

  return (
    <View>
      <ImageContainer>
        <Image source={{ uri: movie.multimedia.src }} resizeMode="cover" style={{ flex: 1 }} />
      </ImageContainer>

      <BodyContainer>
        <MovieTitle>{movie.display_title}</MovieTitle>

        <Divider />

        <Info>{movie.headline}</Info>

        <Divider />

        <Info>{`By ${movie.byline}`}</Info>

        <Divider />

        <Info>{movie.summary_short}</Info>

        <Divider />

        <Info>{`Release date: ${movie.publication_date}`}</Info>

        <Divider />

        <LinkButton onPress={() => navigation.navigate('WebView', { url: movie.link.url })}>
          <LinkButtonText>{`Read the New York Times Review of ${movie.display_title} >>`}</LinkButtonText>
        </LinkButton>
      </BodyContainer>

    </View>
  );
};

export default DetailScreen;
