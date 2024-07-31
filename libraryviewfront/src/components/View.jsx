import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


const Home = () => {
    
    const[rows,setRows]=useState([])
    const [open, setOpen] = useState(false);
    const [currentBookId, setCurrentBookId] = useState('');
    const [comment, setComment] = useState('');
    const [likedBooks, setLikedBooks] = useState(new Set());
    useEffect(()=>{
      axios.get('http://localhost:5000/book').then((res)=>{
     
      setRows(res.data)
    })
    },[])
    const handleLike = (id) => {
        if (likedBooks.has(id)) {
            alert('You have already liked this book');
            return;
        }

        const updatedRows = rows.map(row => {
            if (row._id === id) {
                return { ...row, likecount: row.likecount + 1 };
            }
            return row;
        });
        setRows(updatedRows);

        axios.post('http://localhost:5000/books/like/:'+id)
            .then((res) => {
                setLikedBooks(new Set([...likedBooks, id]));
                alert('you liked a book');
            })
            .catch((err) => {
                alert('Error updating like count', err);
            });
    };
    const handleRequest = (bookId, bookName) => {
        axios.post(`http://localhost:5000/books/${bookId}/request`)
          .then(() => {
            alert(`Request received for ${bookName}`);
          })
          .catch((err) => {
            console.error('Error sending request:', err);
            alert('Error sending request');
          });
      };
    const handleOpen = (bookId) => {
        setCurrentBookId(bookId);
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        setComment('');
      };
    
      const handleCommentSubmit = () => {
        axios.post(`http://localhost:5000/books/${currentBookId}/comment`, { comment })
          .then(() => {
            alert('Comment submitted');
            setOpen(false);
            setComment('');
            // Optionally update the rows to reflect the new comment
          })
          .catch((err) => {
            console.error('Error submitting comment:', err);
            alert('Error submitting comment');
          });
      };

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
            <button
                                        color="inherit"
                                        style={{ color: 'blue' }}
                                        onClick={() => handleLike(row._id)}
                                    >
                                        LIKE
                                    </button>
                                    <button
                                      color="inherit"
                                      style={{ color: 'red' }}
                                      onClick={() => handleRequest(row._id, row.title)}
                                    >
                                        REQUEST
                                    </button>
            <button  color="inherit"
                    style={{ color: 'green' }}
                    onClick={() => handleOpen(row._id)}>COMMENT</button>
                    <Link to ={`/books/${row._id}`}><button  color="inherit"
                    style={{ color: 'cyan' }}
                    >BOOK DETAILS</button></Link>
        </CardContent>
        </Card>

        </Grid>
        ))}
        </Grid>
        
        </Box>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Submit a Comment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="comment"
            label="Comment"
            type="text"
            fullWidth
            variant="outlined"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCommentSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>

            
            
        )
}

export default Home
