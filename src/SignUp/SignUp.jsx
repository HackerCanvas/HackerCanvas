import React from 'react';
import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import ListItem from '@mui/material/ListItem';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm.jsx';


export default function SignUp(props) {
  document.body.style.backgroundColor = '#F7FBFC'
  return(
    <div id="login">
      <Typography variant="h2" id="logo2">HackerCanvas</Typography>
      <div id="divider-area">
        <Divider id="login-divider" />
      </div>
      <Typography variant="h4" id="login-text">Sign-Up</Typography>
      <div id="login-form">
      <Stack direction="column">
      <SignUpForm authenicator={props.authenicator}/>
      <Typography variant="h4" id="login-sub-text">Already have an account? 
        <Link to='/'>
          Sign-In
        </Link>
      </Typography>
      </Stack>
      </div>
    </div>
  )
}