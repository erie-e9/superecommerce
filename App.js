import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import themeReducer from './src/utils/themeReducer';
import Navigation from './src/Navigation';
import EnterComponent from './src/screens/commmonscreens/EnterScreen';

const store = createStore(combineReducers({themeReducer}), applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        {/* <EnterComponent/> */}
        <Navigation />
      </Provider>
    );
  }
}