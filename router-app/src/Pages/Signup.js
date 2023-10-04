import React from 'react'
import Template from '../components/Template';
import {signupimg} from '../assets/signup.jpeg';

const Signup = ({setisloggedin}) => {
  return (
   <Template
    title="Join the millions of learning to code with studyNotion for free"
    desc1="Build skills for today , tomorrow and beyond"
    desc2="Education to future-proof your carrer"
    image={signupimg}
    formType="signup"
    setisloggedin = {setisloggedin}
   />
  )
}

export default Signup;