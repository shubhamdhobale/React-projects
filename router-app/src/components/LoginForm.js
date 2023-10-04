import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setisloggedin}) => {

    const navigate = useNavigate();

    const [FormData, setformData] = useState({
        email: "", password: ""
    })

    const [showPassword, setshowPassword] = useState(false);

    function changeHandler(event){
    setformData( (prevData) => (
      {
        ...prevData,
        [event.target.name]:event.target.value
      }
    ))
  }

function submitHandler(event){
event.preventDefault();
setisloggedin(true);
toast.success("Logged In")
navigate("/dashboard");
}

    return (
        <form onClick={submitHandler}>
            <label>
                <p>Email Address <sup>*</sup></p>
                <input
                    required
                    type='email'
                    placeholder='Enter Your Email Address'
                    value={FormData.email}
                    name='email'
                    onChange={changeHandler}
                />
            </label>

            <label>
                <p>Password <sup>*</sup></p>
                <input
                    required
                    type={showPassword ? ("text") : ("password")}
                    placeholder='Password'
                    value={FormData.password}
                    onChange={changeHandler}
                    name='password'
                />

                <span onClick={() => setshowPassword((prev) => !prev)}>
                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>

                <Link to='#'>
                    <p>Forgot Password</p>
                </Link>

            </label>

            <button>
                Sign In
            </button>


        </form>
    )
}

export default LoginForm;