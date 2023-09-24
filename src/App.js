import './App.css';
import OtpVerfication from './components/OtpVerfication';
import Success from './components/Success';
import SubmitOtp from "./components/SubmitOtp.jsx";

import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<OtpVerfication/>} /> 
        <Route path="/success" element ={<Success/>}/>
        <Route path='/submit-otp/:number' element ={<SubmitOtp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
