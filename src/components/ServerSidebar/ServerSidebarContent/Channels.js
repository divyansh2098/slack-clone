import React, { Component } from 'react'
import firebase from 'firebase'

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import ChannelStrip from './ChannelStrip'
import AddChannelsDialog from '../../helper/addChannelDialog'

import db from '../../../firebase'

import './Channels.css'

class Channels extends Component {
    constructor(props){
        super(props);
        this.state = {
            showChannelList: false,
            channels: [],
            showAddChannelDialog: false
        }
    }

    componentDidMount() {
        this.unsubscribe = null
        const listenForChannelUpdates = () => {
            this.unsubscribe = db.collection("servers").doc(this.props.serverId).onSnapshot(snapshot => setChannels(snapshot))
        }
        const setChannels = async (snapshot) => {
            const snapShotData = snapshot.data()
            if(snapShotData.channels) {
                const channelPromise = db.collection('channels').where(firebase.firestore.FieldPath.documentId(), 'in' , snapShotData.channels)
                let channels = await channelPromise.get()
                channels = channels.docs.map(channel => {
                    return {
                        ...channel.data(),
                        id: channel.id
                    }
                })
                this.setState({
                    channels: channels
                })
            }
        }
        listenForChannelUpdates()
    }

    componentWillUnmount() {
        this.unsubscribe()
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
        let channelStrips = this.state.showChannelList ? this.state.channels.map(channel => <ChannelStrip 
                                                                                            key={channel.id} 
                                                                                            id={channel.id} 
                                                                                            text={channel.name} 
                                                                                            serverId={this.props.serverId} />)
                                                                                            :
                                                                                            null
        return (
            <React.Fragment>
                <AddChannelsDialog open = {this.state.showAddChannelDialog} onClose={this.toggleAddChannelDialog} />
                <div className="channelsContainer">
                    <div className="expandIcon" onClick = {this.handleExpandChannels}>
                        {arrow}
                        Channels
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
                        Add Channel
                    </p>
                </div>
            </React.Fragment>
        )
    }
}

export default Channels