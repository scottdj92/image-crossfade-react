import React, { useState } from "react";
import { render } from "react-dom";
import CrossFadeImage from "../index";

const App: React.SFC = () => {
    const data = ["https://www.placecage.com/200/300", "http://placekitten.com/200/300"];
    const [source, setSource] = useState(0);

    setTimeout(() => {
        source === 1 ? setSource(0) : setSource(1);
    }, 2000);

    return (
        <CrossFadeImage src={data[source]} duration={2000}/>
    );
};

render(<App />, document.getElementById("app"));
