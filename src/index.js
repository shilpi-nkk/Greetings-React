//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const styleHead = {
  color: "red",
  fontSize: "40px",
  border: "3px dashed blue",
  textAlign: "center",
  height: "150px",
  backgroundColor: "gray"
};

var greet = "morning";
const d = new Date().getHours();
if (d >= 12 && d < 18) {
  greet = "afternoon";
  styleHead.color = "pink";
} else if (d >= 18) {
  greet = "evening";
  styleHead.color = "blue";
} else styleHead.color = "yellow";
ReactDOM.render(
  <>
    <h1>Greetings</h1>
    <h1 style={styleHead}>good {greet}</h1>
  </>,
  document.getElementById("root")
);
