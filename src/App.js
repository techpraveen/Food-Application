
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Pastoders from './Pages/Pastoders';
import Cart from "./Pages/cart";
import Footer from './Pages/footer';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastoders" element={<Pastoders />} />
        <Route path='/cart' element={<Cart/>}/>
       
      </Routes>
      <Footer/>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
