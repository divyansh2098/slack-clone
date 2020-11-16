import React, { Component } from 'react'

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import ChannelStrip from './ChannelStrip'
import profilePhoto from '../../../assets/images/profile.jpg'

import './Channels.css'

class Channels extends Component {
    constructor(props){
        super(props);
        this.state = {
            showChannelList: false
        }
    }

    handleExpandChannels = () => {
        this.setState(prevState=> {
            return({
                showChannelList : !prevState.showChannelList
            })
        })
    }
    render() {
        let arrow = this.state.showChannelList ? <ArrowDropDownIcon /> : <ArrowRightIcon />
        let channelStrips = this.state.showChannelList ? <div className="channelStrips">
                                                            <ChannelStrip text="general" img={profilePhoto} />
                                                        </div>
                                                        :
                                                        null
        return (
            <React.Fragment>
                <div className="channelsContainer">
                    <div className="expandIcon" onClick = {this.handleExpandChannels}>
                        {arrow}
                        {this.props.text}
                    </div>
                    <div className="addChannelIcon">
                        <AddIcon />
                    </div>
                </div>
                {channelStrips}
            </React.Fragment>
        )
    }
}

export default Channels