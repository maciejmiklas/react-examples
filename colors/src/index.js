import React from "react";
import {render} from "react-dom";
import './app.css'
import App from "./App";

const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`)
window.React = React;
render(
    <App/>,
    document.getElementById("react-container")
);
