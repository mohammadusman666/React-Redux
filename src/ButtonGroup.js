import React from "react";

import store from "./store";
import setTechnology from "./actions";

const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button
        data-tech={ tech }
        key={`btn-${ i }`}
        className="hello-btn"
        onClick={ dispatchBtnAction }
        >
        { tech }
      </button>
    ))}
  </div>
);

const dispatchBtnAction = (event) => {
  const tech = event.target.dataset.tech; // get the tech data attribute
  store.dispatch(setTechnology(tech)); // dispatch the 'SET_TECHNOLOGY' action
}

export default ButtonGroup;