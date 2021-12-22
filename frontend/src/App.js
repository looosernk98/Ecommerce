import './App.css';
import React,{useEffect} from "react"
import Header from './components/layout/header/header';
import {BrowserRouter as Router} from 'react-router-dom'
import webFont from 'webfontloader'

function App() {



  useEffect(()=>{

    webFont.load({
      google:{
        families:[]
      }
    })

  },[])


  return (
    <Router>
      <Header/>
      <h2>Hi my name is Niranjan</h2>
      <h3>hi</h3>
      <h4>hihdudjh</h4>
      <h4>hjsgdsdhfcdghdvd</h4>
    </Router>
   
  );
}

export default App;
