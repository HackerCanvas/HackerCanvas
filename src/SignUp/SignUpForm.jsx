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
import {Link} from 'react-router-dom';

const SignUpForm = (props) => {
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    showPassword: false,
  });

  const onFormSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email
      })
    }
    fetch('/login/signup', requestOptions)
      .then(res => res.json())
      .then(res => {
        if (res.userID) {
          props.authenicator({authorized: true})
        }
        console.log('Res: ', res)
      });
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
        First Name
      </InputLabel>
      <Input
        type="firstName"
        onChange={handleInputChange("firstName")}
        value={values.firstName}
       />
       <InputLabel htmlFor="standard-adornment-password">
        Last Name
      </InputLabel>
      <Input
        type="lastName"
        onChange={handleInputChange("lastName")}
        value={values.lastName}
       />
       <InputLabel htmlFor="standard-adornment-password">
        Email
      </InputLabel>
      <Input
        type="firstName"
        onChange={handleInputChange("email")}
        value={values.email}
       />
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
        <Link to='/'>
          <Button onClick={onFormSubmit} variant="outlined" id="log-btn">Sign-Up</Button>
        </Link>
      </div>
      </Stack>
    </div>
  );
};

export default SignUpForm;