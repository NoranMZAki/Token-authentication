import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './Login.css';


async function LoginUser(credentials) {
    return fetch('http://localhost:8080/login',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => data.json())
}

const Login = ({setToken}) =>  {
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const token = await LoginUser({
            userName,
            password
        })
        setToken(token)
    }
    return (
        <div className='container'>
            <div className='login'>
            <h3>Sign Up Here</h3>
            <form onSubmit={handleSubmit}>
                    <p>UserName</p>
                    <input type="text" required onChange={(e)=>setPassword(e.target.value)} placeholder='JohnDoe'/>
                    <p>PassWord</p>
                    <input type="password" required onChange={(e)=>setUserName(e.target.value)} placeholder='Please enter a strong password'/>
                <button type="submit">Submit</button>
                <div>
                    <p className='check'><input type="checkbox" />Remember Me</p>
                </div>
            </form>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;

