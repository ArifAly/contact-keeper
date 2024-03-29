import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home  from './components/pages/Home';
import About from './components/pages/About';
 import ContactState from './context/contact/ContactState';
import './App.css';

const App = () => {
  return (
    <ContactState>
    <Router>
    <Fragment> 
      <Navbar/>
     <div className='container'> 
    <Routes>
      <Route path ='/home'element ={<Home/>} /> 
      <Route path ='/about'element ={<About/>} /> 
    </Routes>
     </div>
    </Fragment>
    </Router>
      </ContactState>
  );
};

export default App;
