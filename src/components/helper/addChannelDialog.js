import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from 'react'
import db from '../../firebase'
import { useSelector } from 'react-redux';
import './addChannelDialog.css'
import { useParams } from 'react-router-dom';

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
  const [channelName, setchannelName] = useState('')
  const user = useSelector(state=>state.user)
  const params = useParams()
  const serverId = params.serverId
  
  const handleInputChange = (e) => {
    setchannelName(e.target.value)
  }
  
  const submitFormHandler = () => {
      if(channelName) {
        const channelRef = db.collection('channels')
        const serverDocRef = db.collection('servers').doc(serverId)
        const addChannel = async () => {
          const response = await channelRef.add({'name': channelName,'created-by': user.uid})
          const channelId = response.id
          await addChannelToServer(channelId) 
        }
        const addChannelToServer = async (channelId) => {
          const response = await serverDocRef.get()
          const serverData = {...response.data()}
          let channels = null
          if(serverData.channels) {
            channels = [...serverData.channels]
            channels.push(channelId)
          } else {
            channels = [channelId]
          }
          if(channels) {
            serverDocRef.set({
              channels: channels
            },{merge: true});
          }
        }
        addChannel()
        setchannelName('')
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
      <div className="channelFormHolder">
        <div className="dialogHeading">
          Add a Channel
        </div>
        <TextField id="outlined-basic" label="Channel Name" variant="outlined" autoFocus value={channelName}
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