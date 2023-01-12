import React from 'react'
import '../style/Login.css'
import 'firebase/compat/app'

import {GoogleOutlined , FacebookOutlined} from '@ant-design/icons'
import firebase from 'firebase/compat/app'
import {auth} from '../firebase'
const Login = () => {
  return (
    <div id='login-page' className='login-page'>
        <div className="header">
            <h1 className='h1'>SkyChat</h1>
        </div>
        <div className="login-card" id="login-card">
            <h2 className='login-header'>Tell Them How You Fell Today With SkyChat</h2>
           <div className="buttons">
            <div className="login-btn google" 
            onClick={()=> auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
            <GoogleOutlined/> 
            <p>Sign In With Google</p>
            </div>
            <div className="login-btn facebook"
            onClick={()=> auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>
                <FacebookOutlined/> 
                <p>Sign In With Facebook</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login