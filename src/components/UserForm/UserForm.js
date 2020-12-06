import { TextField } from "@material-ui/core";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';


import "./UserForm.css";



const useStyles = (theme) => ({
    root: {
        "& .MuiTextField-root": {
          margin: theme.spacing(1),
          width: "25ch", 
        },
        
          ".MuiPaper-rounded": {
            borderRadius:"6px"
        }
      },
      modal :{
        color:"#f31276" 
        
      },
      

  });


class UserForm extends Component {
  state = {
    userData: {
      firstName: "",
      lastName: "",
      bio: "",
      quote: "",
      instagram: "",
      facebook: "",
      twitter: "",
      snapchat:""
    },
    setOpen:false,
    open:false
    
  };

  changeHandler = (input) => (event) => {
    event.preventDefault();
    const updateduserData = {
      ...this.state.userData
    };
    updateduserData[input] = event.target.value;

    this.setState({ userData:updateduserData } , ()=> {console.log(this.state.userData);} );
    
  };

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({setOpen:true,open:true}, () => {console.log(this.state)});
   
  };

  handleClose = () => {
    this.setState({setOpen:false,open:false});
  };

  

  render() {
    const { classes } = this.props;

    return (
      <div className="wrapper">
      <Card className="form-wrapper">
        <form className={classes.root} onSubmit={this.submitHandler} noValidate>
          <h2 >Let's get you started</h2>
          <Grid container spacing={12} >
          <Grid  item xs={6}>
            <TextField
              label="First Name"
              variant="outlined"
              onChange={this.changeHandler("firstName")}
              margin="dense"
              color="secondary"
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              className="lastname"
              label="Last Name"
              variant="outlined"
              onChange={this.changeHandler("lastName")}
              margin="dense"
              color="secondary"
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
              variant="filled"
              margin="dense"
              color="secondary"
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
              color="secondary"
              onChange={this.changeHandler("facebook")}
            />
            </Grid>
            <Grid item xs={6}>
            <TextField
              className="instagram"
              label="Instagram"
              variant="outlined"
              margin="dense"
              color="secondary"
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
              color="secondary"
              onChange={this.changeHandler("twitter")}
            />
            </Grid>
            
            <Grid item xs={6}>
            <TextField
              className="snapchat"
              label="SnapChat"
              color="secondary"
              variant="outlined"
              margin="dense"
              onChange={this.changeHandler("snapchat")}
            />
            </Grid>
          </Grid>
          <div>
            <button className="submit-button" type="submit">Submit</button>
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
          Name :{this.state.userData.firstName} {this.state.userData.lastName}
          <br/>
          About yourself : {this.state.userData.bio}
          <br/>
          A saying You live by : {this.state.userData.quote}
          <br/>
        </div>
        <DialogTitle className={classes.modal}>Your Social Media Presence</DialogTitle>
        <div className="modal-div">
        FaceBook : {this.state.userData.facebook}
          <br/>
        Instagram : {this.state.userData.instagram}
          <br/>
        Twitter : {this.state.userData.twitter}
          <br/>
        SnapChat : {this.state.userData.snapchat}
          <br/>
        </div>

        
        <div className="wrapper">
            <button onClick={this.handleClose} className="modal-button" >OK</button>
          </div>
        

      </Dialog>

      </div>

// 
      
    );
  }
}

export default withStyles(useStyles)(UserForm);
