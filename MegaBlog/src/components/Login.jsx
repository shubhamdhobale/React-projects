import { useState } from "react";
import {Link ,  useNavigate} from 'react-router-dom';
import { login as authLogin } from '../store/authSlice';
import { Button , Input , Logo}  from './index';
import { useDispatch } from "react-redux"; 
import authService from "../appwrite/auth";
import {useForm} from 'react-hook-form';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error , setError] = useState(null);
  const {register , handleSubmit } = useForm();

  const login = async(data) => {
    setError("")
    try {
        const session = await authService.login(data)
        if (session) {
            const userData = await authService.getCurrentUser()
            if(userData) dispatch(authLogin(userData));
            navigate("/")
        }
    } catch (error) {
        setError(error.message)
    }
  }
  return (
    <div className="flex items-center justify-center w-full">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className=" flex mb-2 justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className=" text-center text-2xl font-bold leading-tight">Sign in to your Account</h2>
        <p className="mt-2 text-center text-base text-black/60">Don&apos;t have any account?&nbsp;  
        <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
          Sign up
        </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input 
            label="Email : "
            placeholder = "Enter Your Email "
            type="email"
            {...register("email" , {
              required : true,
              validate: {
                matchPatern: (value) => /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(value) || "Invalid Email"
              }
            })}
            />
            <Input 
            label ="Password: "
            placeholder = "Enter Your Password"
            type="password"
            {...register("Password" , {
              required : true,
            })}
            />
            <Button type="submit" className="w-full">Sign In</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login



//igm