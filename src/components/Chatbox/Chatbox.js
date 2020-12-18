import React, { Component } from 'react'

import ChatAppBar from './ChatAppBar'

import './Chatbox.css'
import { withRouter } from 'react-router-dom';
import db from '../../firebase'
import ChatApplication from '../ChatApplication/ChatApplication';
import ChatSection from './ChatSection'

class Chatbox extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         roomId: null,
    //         roomDetails: null,
    //         roomMessages: null
    //     }
    // }

    // componentDidMount() {
    //     this.setState({
    //         roomId: this.props.match.params.roomId
    //     })
    // }

    // componentDidUpdate(prevProps,prevState) {
    //     const roomId = this.props.match.params.roomId
    //     if(prevState.roomId!==roomId) {
    //         this.setState({
    //             roomId: roomId
    //         })
    //         const collRef = db.collection('channels')
    //         collRef.doc(roomId).onSnapshot(doc => {
    //             this.setState({
    //                 roomDetails: doc.data()
    //             })
    //         })

    //         collRef.doc(roomId)
    //         .collection('messages')
    //         .orderBy('timestamp')
    //         .onSnapshot(snapshot=>{
    //             this.setState({
    //                 roomMessages: snapshot.docs.map(doc => { 
    //                     const message_data = doc.data()
    //                     return {
    //                         username: message_data.username,
    //                         message: message_data.message,
    //                         timestamp: message_data.timestamp,
    //                         image: message_data.image,
    //                         id: doc.id
    //                     }
    //                 })
    //             })
    //         })
    //     }
    // }


    render() {
        return (
            <div className="chatBoxContainer">
                <ChatAppBar />
                <ChatSection />
            </div>
        )
    }
}

export default withRouter(Chatbox)
