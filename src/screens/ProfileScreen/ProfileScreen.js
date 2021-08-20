import React from 'react'
import { useHistory } from 'react-router-dom'

import Navigation from '../../components/Navigation/Navigation'

import './ProfileScreen.css'

function ProfileScreen() {
    const history = useHistory()

    return (
        <div className="profileScreen">
            <Navigation/>
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""/>
                    <div className="profileScreen__details">
                        <h2>Your email</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans</h3>
                            <button className="profileScreen__signOut" onClick={() => history.push('/login')}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
