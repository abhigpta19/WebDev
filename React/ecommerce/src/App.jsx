import React, { useCallback, useContext } from 'react'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'
import Footer from './components/Footer'
import { UserContext } from '../../context-api/src/contexts/UserContext';
import Login from './components/Login';

function App() {
  alert("app rendered");
  const {name} = useContext(UserContext);
  return (
    <div>
      <Navbar/>
      { name ? <MainBody/> : <Login/>}
      <Footer/>
    </div>
  )
}

export default App
