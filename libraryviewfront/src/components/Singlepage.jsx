import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {CardMedia, Grid } from '@mui/material';

const Singlepage = () => {
  const { id } = useParams(); // Get the ID from the URL parameters
  const [book, setBook] = useState({}); // Use null for the initial state
  const [rows,setRows] = useState({});
  const [error, setError] = useState(null); // State for handling errors

  useEffect(() => {
    // console.log(id)
    axios.get('http://localhost:5000/books/:'+id)
      .then((res) => {
        const bookData = res.data.find(row=>row._id == id);
        setBook(bookData);
        console.log(bookData);
      })
      .catch((err) => {
        console.error('Error fetching book data:', err);
        setError('Error fetching book data'); // Set error state
      });
  }, [id]);
  // console.log(book)

  if (error) {
    return <Typography variant="h5">Error: {error}</Typography>;
  }

  if (!rows) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  return (
    
     <div className='pageContainer'>
     <div style={{ marginLeft: '30px' }} className='mainDiv'>
       <br /><br /><br /><br />

       <Grid container spacing={1} >
       <Grid item xs={3}>
       <Card sx={{ width: 450}}>
       <CardContent>
       <Typography gutterBottom variant="h5" component="div">
             TITLE : {book.title}
             </Typography>
             <Typography variant="body2" color="text.secondary">
            RATING : {book.rating}
             </Typography>
             <Typography variant="body2" color="text.secondary">
             ISBN : {book.ISBN}
             </Typography>
             <Typography variant="body2" color="text.secondary">
             DESCRIPTION : {book.description}
             </Typography>
             <Typography variant="body2" color="text.secondary">
             AUTHOR : {book.author}
             </Typography>
             <Typography variant="body2" color="text.secondary">
             LIKES : {book.likecount}
             </Typography>
             <Typography variant="body2" color="text.secondary">
            RENTAL STATUS : {book.rented}
             </Typography>
             <Typography variant="body2" color="text.secondary">
             Returndate : {book.returndate}
             </Typography>
             <Typography variant="body2" color="text.secondary">
             COMMENTS : {book.comment}
            </Typography>
      </CardContent>
       {/* <CardActions>
    //     <Button size="small">Share</Button>
    //     <Button href='https://www.imdb.com/title/tt25400540/' size="small">Learn More</Button>
    //   </CardActions> */}
     </Card>
         </Grid>

      <Grid item xs={6} sx={{ ml: 20 }}>
      <Card sx={{ width: 350 }}>
             <CardMedia
               sx={{ height: 500, objectFit: 'scale-down', alignContent:'right' }}
              image={book.image}
               title={book.title}
             /></Card>
             </Grid> 
     </Grid>
    

      {/* <Card sx={{ minWidth: 275, marginTop: '18%', width: '60%', display: 'flex' ,height:'75%'}}>
    //     <CardMedia sx={{height: 250}}>
    //     <img src={book.img} alt="" />
    //     </CardMedia>
    //     <CardContent>
    //     <Typography variant="h6" component="div">
    //     Name: {book.title}
    //     </Typography>
    //     <Typography variant="h6" component="div">
    //     Author: {book.author}
    //     </Typography>
    //       <Typography variant="h6" component="div">
    //         Year: {book.year}
    //       </Typography>
    //       <Typography variant="h6" component="div">
    //         Genre: {book.genre}
    //       </Typography>
    //       <Typography variant="h6" component="div">
    //         ISBN Number: {book.ISBN}
    //       </Typography>
    //     </CardContent>
    //   </Card> */}
     </div>
     </div>
  );
};

export default Singlepage;