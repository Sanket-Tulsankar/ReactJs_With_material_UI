import React from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import Navbar from './Navbar';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


function Login() {
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
                    id="outlined-password-input"
                    label="Username"
                    type="text"
                    autoComplete="current-password"
                  />
                </Typography>
                <br /><br />
                <Typography>
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                </Typography>
                <br /><br />
                <Button variant="outlined">Sign in</Button>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  )
}

export default Login;
