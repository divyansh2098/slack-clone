import React, { Component } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';

import './SidebarHeader.css'
export default class SidebarHeader extends Component {
    render() {
        return (
            <div className = "sideBarHeader">
                <div className="projectHeading">
                    {/* {Expand to show a modal with project options} */}
                    <p className="projectText">Test</p>
                    <ExpandMoreIcon />
                </div>
                <div className="editIcon">
                    <EditIcon />
                </div>
            </div>
        )
    }
}
