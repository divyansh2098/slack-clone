import React, { Component } from 'react'

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import './ChannelStrip.css'
class ChannelStrip extends Component {
    render() {
        let imagePlaceholder = this.props.img ? <div className="profile">
                <img alt="profilePhoto" className="profilePhoto" src={this.props.img} />
                <div className="onlineIcon">
                    <FiberManualRecordIcon />
                </div>
            </div> 
        : 
        <p className="hash">#</p>
        return (
            <div className="channelStrip">
                {imagePlaceholder}
                <div className="description">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default ChannelStrip