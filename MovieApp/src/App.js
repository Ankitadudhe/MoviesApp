import React,{useState} from 'react';
import './App.css';
import Main from './Main';
import ButtonAppBar from './components/Appbar'

function App(){
  return(
    <div>
    <ButtonAppBar />
    <Main />
    </div>
  )
}

export default App;
