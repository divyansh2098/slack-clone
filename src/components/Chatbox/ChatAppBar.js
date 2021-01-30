import React from 'react'

import './ChatAppBar.css'
const ChatAppBar = (props) => {
    return (
        <React.Fragment>
            <div className="chatAppBarContainer">
                Hello This is a Channel
            </div>
            {props.children}
        </React.Fragment>
    )
}

export default ChatAppBar
