import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
const Home = () => {
    const [rows,setRows]=useState([])
    useEffect(()=>{
    axios.get('http://localhost:5000/requests').then((res)=>{
      // console.log(res.data.users)
      setRows(res.data)
    })

    },[])
    const handleMarkAsRead = (bookId) => {
      // Remove the row locally
      setRows(rows.filter(row => row.bookId !== bookId));
      // Optionally, make an API call to update the server
      axios.delete(`http://localhost:5000/requests/${bookId}`).then((res) => {
        console.log(res.data.message);
      }).catch((error) => {
        console.error("There was an error deleting the book!", error);
      });
    };
  return (
<TableContainer style={{marginTop:'7%',fontFamily:'Aria'}} component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          {/* <TableCell style={{fontFamily:'Aria'}}>TITLE</TableCell> */}
          <TableCell align="center" style={{fontFamily:'Aria'}}>bookid</TableCell>
          <TableCell align="center" style={{fontFamily:'Aria'}}>bookName</TableCell>
          {/* <TableCell align="center" style={{fontFamily:'Aria'}}>IMAGE</TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
         {rows.map((row) => (
          <TableRow
            key={row.bookId}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
             <TableCell component="th" scope="row" style={{fontFamily:'Aria'}}>
              {row.bookId}
            </TableCell> 
            <TableCell align="right" style={{fontFamily:'Aria'}}>{row. bookName}</TableCell>
            {/* <TableCell align="right" style={{fontFamily:'Aria'}}>{row.category}</TableCell>
            <TableCell align="right" style={{fontFamily:'Aria'}}>{row.image}</TableCell> */}
             <TableCell align="center" style={{ fontFamily: 'Aria' }}>
                <Button variant="contained" color="primary" onClick={() => handleMarkAsRead(row.bookId)}>
                  Mark as Read
                </Button>
              </TableCell>
          </TableRow>
        ))} 
      </TableBody>
    </Table>
  </TableContainer>
  )
}
export default Home