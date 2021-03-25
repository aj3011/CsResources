import React from 'react';
import './App.css';
import NavBar from './HomePage/NavBar'
import Banner from './HomePage/Banner'
import AboutUs from './HomePage/AboutUs'
import Footer from './HomePage/Footer'

function App() {
  return (
    <div className="App">
       <NavBar /> 
       <Banner /> 
       <AboutUs />
       <Footer/>
    </div>
  );
}

export default App;
