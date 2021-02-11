import React from 'react'
import { useHistory } from 'react-router-dom'

import './ServerStrip.css'
const ServerStrip = (props) => {

    const history = useHistory();
    
    const changeServerHandler = () => {
        history.push("/server/" + props.id)
    }

    return (
        <div className="serverStrip" onClick={changeServerHandler}>
            <p className="hash">#</p>
            <div className="description">
                {props.text}
            </div>
        </div>
    )
}

export default ServerStrip