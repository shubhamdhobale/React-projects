import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './compoents/Home.jsx';
import About from './compoents/About.jsx';
import Contact from './compoents/Contact.jsx';
import Layout from './Layout.jsx';
// import GitHub from './compoents/GitHub.jsx';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
