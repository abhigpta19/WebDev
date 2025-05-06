import React, { useCallback, useContext } from 'react'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'
import Footer from './components/Footer'
import Login from './components/Login';

function App() {
  const name = "abhi";
  return (
    <div>
      <Navbar/>
      { name ? <MainBody/> : <Login/>}
      <Footer/>
    </div>
  )
}

export default App
