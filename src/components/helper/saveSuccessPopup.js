import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import doneImage from '../../assets/images/undraw_done.svg';
import './saveSuccessPopup.css';


const saveSuccessPopup = (props) => {
    return(
        <Dialog
        open="true"
        onClose={props.closeHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
           <div className="dialog-div">
           <div>
            <h2 className="welcomeText">submitted succesfully</h2>
            </div>
            <img src={doneImage} alt=""/>
            
            <div className="button-container">
                <button className="done-button" >Let's Go</button>
            </div>
        </div> 
      </Dialog>
    )
}

export default saveSuccessPopup