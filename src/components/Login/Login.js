import React, { Component } from 'react'
import { connect } from 'react-redux'

import {auth, provider} from '../../firebase'
import {setUserData} from '../../store/index'

import Button from '@material-ui/core/Button';

import './Login.css'
class Login extends Component {
    initiateSignIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                this.props.setUserData(result.user)
                console.log(this.props.user)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    render() {
        return (
            <div className="login">
                <div className="login__container">
                    <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt=""/>
                    <h2>Sign In to Divyansh's Slack Clone</h2>
                    <Button variant='contained' onClick={this.initiateSignIn}>Sign In with Google</Button>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setUserData: (user) => dispatch(setUserData(user))
    }   
}

export default connect(mapStatetoProps, mapDispatchToProps)(Login)

