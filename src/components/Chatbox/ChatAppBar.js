import React from 'react'

import './ChatAppBar.css'
const ChatAppBar = (props) => {
    return (
        <React.Fragment>
            <div className="chatAppBarContainer">
                <div className="ChannelAppBarHeader">
                    {props.channelData.name}                
                </div>
            </div>
            {props.children}
        </React.Fragment>
    )
}

export default ChatAppBar
