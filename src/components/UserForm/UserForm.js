import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import db from '../../firebase'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

import "./UserForm.css";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { green } from "@material-ui/core/colors";



const useStyles = (theme) => ({
    root: {
        "& .MuiTextField-root": {
          margin: theme.spacing(1),
          width: "25ch",
          },
        '& label.Mui-focused': {
          color: 'green',
          },

          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'green',
            },
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
      snapchat:""
    },
    open:false,
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

    let exists = false
    userData.userName && db.collection('users').doc(userData.userName).get().then(data=>{
      const givenDoc = data.data()
      if(givenDoc) {
        exists = true;
        this.setState({
          userNameExists: true
        }, ( ) => { setTimeout(() => {
          this.setState({userNameExists:false})
      }, 5000); } )
        
      }
    })
    .then(()=>{
      if(!exists) {
        userData.userName && db.collection('users').doc(userData.userName).set({
          ...userData,
          ...user
        } ) 
        .then( () => { 
          this.setState({open:true});
         })
         .catch( (err) => {console.log(err.message)} )
      }
    })
 
  };

  handleClose = () => {
    this.setState({open:false});
  };

  
  redirect = () => {
    this.props.history.push('/guidelines')
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="wrapper">
      <Card className="form-wrapper">
        <form className={classes.root} onSubmit={this.submitHandler} noValidate>
          <h2 >Let's get you started</h2>
          <Grid container spacing={12} >
            <Grid item xs={12}>
            <TextField
              
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
              className="bio"
              label="Tell us about yourself"
              multiline
              color="secondary"
              rows="2"
              style = {{width: 440}}
              variant="outlined"
              onChange={this.changeHandler("bio")}
            />
          </div>
          <div>
            <h4 >A saying you live by</h4>
            <TextField
              className="quote"
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
              className="facebook"
              label="FaceBook"
              variant="outlined"
              margin="dense"
              
              onChange={this.changeHandler("facebook")}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              className="instagram"
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
              className="twitter"
              label="Twitter"
              variant="outlined"
              margin="dense"
              
              onChange={this.changeHandler("twitter")}
            />
            </Grid>
            
            <Grid item xs={6}>
            <TextField
              className="snapchat"
              label="SnapChat"
              
              variant="outlined"
              margin="dense"
              onChange={this.changeHandler("snapchat")}
            />
            </Grid>
          </Grid>
          <div>
            <button className="submit-button" type="submit">Submit</button>
            <button onClick={this.redirect} >click for guidelines</button>
          </div>
        </form>
      </Card>

      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className={classes.modal} id="alert-dialog-title">SUBMITTED SUCCESFULLY</DialogTitle>
        <div className="modal-div">
          User Name : {this.state.userData.userName}
          <br/>
          About yourself : {this.state.userData.bio}
          <br/>
          A saying You live by : {this.state.userData.quote}
          <br/>
        </div>
        <DialogTitle className={classes.modal}>Your Social Media Presence</DialogTitle>
        <div className="modal-div">
        <p>
        FaceBook : {this.state.userData.facebook ? <DoneIcon style={{color: 'green'}} /> : <ClearIcon style={{color:'red'}} />}
        </p>
        <p>
        Instagram : {this.state.userData.instagram ? <DoneIcon style={{color: 'green'}} /> : <ClearIcon style={{color:'red'}} />}
        </p>
        <p>
        Twitter : {this.state.userData.twitter ? <DoneIcon style={{color: 'green'}} /> : <ClearIcon style={{color:'red'}} />}
        </p>
        <p>
        SnapChat : {this.state.userData.snapchat ? <DoneIcon style={{color: 'green'}} /> : <ClearIcon style={{color:'red'}} />}
        </p>
        </div>
        <div className="wrapper">
            <button onClick={this.handleClose} className="modal-button" >OK</button>
          </div>
      </Dialog>
      </div>   
    );
  }
}

const mapStatetoProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStatetoProps,null)(withStyles(useStyles)(withRouter(UserForm)));
