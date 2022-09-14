import  { Fragment } from 'react'
import React from 'react'

import './App.css';
import Home from './Components/Home/home';
import Navs from './Components/Navigaton/navs';

function App() {
  return (
    <Fragment>
      <Navs/>
      <Home/>

    </Fragment>
  );
}

export default App;
