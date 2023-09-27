import React from 'react';
import './Spinner.css';


const Spinner = () => {
  return (
    <div className='loading'>
        <div className='spinner'></div>
        <p>loading...</p>
    </div>
  )
}

export default Spinner;