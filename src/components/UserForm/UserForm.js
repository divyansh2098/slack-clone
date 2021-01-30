import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import db from '../../firebase'
import SaveIcon from '@material-ui/icons/Save';
import firebase from 'firebase'
import SaveSuccessPopup from '../helper/saveSuccessPopup'

import {setUserData} from '../../store/actions/action'

import "./UserForm.css";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';



const useStyles = (theme) => ({
    root: {
        "& .MuiTextField-root": {
          margin: theme.spacing(1),
          width: "25ch",
          },
        '& label.Mui-focused': {
          color: 'var(primary-background)',
          },

          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'var(--primary-background)',
          },
        },
    },

    card: {
      backgroundColor: 'var(--primary-content)',
      textAlign: 'center',
      minWidth: '275px',
      maxWidth: '450px',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px 40px',
      color: 'var(--primary-background)',
      borderRadius: '24px'
    },

    textField: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--primary-background)"
      },
      "& .MuiOutlinedInput-input": {
        color: "var(--primary-background)"
      },
    },

    modal :{
        color:"#753a88" 
        
      },
});
//

class UserForm extends Component {
  state = {
    userData: {
      userName: "",
      bio: "",
      quote: "",
      instagram: "",
      facebook: "",
      twitter: "",
      snapchat:"",
      servers: []
    },
    open: false,
    userNameExists: false  
  };

  changeHandler = (input) => (event) => {
    event.preventDefault();
    const updateduserData = {
      ...this.state.userData
    };
    updateduserData[input] = event.target.value;

    this.setState({ userData: updateduserData });
    
  };

  submitHandler = (event) => {
    event.preventDefault();

    let userData = {...this.state.userData}
    let {id,...user} = {...this.props.user}

    let uid = firebase.auth().currentUser.uid

    db.collection('userName').doc(userData.userName).get()
    .then(doc=>{
      if(doc.exists) {
        this.setState({
          userNameExists: true
        }, () => setTimeout(()=>{
          this.setState({
            userNameExists: false
          })
        },3000))
      }
    })
    .then(() => {
      if(!this.state.userNameExists) {
        db.collection('users').doc(uid).set({
          ...user,
          ...userData
        })
        .then(d => {
          db.collection('userName').doc(userData.userName).set({
            uid: uid
          })
        })
        .then(data => {
          this.setState({
            open: true
          })
        })
        .catch(err => {
          console.log(err.message)
        })
      }

    })
  };

  handleClose = () => {
    this.setState({open:false});
    this.props.history.replace('/chat')
  };

  
  redirect = () => {
    this.props.history.push('/guidelines')
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="wrapper">
      <Card className={classes.card + ' form-wrapper'}>
        <form className={classes.root} onSubmit={this.submitHandler} noValidate>
          <h2 >Let's get you started</h2>
          <Grid container spacing={12} >
            <Grid item xs={12}>
            <TextField
              className={classes.textField}
              error = {this.state.userNameExists}
              helperText= {this.state.userNameExists ? "User Name already exists" : null}
              label="username"
              style = {{width: 440}}
              variant="outlined"
              onChange={this.changeHandler("userName")}
              margin="dense"
              
            />
            </Grid>
          </Grid>
          <div>
            <TextField
              className={classes.textField}
              label="Tell us about yourself"
              multiline
              rows="2"
              style = {{width: 440}}
              variant="outlined"
              onChange={this.changeHandler("bio")}
            />
          </div>
          <div>
            <h4 >A saying you live by</h4>
            <TextField
              className={classes.textField}
              variant="outlined"
              margin="dense"
              style = {{width: 440}}
              onChange={this.changeHandler("quote")}
            />
          </div>
          <h4 >Your Social Media Presence</h4>
          <Grid container spacing={12}>
              <Grid item xs={6}>
            <TextField
              className={classes.textField}
              label="Facebook"
              variant="outlined"
              margin="dense"
              
              onChange={this.changeHandler("facebook")}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              className={classes.textField}
              label="Instagram"
              variant="outlined"
              margin="dense"
              
              onChange={this.changeHandler("instagram")}
            />
            </Grid>
            </Grid>
            <Grid container spacing={12}>
            <Grid item xs={6}>
            <TextField
              className={classes.textField}
              label="Twitter"
              variant="outlined"
              margin="dense"
              
              onChange={this.changeHandler("twitter")}
            />
            </Grid>
            
            <Grid item xs={6}>
            <TextField
              className={classes.textField}
              label="Snapchat"
              
              variant="outlined"
              margin="dense"
              onChange={this.changeHandler("snapchat")}
            />
            </Grid>
          </Grid>
          <div>
            <button className="submit-button" type="submit">
              <div className="buttonContent">
                <p>Save</p>
                <SaveIcon />
              </div>
            </button>
          </div>
        </form>
      </Card>
      <SaveSuccessPopup open={this.state.open} closeHandler={this.handleClose}/>
      </div>   
    );
  }
}

const mapStatetoProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUserData: (user) => dispatch(setUserData(user))
  }
}

export default connect(mapStatetoProps,mapDispatchToProps)(withStyles(useStyles)(withRouter(UserForm)));
