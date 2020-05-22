import React from "react";
import { ScrollView } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";

import PropTypes from "prop-types";

import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherSaga);

const Provider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ScrollView>{children}</ScrollView>
    </ReduxProvider>
  );
};

const styles = {
  content: {
    alignItems: "center"
  }
};

Provider.propTypes = {
  children: PropTypes.element.isRequired
};

export default Provider;
