/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import type {Node} from 'react'

import { Provider } from "react-redux"
import { store } from "./src/redux/index"
import Navigation from "./src/navigation"
import { MenuProvider } from "react-native-popup-menu"

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <MenuProvider>
        <Navigation />
      </MenuProvider>
    </Provider>
  );
};

export default App
