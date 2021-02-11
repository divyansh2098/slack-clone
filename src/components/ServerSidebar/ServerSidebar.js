import React from 'react'
import { useParams } from 'react-router-dom'
import SideBarHeader from '../Sidebar/SidebarHeader/SidebarHeader'
import SidebarContent from '../ServerSidebar/ServerSidebarContent/ServerSidebarContent'

import './ServerSidebar.css'
const ServerSidebar = (props) => {
    const params = useParams();
    return(
        <div className="serverSidebarContainer">
            <SideBarHeader />
            <SidebarContent serverId={params.serverId}/>
        </div>
    )
}

export default ServerSidebar