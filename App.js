import React from "react";
import {View, Text} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import "node-libs-react-native/globals";
import "react-native-url-polyfill/auto";
import "react-native-get-random-values";

import {Provider} from "react-redux";
import store from "./src/store/store";

import StackNavigator from "./src/navigation/StackNavigator";

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
