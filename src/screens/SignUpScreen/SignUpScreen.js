import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'

import './SignUpScreen.css'

function SignInScreen() {
    const history = useHistory()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email"/>
                <input ref={passwordRef} placeholder="Password" type="password"/>
                <button type="submit" onClick={() => history.push('/')}>Sign In</button>
                <h4>
                    <span className="signUpScreen_gray">New to Netflix? </span> 
                    <span className="signUpScreen_link" onClick={() => history.push('/')}>Sign up now.</span></h4>
            </form>
        </div>
    )
}

export default SignInScreen
