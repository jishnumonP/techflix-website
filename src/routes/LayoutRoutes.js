import React from 'react'
import Home from '../screens/Home/Home'
import { BrowserRouter, Routes,Route, Switch } from 'react-router-dom';
import Services from '../screens/services/Services'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
const LayoutRoutes = () => {
  return (
  <>
  <Header/>
   <Routes>
    <Route path="/" element={ <Home/> } />
    <Route path="/services" element={ <Services/> } />
  </Routes>
  <Footer/>
  </>
 
  )
}

export default LayoutRoutes