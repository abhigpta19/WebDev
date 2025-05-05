import React from 'react'
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Info from './components/Info';
import Profile from './components/Profile';
import Details from './components/Details';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar/>
        <Home/>
      </>
    )
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path : "/contact",
    element : (
    <>
      <h1>this is contact us page</h1>
    </>
    )
  },
  {
    path : "/info",
    children : [
      {
        path : "user",
        element : <Info user={true}/>
      },
      {
        path : "admin",
        element : <Info user={false}/>
      }
    ]
  },
  {
    path : "/auth",
    children : [
      {
        path : "profile/:userid",
        element : <Profile/>
      },
      {
        path : "profile/:userid/:name",
        element : <Details/>
      }
    ]
  },
  {
    path : "*",
    element : (
      <>
        <Navbar/>
        <h1>Your page is not found</h1>
      </>
    )
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
