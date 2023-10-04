import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


export const SignupForm = ({setisloggedin}) => {

  const navigate = useNavigate();

  const [FormData, setformData] = useState({
    firstName: "", lastName: "", email: "", password: "",
    Confirmpassword: ""
  })

  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);

  function changeHandler(event) {
    setformData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value
      }
    ))
  }

  function submitHandler(event) {
    event.preventDefault();
    if (FormData.password != FormData.Confirmpassword) {
      toast.error("Password does not match");
      return;
    }
    setisloggedin(true);
    toast.success("Account Created");
    const AccountData ={
      ...FormData
    };
    console.log(AccountData);
    navigate("/dashboard");
  }

  return (
    <div>
      <button>
        Student
      </button>
      <button>
        Instructor
      </button>

      <form onSubmit={submitHandler}>

        <div>

          <label>
            <p>FirsName<sup>*</sup></p>
            <input
              required
              placeholder='Enter first name'
              type='text'
              name='firstName'
              value={FormData.firstName}
              onChange={changeHandler}
            />
          </label>

          <label>
            <p>Last Name<sup>*</sup></p>
            <input
              required
              placeholder='Enter last name'
              type='text'
              name='lastName'
              value={FormData.lastName}
              onChange={changeHandler}
            />
          </label>
        </div>


        <label>
          <p>Email<sup>*</sup></p>
          <input
            required
            placeholder='Enter Email'
            type='email'
            name='email'
            value={FormData.email}
            onChange={changeHandler}
          />
        </label>


        <div>
          <label>
            <p>Create Password<sup>*</sup></p>
            <input
              required
              placeholder='Create Strong Password'
              type={showPassword ? ("text") : ("password")}
              name='password'
              value={FormData.lastName}
              onChange={changeHandler}
            />

            <span onClick={() => setshowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>
          </label>


          <label>
            <p>Confirm Password<sup>*</sup></p>
            <input
              required
              placeholder='Confirm Password'
              type={showPassword ? ("text") : ("password")}
              name='Confirmpassword'
              value={FormData.Confirmpassword}
              onChange={changeHandler}
            />

            <span onClick={() => setshowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
            </span>
          </label>

        </div>

        <button>Create Account</button>
      </form>
    </div>


  )
}
