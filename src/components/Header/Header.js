import React from 'react'
import Welcome from './Welcome'

export default function Header() {

    function logout() {
        window.location.href = "http://localhost:8080/auth/realms/FirestationQuiz/protocol/openid-connect/logout?redirect_uri=http://localhost:3000/"
    }
    return (
        <header className='App-header'>
            <Welcome />
            <p>Play here your favorite quiz game</p>
            <button onClick={logout}>Logout</button>
        </header>
    )
}
