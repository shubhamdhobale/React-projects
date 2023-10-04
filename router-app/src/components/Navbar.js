import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.svg";
import {toast} from "react-hot-toast";


const Navbar = (props) => {

let isloggedin = props.isloggedin;
let setisloggedin = props.setisloggedin;

  return (
    <div className='flex justify-evenly'>
    <Link to="/">
        <img src={logo} alt='' width={160} height={32} loading='lazy'/>
    </Link>

    <nav>
        <ul className='flex gap-3'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contact</Link></li>
        </ul>
    </nav>

    <div className='flex gap-3'>
        { !isloggedin &&
            <Link to="/login">
                <button>Login</button>
            </Link>
        }
        { !isloggedin &&
            <Link to="/signup">
                <button>SignUp</button>
            </Link>
        }
        { isloggedin &&
            <Link to="/">
                <button onClick={ () => {
                    setisloggedin(false);
                    toast.success("Logged Out");
                }}>SignOut</button>
            </Link>
        }
        { isloggedin &&
            <Link to="/dashboard">
                <button>Dashboard</button>
            </Link>
        }
    </div>
 
    </div>
  )
}

export default Navbar;