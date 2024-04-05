import React, { useState } from 'react';

const App = () => {

  const [color, setColor] = useState('black')
  return (
    <div style={{backgroundColor: color}} className='w-full h-screen duration-1000'>
    <div >
      <h1 className='text-3xl font-bold text-center text-white relative top-10'>Bg-Changer</h1>
      <p className='text-center text-white relative top-12'>( click buttons to change background color )</p>
    </div>
    <div className='w-auto px-12 bg-slate-400 h-10 ml-80 absolute bottom-10 rounded-lg flex justify-center items-center gap-3'>
      <button className='bg-red-600 rounded-lg p-1 w-16 text-sm font-bold'
      onClick={() => setColor("red")}
      style={{backgroundColor:"red"}}>Red</button>
      <button className='bg-orange-600 rounded-lg p-1 w-16 text-sm font-bold'
      onClick={() => setColor("orange")}
      style={{backgroundColor:"orange"}}>orange</button>
      <button className='bg-green-600 rounded-lg p-1 w-16 text-sm font-bold'
      onClick={() => setColor("green")}
      style={{backgroundColor:"green"}}>green</button>
      <button className='bg-yellow-600 rounded-lg p-1 w-16 text-sm font-bold'
      onClick={() => setColor("yellow")}
      style={{backgroundColor:"yellow"}}>yellow</button>
      <button className='bg-purple-600 rounded-lg p-1 w-16 text-sm font-bold'
      onClick={() => setColor("purple")}
      style={{backgroundColor:"purple"}}>purple</button>
      <button className='bg-slate-500 rounded-lg p-1 w-16 text-sm font-bold'
      onClick={() => setColor("gray")}
      style={{backgroundColor:"slate"}}>slate</button>
      <button className='bg-blue-600 rounded-lg p-1 w-16 text-sm font-bold'
      onClick={() => setColor("blue")}
      style={{backgroundColor:"blue"}}>blue</button>
      <button className='bg-cyan-600 rounded-lg p-1 w-16 text-sm font-bold'
      onClick={() => setColor("cyan")}
      style={{backgroundColor:"cyan"}}>cyan</button>
      <button className='bg-indigo-600 rounded-lg p-1 w-16 text-sm font-bold'
      onClick={() => setColor("indigo")}
      style={{backgroundColor:"indigo"}}>indigo</button>
      <button className=' rounded-lg p-1 w-16 text-sm font-bold border-2 border-black ml-8 hover:bg-black hover:text-white	shadow-xl	'
      onClick={() => setColor("black")}
     >Clear</button>
    </div>
    </div>
  )
}

export default App
