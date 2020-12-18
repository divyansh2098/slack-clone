import React, { Component } from 'react'

import Image from '../../../assets/images/UndrawNotification.svg'

import './SidebarHeader.css'
export default class SidebarHeader extends Component {
    render() {
        return (
            <div className = "sideBarHeader">
                <div className="navbar-icon">
                    <img
                        className="slack-image"
                        src={Image}
                        alt=""
                    />
                </div>
                <p className="sidebar-heading">
                    WUPHF
                </p>
                <div className="statusIcon"></div>
            </div>
        )
    }
}
