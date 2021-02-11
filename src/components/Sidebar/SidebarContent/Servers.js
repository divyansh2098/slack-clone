import React, { Component } from 'react'

import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import ServerStrip from './ServerStrip'
import AddServerDialog from '../../helper/addServerDialog'

import db from '../../../firebase'

import './Servers.css'

class Servers extends Component {
    constructor(props){
        super(props);
        this.state = {
            showServerList: false,
            servers: [],
            showAddServerDialog: false
        }
    }

    componentDidMount() {
        db.collection("servers").onSnapshot(snapshot=> {
            this.setState({
                servers: snapshot.docs.map(doc=> ({
                    id: doc.id,
                    name: doc.data().name
                }))
            })
        })
    }

    toggleAddServerDialog = () => {
        this.setState(prevState=>{
            return {
                ...prevState,
                showAddServerDialog: !prevState.showAddServerDialog
            }
        })
    }

    handleExpandServers = () => {
        this.setState(prevState=> {
            return({
                showServerList : !prevState.showServerList
            })
        })
    }
    render() {
        let arrow = this.state.showServerList ? <ArrowDropDownIcon /> : <ArrowRightIcon />
        let serverStrips = this.state.showServerList ? this.state.servers.map(server => <ServerStrip key={server.id} id={server.id} text={server.name} />)
                                                        :
                                                        null
        return (
            <React.Fragment>
                <AddServerDialog open = {this.state.showAddServerDialog} onClose={this.toggleAddServerDialog} />
                <div className="serversContainer">
                    <div className="expandIcon" onClick = {this.handleExpandServers}>
                        {arrow}
                        Servers
                    </div>
                    <div className="addServerIcon" onClick={this.toggleAddServerDialog}>
                        <AddIcon />
                    </div>
                </div>
                {serverStrips}
                <div className="add_server" onClick={this.toggleAddServerDialog}>
                    <div className="addServer__icon">
                        <AddIcon />
                    </div>
                    <p className="addServer_text">
                        Add Server
                    </p>
                </div>
            </React.Fragment>
        )
    }
}

export default Servers