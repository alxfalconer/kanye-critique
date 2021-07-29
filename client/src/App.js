import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from  './components/Footer';
import Home from './components/Home';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
    <div className="App">
     <Nav />
       <Route exact path="/" component={Home}/>
     <Footer />
    </div>
    </Router>
  );
}

export default App;
