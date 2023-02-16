import React from 'react';
import Header from './Components/header/Header'
import Contianer from './Components/body/Container';
import Footer from './Components/footer/Footer'
import './landingPage.css'

function App() {
  return (
    <div className="App">
       <Header/>
       <Contianer/>
       <Footer/>
    </div>  
  );
}

export default App;
