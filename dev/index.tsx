import React from "react";
import { render } from "react-dom";
import CrossFadeImage from "../index";

const App = () => (
    <CrossFadeImage src="https://www.placecage.com/200/300"/>
);

render(<App/>, document.getElementById("app"));
