import React from 'react';
import ReactDom from "react-dom";
import App from "./App.jsx";

// ReactDom Renders the App Component to our html file, by attaching to the app id
ReactDom.render(<App />, document.getElementById('app'))

