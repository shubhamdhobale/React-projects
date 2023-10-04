import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import { useState } from 'react';

function App() {

const [isloggedin , setisloggedin] = useState(false);

  return (
    <div className="App">
      <Navbar isloggedin={isloggedin} setisloggedin={setisloggedin}/>

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/login' element={<Login setisloggedin={setisloggedin}/>}/>
<Route path='/signup' element={<Signup setisloggedin={setisloggedin}/>}/>
<Route path='/dashboard' element={<Dashboard/>}/>
</Routes>

    </div>
  );
}

export default App;
