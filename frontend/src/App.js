import './App.css';
import React,{useEffect\} from "react"
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
    </Router>
   
  );
}

export default App;
