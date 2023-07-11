
import Navbar from './components/Navbar';
import './App.css';
 import Textform from './components/Textform';
// import About from './components/About';
import React,{useState} from 'react'
import Alert from './components/Alert';

function App() {

  const [mode,setMode]=useState('light');
  const [modeblue,setBluemode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{

    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
  }, 1500);
  }

  const [text,setText]=useState('Enable DarkMode')
  const toogleMode=()=>{
   if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor= "#546773"
    setText("Disable DarkMode")
    showAlert("Enable DarkMode","success")
   }
   else{
    setMode('light')
    document.body.style.backgroundColor= "white"
    setText("Enable DarkMode")
    showAlert("Disable DarkMode","success")
   }
  }

  const blueMode=()=>{
    if(modeblue==='light'){
    setBluemode('dark')
     document.body.style.backgroundColor= "#7fc4d4"
     showAlert("Enable BlueMode","success")
    
    }
    else{
    
     document.body.style.backgroundColor= "white"
     showAlert("Disable BlueMode","success")
    }
   }
  
  return (
    <>
      <Navbar title="ReactApp" mode={mode} toogleMode={toogleMode} blueMode={blueMode} text={text}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Textform heading="Enter Data To Analyze" mode={mode} modeblue={modeblue} showAlert={showAlert}/>
      {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
