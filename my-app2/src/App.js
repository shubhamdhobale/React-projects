import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {apiUrl ,filterData} from './data'
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';
// import { useState , useEffect } from 'react';
import './App.css';



const App = () => {

  const [courses , setCourses] = useState(null);
  const [loading , setLoading] = useState(true);
  const [category ,setCategory] = useState(filterData[0].title);

async function fetchData(){

  setLoading(true);
  try {
    let response = await fetch(apiUrl);
    let output = await response.json();
    setCourses(output.data);
  }  
  catch (error) {
    toast.error("something went wrong");
  }
  setLoading(false);
}

useEffect( () =>{
fetchData();
},[])

  return (
    <div className='app'>
      <div>
        <Navbar/>
      </div>
      <div>
        <Filter filterData = {filterData}
          category = {category}
          setCategory = {setCategory}
        />
      </div>
      <div className='loader'>
      {
        loading ? (<Spinner/>) : (<Cards courses ={courses} category = {category}/>)
      }
      </div>
    </div>
  )
}

export default App