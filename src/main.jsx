import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Loyout from './Loyout.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Loyout/>,
//     Children: [ 
//     {
//       path: "",
//       element:<Home/>
//     },
//     {
//       path: "about",
//       element: <About />
//     }
//   ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Loyout/>}>
      <Route path="" element={<Home/>}  />
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route
       loder = {githubInfoLoader}
       path="github" element={<Github/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
