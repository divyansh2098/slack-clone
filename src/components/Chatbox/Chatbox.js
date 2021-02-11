import React, {useEffect, useState} from 'react'

import ChatAppBar from './ChatAppBar'
import ChatSection from './ChatSection'
import ChatInput from './ChatInput'
import Loading from '../helper/Loading'

import db from '../../firebase'
import './Chatbox.css'
import { useParams } from 'react-router-dom';

const Chatbox = (props) => {
    const params = useParams()
    const [channelData, setChannelData] = useState()
    const [messages, setMessages] = useState()

    const getChannelData = async (channelId) => {
        const channelData = await db.collection('channels').doc(channelId).get()
        setChannelData(channelData.data())
    }

    const getChannelMessages = (channelId) => {
        const unsubscribe = db.collection('channels').doc(channelId).collection('messages').orderBy('timestamp').onSnapshot(
            snapshot => {
                setMessages(
                    snapshot.docs.map(doc => {
                        const doc_data = { ...doc.data() }
                        return {
                            id: doc.id,
                            user: { ...doc_data.user },
                            message: doc_data.message,
                            timestamp: doc_data.timestamp
                        }
                    })
                )
            }
        )
        return unsubscribe
    }

    useEffect(() => {
        const channelId = params.channelId
        getChannelData(channelId)
        return getChannelMessages(channelId) /* returning the callback to be executed when component */
    },[params.channelId])
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
    return ( channelData ?
        <div className="chatBoxContainer">
            <ChatAppBar channelData={channelData}>
                <ChatSection channelId={params.channelId} messages={messages}/>
                <ChatInput channelId={params.channelId}/>
            </ChatAppBar>
        </div>
        :
        <Loading />
    )
}

export default Chatbox
