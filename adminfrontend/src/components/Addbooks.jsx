import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useLocation } from 'react-router-dom';




const Addbooks = () => {
  const [form,setForm]=useState({image:'',title:'',rating:'',ISBN:'',description:'',author:'',likecount:'',rented:'',returndate:'',comments:''})
  const location=useLocation()
  function valueAdd(){
    //console.log(form)
    // if(location.state!=null){
    //   axios.put('http://localhost:4000/movieedit/'+location.state.val._id,form).then((res)=>{
    //     alert('Data updated succesfully')
    //   }).catch((error)=>{
    //     console.log(error)
    //   })
    // }
    //else{
      axios.post('http://localhost:5000/addbook',form).then((res)=>{
        //setData(res.data)
        alert('Data added')
        }).catch((error)=>{
        console.log(error)
    })
     //}
  }
  function valueCap(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
      if(location.state!=null){
        setForm({...form,
          image:location.state.val.image,
          title:location.state.val.title,
          rating:location.state.val.rating,
          ISBN:location.state.val.ISBN,
          description:location.state.val.description,
          author:location.state.val.author,
          likecount:location.state.val.likecount,
          rented:location.state.val.rented,
          returndate:location.state.val.returndate,
          comments:location.state.val.comments
        })
      }
  },[])
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    <div>
      <TextField  label="IMAGE URL" variant="outlined" name='image'
          value={form.image}
          onChange={valueCap}/>
          </div>
    <div>
      <TextField  label="BOOK TITLE" variant="outlined" name='title'
         value={form.title}
          onChange={valueCap}/>
          </div>
          <div>
      <TextField  label="BOOK RATING" variant="outlined" name='rating'
         value={form.rating}
          onChange={valueCap}/>
          </div>
          <div>
      <TextField  label="ISBN" variant="outlined" name='ISBN'
         value={form.ISBN}
          onChange={valueCap}/>
          </div>
        
    <div>
      <TextField  label="BOOK DESCRIPTION" variant="outlined" name='description'
         value={form.description}
          onChange={valueCap}/>
          </div>
    <div>
      <TextField  label="BOOK AUTHOR" variant="outlined" name='author'
         value={form.author}
          onChange={valueCap}/>
          </div>
          <div>
      <TextField  label="BOOK LIKES" variant="outlined" name='likecount'
         value={form.likecount}
          onChange={valueCap}/>
          </div>
          <div>
      <TextField  label="BOOK RENTED" variant="outlined" name='rented'
         value={form.rented}
          onChange={valueCap}/>
          </div>
          <div>
      <TextField  label="RETURNDATE" variant="outlined" name='returndate'
         value={form.returndate}
          onChange={valueCap}/>
          </div>
          <div>
      <TextField  label="BOOK COMMENTS" variant="outlined" name='comments'
         value={form.comments}
          onChange={valueCap}/>
          </div>
      <div>
      <Button variant="outlined" onClick={valueAdd}>ADD BOOK</Button>
      </div>
    </Box>
  )
}

export default Addbooks