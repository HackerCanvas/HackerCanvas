import React from "react";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import Button from "mui-button";
import Link from '@mui/material/Link';
import {BrowserRouter, Route, Link as RouterLink, Routes} from 'react-router-dom';
import Login from './Login.jsx';



const LoginForm = () => {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
    showPassword: false,
    loggedIn: false
  });

  const onFormSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      })
    }
    fetch('/login/signin', requestOptions)
      .then(res => res.json())
      .then(res => console.log('Res: ', res))
      .then(values.loggedIn = true)
  }


  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div id="login-form">
    <Stack spacing={2} direction="column">
    <InputLabel htmlFor="standard-adornment-password">
        Username
      </InputLabel>
      <Input
        type="username"
        onChange={handleInputChange("username")}
        value={values.username}
       />
      <InputLabel htmlFor="standard-adornment-password">
        Password
      </InputLabel>
      <Input
        type={values.showPassword ? "text" : "password"}
        onChange={handleInputChange("password")}
        value={values.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <div id="log-btn-area">
      <Button onClick={onFormSubmit} variant="outlined" id="log-btn">Log-In</Button>
      {/* Test Button Below */}
      <Link component={RouterLink} to='/loginpage' >
        <Button>Button</Button>
      </Link>
      </div>
      </Stack>

    </div>
  );
};

export default LoginForm;