import React from "react";
import './App.css';
import {Route} from 'react-router-dom';
import Nav from './components/nav/nav';
import Nav2 from './components/nav/nav2'
import Landing from './components/landing';
import Home from './components/home/home';
import About from './components/about/about'
import Detail from './components/home/countyDetail/detail'
import CreateActivity from "./components/home/createActivity/createActivity";



function App() {
  return (
    < >
    <React.Fragment>
    <Route exact path='/'>
        <Landing/>
      </Route>
      <Route path="/">
        <Nav/>
      </Route>
      <Route exact path='/home'>
        <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route path='/countries'>
      <Nav2/>
      </Route>
      <Route path='/countries/:id'>
      <Detail/>
      </Route>
      <Route path='/createActivity'>
        <CreateActivity/>
      </Route>
    </React.Fragment>
    
    </>
  );
}

export default App;
