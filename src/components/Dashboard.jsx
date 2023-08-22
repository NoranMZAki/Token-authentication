import React from 'react';
import Login from '../Login/Login';
import useToken from './App/useToken';

const Dashboard = () => {
    const {token, setToken} = useToken()
    if(!token){
        {return <Login setToken={setToken}/>}
    }
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard;