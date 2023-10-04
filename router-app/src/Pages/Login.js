import React from 'react'
import Template from '../components/Template';
import {loginimg} from '../assets/login.jpeg';

const Login = (setisloggedin) => {
  return (
   <Template 
title="Welcome Back"
desc1="Build Skills for today,tomorrow and beyond"
desc2="Education to future-proof your Carrer"
image={loginimg}
formType="login"
setisloggedin = {setisloggedin}

   />
  )
}

export default Login;