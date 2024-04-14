import { useState ,useContext} from 'react';
import UserContext from '../context/UserContext';

const LogIn = () => {
  const [password , setPassword] = useState('')
  const [username , setUsername] = useState('')
  const {setUser} = useContext(UserContext);

  const submitHandle = (e) =>{
    e.preventDefault();
    setUser({username , password});
  }

  return (
    <div>
      <h2>LogIn</h2>

      <input type='text' 
      placeholder='username'
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />

      <input 
      type='password'
      placeholder='password' 
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={submitHandle}>
        Submit
      </button>

    </div>
  )
}

export default LogIn