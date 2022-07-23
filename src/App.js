
import { useState } from 'react';
import './App.css';
import About from './components/About';
import ReactDOM from "react-dom/client";

import Navbar from './components/Navbar'
import TextFrom from './components/TextForm';
import Alerts from './components/Alerts';



function App() {
  const [mode, Setmode] = useState('light')//whether dark mode or light mode

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      Setmode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Focused Mode has been enabled", "success")
    }
    else {
      Setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Focused Mode has been successfully disabled ", "success")
    }
  }

  return (
    <>
    

      <Navbar title="Textectra!" aboutUs="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Alerts alert={alert} />
        <TextFrom showAlert={showAlert} mode={mode} heading="Enter the text to  below" />
        {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
