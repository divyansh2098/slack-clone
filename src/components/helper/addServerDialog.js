import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import firebase from 'firebase'
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import {useState} from 'react'
import db from '../../firebase'
import { useSelector } from 'react-redux';
import './addServerDialog.css'

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
  const [serverName, setserverName] = useState('')
  const user = useSelector(state=>state.user)
  
  const handleInputChange = (e) => {
    setserverName(e.target.value)
  }
  
  const submitFormHandler = () => {
      if(serverName) {
        const collRef = db.collection('servers')
        collRef.add({
          'name': serverName,
          'admin': user.uid
        })
        setserverName('')
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
      <div className="serverFormHolder">
        <div className="dialogHeading">
          Add a Server
        </div>
        <TextField id="outlined-basic" label="Server Name" variant="outlined" autoFocus value={serverName}
          onChange={handleInputChange}
          onKeyUp = {handleKeyUp} />
        <button className="submitButton" onClick={submitFormHandler}>
          ADD
        </button>
      </div>
    </Dialog>
  );
}

export default SimpleDialog