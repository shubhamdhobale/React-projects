import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
    <div className='container'>
      <h1>Password Generator</h1>
      <div className='passwordField'>
        <input type="text" placeholder='password'  readOnly ref={passwordRef} value={password}/>
        <button onClick={copyPasswordToClipboard}>copy</button>
      </div>
      <div className='generaeButton'>
        <input type="range" min={0} max={100} value={length} onChange={(e) => {setLength(e.target.value)}}/>
        <label htmlFor="">Length: {length}</label>
        <input type="checkbox" defaultChecked={numberAllowed} id='numberInput'  onChange={() => { setNumberAllowed((prev) => !prev); }} />
        <label htmlFor="numberInput">Number</label>
        <input type="checkbox" defaultChecked={ charAllowed} id='charInput' onChange={() => { setCharAllowed((prev) => !prev ) }} />
        <label htmlFor="charInput">Character</label>
      </div>
    </div>
    </>
  )
}

export default App
