import React, { useState} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import axios from 'axios';
import useStyles from './styles';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Form = () => {
  const [postData, setPostData] = useState({ 
    creator: '', 
    title: '', 
    message: '', 
    tags: '', 
    selectedFile: '' 
  });

  const classes = useStyles();



  const clear = () => {
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!postData.creator || !postData.title || !postData.message || !postData.selectedFile ){
      return toast.error('Please fill out the entire form!')
  }

  try {
    await axios.post('/api/posts', {
      creator: postData.creator,
      title: postData.title,
      message: postData.message,
      tags: postData.tags,
      selectedFile: postData.selectedFile
  }).then(
    toast.success('Memory added!')
  ).then(
    clear()
  )
  
  } catch (error) {
    console.log(error)
  }

    
      
  };

  return (
    <Paper className={classes.paper}>
      <ToastContainer position="bottom-center" limit={1} />
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography></Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;