import React, { Component } from 'react'

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import ChannelStrip from './ChannelStrip'
import AddChannelDialog from '../../helper/addChannelDialog'

import db from '../../../firebase'

import './Servers.css'

class Servers extends Component {
    constructor(props){
        super(props);
        this.state = {
            showChannelList: false,
            channels: [],
            showAddChannelDialog: false
        }
    }

    componentDidMount() {
        db.collection("channels").onSnapshot(snapshot=> {
            this.setState({
                channels: snapshot.docs.map(doc=> ({
                    id: doc.id,
                    name: doc.data().name
                }))
            })
        })
    }

    toggleAddChannelDialog = () => {
        this.setState(prevState=>{
            return {
                ...prevState,
                showAddChannelDialog: !prevState.showAddChannelDialog
            }
        })
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
        let channelStrips = this.state.showChannelList ? this.state.channels.map(channel => <ChannelStrip key={channel.id} id={channel.id} text={channel.name} />)
                                                        :
                                                        null
        return (
            <React.Fragment>
                <AddChannelDialog open = {this.state.showAddChannelDialog} onClose={this.toggleAddChannelDialog} />
                <div className="channelsContainer">
                    <div className="expandIcon" onClick = {this.handleExpandChannels}>
                        {arrow}
                        {this.props.text}
                    </div>
                    <div className="addChannelIcon" onClick={this.toggleAddChannelDialog}>
                        <AddIcon />
                    </div>
                </div>
                {channelStrips}
                <div className="add_channel" onClick={this.toggleAddChannelDialog}>
                    <div className="addChannel__icon">
                        <AddIcon />
                    </div>
                    <p className="addChannel_text">
                        Add Server
                    </p>
                </div>
            </React.Fragment>
        )
    }
}

export default Servers