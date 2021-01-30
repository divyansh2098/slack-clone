import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from '../../firebase'

function ServerDetail(props) {
    const [admin, setAdmin] = useState(null)
    const [serverName, setServerName] = useState(null)
    useEffect(() => {
        const fetchAdminDetails = async (adminUserId) => {
            const adminDocRef = db.collection('users').doc(adminUserId)
            let admin = await adminDocRef.get()
            const admin_data = admin.data()
            setAdmin(admin_data)
        }
        const fetchData = async () => {
            const serverDocRef = db.collection('servers').doc(props.serverId)
            let doc = await serverDocRef.get()
            const data = doc.data()
            setServerName(data.name)
            fetchAdminDetails(data.admin)
        }
        fetchData()
    },[props.serverId])
    return (
        serverName && admin &&
        <div>
            {serverName} Server and Admin is {admin.userName}
        </div>
    )
}

export default ServerDetail
