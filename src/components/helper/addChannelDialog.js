import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import {useState} from 'react'
import db from '../../firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  paper: {
    height: '300px',
    width: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: '20px'
  },
  submitButton: {
    position: 'absolute',
    bottom: '0',
    color: '#3f0f40',
  }
}));

function SimpleDialog(props) {
  const [channelName, setChannelName] = useState('')
  
  const handleInputChange = (e) => {
    setChannelName(e.target.value)
  }
  
  const submitFormHandler = () => {
      if(channelName) {
        const collRef = db.collection('channels')
        collRef.add({
          name: channelName
        })
        setChannelName('')
        props.onClose();
      }
  }

  const handleKeyUp = (e) => {
      e.preventDefault()
      if(e.keyCode === 13) {
        submitFormHandler()
      }
  }

  const classes = useStyles()
  
  return (
    <Dialog classes={{paper: classes.paper}} onClose={props.onClose} aria-labelledby="simple-dialog-title" open={props.open}>
      <DialogTitle id="simple-dialog-title">Add a Channel</DialogTitle>
      <TextField id="outlined-basic" label="Channel Name" variant="outlined" autoFocus value={channelName}
        onChange={handleInputChange}
        onKeyUp = {handleKeyUp} />
      <Button classes={{root: classes.submitButton}} onClick={submitFormHandler}>Add</Button>
    </Dialog>
  );
}

export default SimpleDialog