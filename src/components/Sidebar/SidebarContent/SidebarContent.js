import React, { Component } from 'react'

import SlackBrowser from './SlackBrowser'
import Channels from './Channels'

import './SidebarContent.css'
class SidebarContent extends Component {
    render() {
        return (
            <div className="sidebar-content">
                <SlackBrowser />
                <Channels text="Channels"/>
                <Channels text="Direct Messages"/>
            </div>
        )
    }
}

export default SidebarContent
