import React from "react";
import ReactDOM from "react-dom";

const fname = "Angela";
const lname = "Yu";
const number = 7;

ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}
    </h1>
    <p>Your lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
