import React from 'react'
import { login } from '../actions'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <form onSubmit='hi'>
                <hr />
                <h1>You Must Login to Edit Your Friends</h1>
                <hr/>
                Username 
                <input
                    type='text' 
                    value={this.state.credentials.username}
                    name='username'
                    onChange={this.handleChange}
                    placeholder='username'
                />
                Password 
                <input 
                    type='text'
                    value={this.state.credentials.password}
                    name='password'
                    onChange={this.handleChange}
                    placeholder='password'
                />
                <br/>

                <button>View Your Friend Portal</button>
            </form>
        )
    }
}

export default Login;