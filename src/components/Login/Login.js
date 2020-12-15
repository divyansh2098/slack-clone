import React, { Component } from 'react'
import { connect } from 'react-redux'

import {auth, provider} from '../../firebase'
import {setUserData} from '../../store/index'

import LoginImage from '../../assets/images/UndrawNotification.svg'

import Button from '@material-ui/core/Button';

import './Login.css'
class Login extends Component {
    initiateSignIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                const userData = {
                    id: result.additionalUserInfo.profile.id,
                    name: result.user.displayName,
                    email: result.user.email,
                    isNewUser: result.additionalUserInfo.isNewUser,
                    photoURL: result.user.photoURL
                }
                this.props.setUserData(userData)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    render() {
        return (
            <div className="login">
                <div className="login__container">
                    <img src={LoginImage} alt=""/>
                    <h2>Sign In to WUPHF</h2>
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

