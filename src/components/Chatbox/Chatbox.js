import React, { Component } from 'react'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Message from './Message'
import ChatInput from './ChatInput'

import './Chatbox.css'
import { withRouter } from 'react-router-dom';
import db from '../../firebase'

class Chatbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roomId: null,
            roomDetails: null,
            roomMessages: null
        }
    }

    componentDidMount() {
        this.setState({
            roomId: this.props.match.params.roomId
        })
    }

    componentDidUpdate(prevProps,prevState) {
        const roomId = this.props.match.params.roomId
        if(prevState.roomId!==roomId) {
            this.setState({
                roomId: roomId
            })
            const collRef = db.collection('channels')
            collRef.doc(roomId).onSnapshot(doc => {
                this.setState({
                    roomDetails: doc.data()
                })
            })

            collRef.doc(roomId)
            .collection('messages')
            .orderBy('timestamp')
            .onSnapshot(snapshot=>{
                this.setState({
                    roomMessages: snapshot.docs.map(doc => { 
                        const message_data = doc.data()
                        return {
                            username: message_data.username,
                            message: message_data.message,
                            timestamp: message_data.timestamp,
                            image: message_data.image,
                            id: doc.id
                        }
                    })
                })
            })
        }
    }


    render() {
        return (
            <div className="chatBoxContainer">
                <div className="chatBox__header">
                    <div className="channel__name">
                        <p><strong># {this.state.roomDetails ? this.state.roomDetails.name : null}</strong></p>
                        <StarBorderIcon />
                    </div>
                    <div className="info">
                        <InfoOutlinedIcon />
                        <p>Details</p>
                    </div>
                </div>
                <div className="messages_container">
                    { this.state.roomMessages &&
                        <div className="chat__messages">
                            {
                                this.state.roomMessages.map(message => <Message key={message.id} messageData={message}/>)
                            }
                        </div>
                    }
                </div>
                <ChatInput roomId={this.state.roomId} roomName={this.state.roomDetails?.name} />
            </div>
        )
    }
}

export default withRouter(Chatbox)
