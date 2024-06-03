
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Pastoders from './Pages/Pastoders';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastoders" element={<Pastoders />} />
        
       
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
