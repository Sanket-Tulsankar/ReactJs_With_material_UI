import React, { useState } from 'react'
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import './Login.css';
import axios from 'axios';

function Signup() {

  const [f_name, setFname] = useState('');
  const [l_name, setLname] = useState('');
  const [e_mail, setEmail] = useState('');
  const [u_sername, setUsername] = useState('');
  const [p_assword, setPassword] = useState('');

  const handleSubmit = () => {
    axios.post('http://localhost:8080/signup/create', {
      fname: f_name,
      lname: l_name,
      email: e_mail,
      username: u_sername,
      password: p_assword
    }).then((res) => {
            console.log(res);
    }).catch((err) => {
            console.log(err);
    })

  }


  return (
    <div>
      <Navbar />
      <div className='App'>
        <Box width='500px' className='signup-box-center'>
          <Card>
            <CardContent>
              <h1 style={{ color: "lightsteelblue" }}>Sign up</h1>
              <div >
                <Typography>
                  <TextField
                    id="first-name"
                    label="First Name"
                    type="text"
                    autoComplete="current-password" onChange={(e) => setFname(e.target.value)}
                  />
                </Typography>
                <br /><br /><Typography>
                  <TextField
                    id="last-name"
                    label="Last Name"
                    type="text"
                    autoComplete="current-password" onChange={(e) => setLname(e.target.value)}
                  />
                </Typography>
                <br /><br /><Typography>
                  <TextField
                    id="email"
                    label="Email Id"
                    type="text"
                    autoComplete="current-password" onChange={(e) => setEmail(e.target.value)}
                  />
                </Typography>
                <br /><br />
                <Typography>
                  <TextField
                    id="username"
                    label="Username"
                    type="text"
                    autoComplete="current-password" onChange={(e) => setUsername(e.target.value)}
                  />
                </Typography>
                <br /><br />
                <Typography>
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password" onChange={(e) => setPassword(e.target.value)}
                  />
                </Typography>
                <br /><br />
                <Button variant="outlined" onClick={ handleSubmit}>Sign up</Button>
              </div>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  )
}

export default Signup;
