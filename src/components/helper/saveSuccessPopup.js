import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const saveSuccessPopup = (props) => {
    return(
        <Dialog
        open={props.open}
        onClose={props.closeHandler}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
            <div className="successPopupContainer">
                <CheckCircleIcon className="circleIcon" />
                <h2 className="welcomeText">

                </h2>
            </div>
      </Dialog>
    )
}

export default saveSuccessPopup