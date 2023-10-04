import React from 'react'
import frameimg from "../assets/frame.png";
import { SignupForm } from './SignupForm';
import {LoginForm} from '../components/LoginForm';


const Template = ({ title, desc1, desc2, image, formType, setisloggedin }) => {
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>

                {formType === "signup" ?
                (<SignupForm setisloggedin={setisloggedin}/>):
                (<LoginForm setisloggedin={setisloggedin}/>)}

                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>
                </div>
                <button>Sign Up with Google</button>

            </div>

            <div>
                <img
                    src={frameimg}
                    alt='Frame '
                    width={558}
                    height={504}
                    loading='lazy'
                />
                 <img
                    src={image}
                    alt='studet '
                    width={558}
                    height={490}
                    loading='lazy'
                />
            </div>
        </div>
    )
}

export default Template