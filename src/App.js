import React, { Component } from "react";
import { createStore } from "redux";

import HelloWorld from "./HelloWorld";
import reducer from './reducers';

const initialState = { tech: "React " };
const store = createStore(reducer, initialState);

class App extends Component {
  render() {
    return <HelloWorld tech={ store.getState().tech } />;
  }
}

export default App;

