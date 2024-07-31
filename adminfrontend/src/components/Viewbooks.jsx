import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';



const Home = () => {
    
    const[rows,setRows]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/book').then((res)=>{
     
      setRows(res.data)
    })
    },[])
    // const handleLike = (id) => {
    //     const updatedRows = rows.map(row => {
    //         if (row._id === id) {
    //             return { ...row, likecount: row.likecount + 1 };
    //         }
    //         return row;
    //     });
    //     setRows(updatedRows);

    //     axios.post(`http://localhost:5000/books/${id}/like`).then((res) => {
    //         console.log('Like count updated successfully');
    //     }).catch((err) => {
    //         console.error('Error updating like count', err);
    //     });
    // };
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/removebook/${id}`)
            .then((res) => {
                setRows(rows.filter(row => row._id !== id));
                alert('Book deleted successfully');
            })
            .catch((err) => {
                console.error('Error deleting book', err);
            });
    };

    // const handleRequest = () => {
    //     alert('Request sent');
    // };

    return (
    <div>

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
                {rows.map((row)=>(
        <Grid item xs={3}>

        <Card key={row.title} sx={{ maxWidth: 345 }}>
        
        <CardMedia
            sx={{ height: 300 }}
            image={row.image}
            title={row.title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            TITLE : {row.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            RATING : {row.rating}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ISBN : {row.ISBN}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            DESCRIPTION : {row.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            AUTHOR : {row.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            LIKES : {row.likecount}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            RENTAL STATUS : {row.rented}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Returndate : {row.returndate}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            COMMENTS : {row.comment}
            </Typography>
            {/* <button
                                        color="inherit"
                                        style={{ color: 'blue' }}
                                        onClick={() => handleLike(row._id)}
                                    >
                                        LIKE
                                    </button> */}
                                    {/* <button
                                        color="inherit"
                                        style={{ color: 'red' }}
                                        onClick={handleRequest}
                                    >
                                        REQUEST
                                    </button> */}
                                    <button
                                        color="inherit"
                                        style={{ color: 'orange' }}
                                        onClick={() => handleDelete(row._id)}
                                    >
                                        DELETE
                                    </button>
            {/* <button color="inherit" style={{color:'green'}}>COMMENT</button> */}
        </CardContent>
        </Card>

        </Grid>
        ))}
        </Grid>
        
        </Box>

            </div>
        )
}

export default Home
