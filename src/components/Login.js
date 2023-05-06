import React, { useState } from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import Navbar from './Navbar';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login() {

const[username,setUsername]=useState('');
const[password,setPassword]=useState('');

const navigate=useNavigate();

const signinhandle =()=>{
  Axios.post('http://localhost:8080/signin/validate',{
    username,password
  }).then(response=>{
    console.log(response.data);
    if(response.data){
      navigate('/recipes');
    }else{
      navigate('/signin');
    }
  }).catch(error=>{
    console.log(error);
  })
}




  return (
    <div>
      <Navbar />
      <div className='App'>
        <Box width='300px' className='box-to-center'>
          <Card>
            <CardContent>
              <h1 style={{ color: "lightsteelblue" }}>Sign In</h1>
              <div >
                <Typography>
                  <TextField
                    id="username"
                    label="Username"
                    type="text"
                    autoComplete="current-password"
                    onChange={e=>{
                      setUsername(e.target.value)
                    }}
                  />
                </Typography>
                <br /><br />
                <Typography>
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    onChange={e=>{
                      setPassword(e.target.value)
                    }}
                  />
                </Typography>
                <br /><br />
                <Button variant="outlined" onClick={signinhandle}>Sign in</Button>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  )
}

export default Login;
