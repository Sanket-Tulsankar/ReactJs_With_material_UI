import React from 'react'
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField'; 
import './Login.css';

function Signup() {
  return (
    <div>
      <Navbar/>
      <div className='App'>
        <Box width='500px' className='signup-box-center'>
          <Card>
            <CardContent>
              <h1 style={{ color: "lightsteelblue" }}>Sign up</h1>
              <div >
              <Typography>
                  <TextField
                    id="outlined-password-input"
                    label="First Name"
                    type="text"
                    autoComplete="current-password"
                  />
                </Typography>
                <br /><br /><Typography>
                  <TextField
                    id="outlined-password-input"
                    label="Last Name"
                    type="text"
                    autoComplete="current-password"
                  />
                </Typography>
                <br /><br /><Typography>
                  <TextField
                    id="outlined-password-input"
                    label="Email Id"
                    type="text"
                    autoComplete="current-password"
                  />
                </Typography>
                <br /><br />
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
                <Button variant="outlined">Sign up</Button>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  )
}

export default Signup;
