import React, { useState } from 'react'
import '../cmp-styles/Login.css'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsername = (event) => {
        setUsername({
            username: event.target.value
        })
    }
    const handlePassword = (event) => {
        setPassword({
            password: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('users/login', {
                method: 'POST',
                headers: {'Accept': 'application/json','Content-Type': 'application/json',},
                body: JSON.stringify({name: username, password: password})
            })
            const login = await response.json()
            if (login.result === 'login-succesful') {
                console.log('login succesful')
            }
        } catch(er) {console.log(er)}
    }

    return (
        <div id='login-form-div'>
            <div id='login-form'>
                <form onSubmit={handleSubmit}>
                    <h1>Welcome</h1>
                    <input type='text' name='username' placeholder='Username' value={username} onChange={handleUsername} required/>
                    <input type='password' name='password' placeholder='Password' value={password} onChange={handlePassword} required/>
                    <button type='submit'>Login</button>   
                </form>
            </div>
        </div>
    )

}
