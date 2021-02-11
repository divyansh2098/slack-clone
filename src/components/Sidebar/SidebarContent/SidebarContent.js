import React, { Component } from 'react'
import Servers from './Servers'

import './SidebarContent.css'
class SidebarContent extends Component {
    render() {
        return (
            <div className="sidebar-content">
                <Servers/>
            </div>
        )
    }
}

export default SidebarContent
