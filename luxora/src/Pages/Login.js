import React from 'react'
import LoginForm from '../components/LoginForm';

const Login = ({isLoggedin,setLogin}) => {
  return (
    <div><LoginForm isLoggedin={isLoggedin} setLogin={setLogin}/></div>

  )
}

export default Login;
