
import Navbar from './components/Navbar';
import './App.css';
 import Textform from './components/Textform';
// import About from './components/About';
import React,{useState} from 'react'

function App() {

  const [mode,setMode]=useState('light')

  const [text,setText]=useState('Enable DarkMode')
  const toogleMode=()=>{
   if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor= "#546773"
    setText("Disable DarkMode")
   }
   else{
    setMode('light')
    document.body.style.backgroundColor= "white"
    setText("Enable DarkMode")
   }
  }
  
  return (
    <>
      <Navbar title="ReactApp" mode={mode} toogleMode={toogleMode} text={text}/>
      <div className='container my-3'>
      <Textform heading="Enter Data To Analyze" mode={mode}/>
      {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
