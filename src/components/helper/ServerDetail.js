import React, { useEffect, useState } from 'react'
import { useParams, Switch, Route } from 'react-router-dom'
import db from '../../firebase'
import ServerImage from '../../assets/images/Server.svg'
import Appbar from '../../hoc/Appbar/Appbar'
import ServerSidebar from '../ServerSidebar/ServerSidebar'
import Chatbox from '../Chatbox/Chatbox'
import Loading from '../helper/Loading'

import './ServerDetail.css'
function ServerDetail(props) {
    const [admin, setAdmin] = useState(null)
    const [serverName, setServerName] = useState(null)
    const params = useParams()
    useEffect(() => {
        const fetchAdminDetails = async (adminUserId) => {
            const adminDocRef = db.collection('users').doc(adminUserId)
            let admin = await adminDocRef.get()
            const admin_data = admin.data()
            setAdmin(admin_data)
        }
        const fetchData = async () => {
            const serverDocRef = db.collection('servers').doc(params.serverId)
            let doc = await serverDocRef.get()
            const data = doc.data()
            setServerName(data.name)
            fetchAdminDetails(data.admin)
        }
        fetchData()
    },[params.serverId])
    return (
        serverName && admin ?
        <div className="serverDetailContainer">
            <ServerSidebar />
            <div className="serverDetails">
                <Appbar>
                    <Switch>
                        <Route path="/server/:serverId" exact>
                            <ServerInformation serverName={serverName} admin={admin}/>
                        </Route>
                        <Route path="/server/:serverId/channel/:channelId">
                            <Chatbox />
                        </Route>
                    </Switch>
                </Appbar>
            </div>
        </div>
        :
        <Loading />
    )
}

const  ServerInformation = ({serverName, admin}) => {
    return (
        <div className="serverDetailContainer">
            <div className="detailContent">
                <img src={ServerImage} alt="" className="serverImage"/>
                <span className="heading">Welcome to</span>
                <div className="detailContainer">
                    {serverName}
                </div>
                <div className="adminDetails">
                    <div>
                        admin
                    </div>
                    <img src={admin.photoURL} alt="" className="adminImage"/>
                </div>
            </div>
        </div>
    )
}

export default ServerDetail
