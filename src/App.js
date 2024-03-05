import React from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Registration from './pages/Registration'
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom";


const App=()=> {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='./' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
      <Home/>
      

      </>
  );
}

export default App;
