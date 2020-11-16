import { Container } from '@material-ui/core'
import React, { Component } from 'react'
import SidebarHeader from './SidebarHeader/SidebarHeader'
import SidebarContent from './SidebarContent/SidebarContent'
import './Sidebar.css'
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-container">
                <SidebarHeader />
                <SidebarContent />
            </div>
        )
    }
}
export default Sidebar
