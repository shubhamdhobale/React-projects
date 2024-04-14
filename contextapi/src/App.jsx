import UserContextProvider from './context/UserContextProvider'
import './App.css'

function App() {
  

  return (
    <UserContextProvider>
      <h1>useContext</h1>
    </UserContextProvider>
  )
}

export default App
