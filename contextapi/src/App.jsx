/*import UserContextProvider from './context/UserContextProvider'
import './App.css'
import LogIn from './components/LogIn'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
       <h1>Login</h1>
      <LogIn/>
      <Profile/> 
     </UserContextProvider> 
  )
}

export default App
*/

import { useState , useEffect} from 'react';
import './App.css';
import { ThemeProvider } from './context/Theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

const App = () => {
  const [ themeMode , setThemeMode ] = useState("light");

const darkTheme = () => {
  setThemeMode("dark");
}

const lightTheme = () => {
  setThemeMode("light")
}

//Actual change in theme
useEffect(() => {
document.querySelector('html').classList.remove("light" , "dark");
document.querySelector('html').classList.add(themeMode)
}, [themeMode])

  return (
    <ThemeProvider value={{ darkTheme , lightTheme , themeMode }}>
    <div className='flex flex-wrap min-h-screen items-center'>
      <div className='w-full'>
        <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
          {/* //ThemeBtn component*/}
          <ThemeBtn/>
        </div>
        <div className='w-full max-w-sm mx-auto'>
          {/* //Card Component */}
          <Card/>
        </div>
      </div>
    </div>
    </ThemeProvider>
  )
}

export default App