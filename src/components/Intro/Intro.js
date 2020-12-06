import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import UserForm from '../UserForm/UserForm'
import Welcome from '../Welcome/Welcome'

function Intro() {
    
    const isNewUser = useSelector(state=>state.isNewUser)
    const [showUserSetUp, setShowUserSetup] = useState(false)
    return (
        <div>
            { showUserSetUp ?
                <UserForm /> 
                :
                <Welcome click={setShowUserSetup}/>
            }
        </div>
    )
}

export default Intro
