import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs aria-label="basic tabs example">
                    <Link to='/'><Tab label="Home" /></Link>
                    <Link to='/signin'><Tab label="Sign in" /></Link>
                    <Link to='/signup'> <Tab label="Sign Up" /></Link>
                    <Link to='/about'> <Tab label="About" /></Link>
                </Tabs>
            </Box>
        </div>
    )
}

export default Navbar;
