import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Recipes() {

const[myData,setData] = useState([]);

useEffect(()=>{
    Axios.get('http://localhost:8080/recipes/getAll').then((response)=>{
    setData(response.data);
   // console.log(myData);
    }).catch((error)=>{
        console.log(error);
    })
},[]);

    return(
<div>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:'red' , textAlign:'center'}}>Recipe Name</TableCell>
            <TableCell align="right" style={{color:'red' , textAlign:'center'}}>Recipe Ingredients</TableCell>
            <TableCell align="right" style={{color:'red', textAlign:'center'}}>Recipe Direction</TableCell>
            <TableCell align="right" style={{color:'red', textAlign:'center'}}>Recipe vegNon-veg</TableCell>
            <TableCell align="right" style={{color:'red', textAlign:'center'}}>Recipe Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myData.map((res) => (
            <TableRow
              key={res.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {res.recipeName}
              </TableCell>
              <TableCell align="right" style={{textAlign:'center'}}>{res.ingredients}</TableCell>
              <TableCell align="right" style={{textAlign:'center'}}>{res.direction}</TableCell>
              <TableCell align="right" style={{textAlign:'center'}}>{res.vegNonVeg}</TableCell>
              <TableCell align="right" style={{textAlign:'center'}}>{res.type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</div>
    )
}
export default Recipes;