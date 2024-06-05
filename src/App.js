
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Pastoders from './Pages/Pastoders';
import Cart from "./Pages/cart";
import Footer from './Pages/footer';
import OrderPage from './Pages/orderPage';
import { useState } from 'react';
import LoginSignup from './Components/loginSignUp/LoginSignup';

function App() {
  const[showLogin , setShowLogin] = useState(false);
  return (
    <>
    {showLogin?<LoginSignup setShowLogin = {setShowLogin}/>:<></>}
    <div >
      
      <BrowserRouter>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pastoders" element={<Pastoders />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/orderpage' element={<OrderPage/>}/>
       
      </Routes>
      <Footer/>
      
      </BrowserRouter>
     
    </div>
    </>
  );
}

export default App;
