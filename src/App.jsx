import './styles.css';
import React from 'react';
import ReactDom from "react-dom";
import Login from "./Login/Login.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import Canvas from "./Canvas/Canvas.jsx";
import NotFound from './NotFound.jsx';
import {BrowserRouter, Route, Link as RouterLink, Routes} from 'react-router-dom';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/loginpage" element={<Login />} />
        <Route exact path="/"  element={<Canvas />} />
        <Route exact path="/signuppage" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
