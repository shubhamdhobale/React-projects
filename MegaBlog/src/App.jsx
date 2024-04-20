import { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import './App.css'
import authService from "./appwrite/auth";
import { login , logout} from './store/authSlice'

function App() {
const [loading , setLoading] = useState(true);
const dispatch = useDispatch();

useEffect(() => {
authService.getCurrentUser()
.then((userData) => {
  if (userData) {
    dispatch(login({userData}))
  }else{
    dispatch(logout())
  }
})
.finally(() => {setLoading(false)})
} )

  
return !loading ? (
  <div>test</div>
) : null
}

export default App
