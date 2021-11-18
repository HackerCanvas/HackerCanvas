import './styles.css';
import React, { useState } from 'react';
import ReactDom from "react-dom";
import Login from "./Login/Login.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import Canvas from "./Canvas/Canvas.jsx";
import NotFound from './NotFound.jsx';
import {BrowserRouter, Route, Link as RouterLink, Routes, Navigate} from 'react-router-dom';


export default function App() {
   const [authenication, authenicator] = useState({authorized: false})
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/signuppage" element={<SignUp authenicator={authenicator}/>} />
        { authenication.authorized? 
          <Route exact path="/" element={<Canvas />} />: 
          <Route exact path="/" element={<Login authenicator={authenicator} />} />
        }
      </Routes>
    </BrowserRouter>
  )
}
