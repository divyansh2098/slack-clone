import React, { Component } from 'react'

import MoreVertIcon from '@material-ui/icons/MoreVert';

import './SlackBrowser.css'
class SlackBrowser extends Component {
    render() {
        return (
            <div className="slackBrowser">
                <MoreVertIcon />
                <p>Browse Slack</p>                
            </div>
        )
    }
}

export default SlackBrowser
