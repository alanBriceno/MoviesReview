import React from 'react';

import { WebView } from 'react-native-webview';

const WebViewScreen = ({ route }) => (
  <WebView
    source={{ uri: route.params.url }}
  />
);

export default WebViewScreen;
