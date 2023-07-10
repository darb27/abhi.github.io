
import Navbar from './components/Navbar';
import './App.css';
// import Textform from './components/Textform';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="ReactApp"/>
      <div className='container my-3'>
      {/* <Textform heading="Enter Data To Analyze"/> */}
      <About/>
      </div>
      
    </>
  );
}

export default App;
