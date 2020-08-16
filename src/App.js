import React, { Component } from "react";

import HelloWorld from "./HelloWorld";
import store from "./store";
import setTechnology from "./actions";

class App extends Component {
  render() {
    return <HelloWorld tech={ store.getState().tech } />;
  }
}

export default App;

