import './styles.scss';
import React from 'react';
import ReactDom from "react-dom";
import Homepage from "./Homepage.jsx";

console.log('App has loaded')

ReactDom.render(<Homepage />, document.getElementById('app'))

