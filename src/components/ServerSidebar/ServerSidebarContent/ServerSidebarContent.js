import React from 'react'
import Channels from './Channels'

import './ServerSidebarContent.css'
const ServerSidebarContent = (props) => {
    return (
        <div className="server-sidebar-content">
            <Channels serverId={props.serverId}/>
        </div>
    )
}

export default ServerSidebarContent