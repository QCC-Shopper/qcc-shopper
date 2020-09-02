import React from 'react'

export default class Login extends React.Component {
    constructor(props) {
        this.state = {
            username: '',
            password: '',
            registering: false
        }
    }

    handleUsername = (event) => {
        setUsername({
            username: event.target.value
        })
    }
    handlePassword = (event) => {
        setPassword({
            password: event.target.value
        })
    }
    handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('users/login', {
                method: 'POST',
                headers: {'Accept': 'application/json','Content-Type': 'application/json',},
                body: JSON.stringify({name: name.username, password: password.password,})
            })
            const login = await response.json()
            if (login.result === 'login-succesful') {
                props.methods[0](login.user)
            }
        } catch(er) {console.log(er)}
    }
    handleRegister = () => {
        setRegister({
            registering: !registering.registering
        })
    }

    render() {
        return (
            <div id='login-form-div'>
                <h1>Welcome</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='username' placeholder='Username' value={username.username} onChange={handleUsername} required/>
                    <input type='password' name='password' placeholder='Password' value={password.password} onChange={handlePassword} required/>
                    <button type='submit'>Login</button>   
                </form>
                <hr></hr>
            </div>
        )
    }

}
