import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
}from "react-router-dom";

import './components/CounterExample.js'
//import CounterExample from './components/CounterExample.js'
import Header from './components/Header'
import Footer from './components/Footer'
//import Navigation from './components/Navigation'

import Home from './Views/Home'
import About from  './Views/About'

function App() {
  return (
    <div>

     
     <Router>
     <Header />
      
      
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route path="/about">
          <About/>
       </Route>
       <Route path="/contacts">
         <h1 className="font-bold text-2xl border-orange">this is contacts</h1>
       </Route>
     </Switch>
     <Footer />
     </Router>
     

      

    </div>
  );
}

export default App;
