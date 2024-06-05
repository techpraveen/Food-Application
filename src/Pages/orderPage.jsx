import React, { useContext } from 'react'
import { StoreContext } from '../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import "./orderPage.css"

const OrderPage = () => {
    const {getTotalCartAmount  } = useContext(StoreContext);
    const navigate=useNavigate();
   
    
  return (
    <div className='orderpage'>
        <h1>Order Page</h1>
        <section className="section-form">
            <form  >
            
              <div>
                <label htmlFor="name">Name</label>
                <input
                 type="text"
                 name="name" 
                 placeholder="Enter your name"
                 id="name"
                  />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                 type="email"
                 name="email" 
                 placeholder="Enter your email"
                 id="email"
                  />
              </div>
              <div>
                <label htmlFor="Address">Address</label>
                <input
                 type="text"
                 name="namwe" 
                 placeholder="Enter your Address"
                 id="address"
                  />
              </div>
              <div>
                <label htmlFor="email">PinCode</label>
                <input
                 type="number"
                 name="code" 
                 placeholder="Enter your Code"
                 id="code"
                  />
              </div>

              <div>
                <label htmlFor="email">Phone No.</label>
                <input
                 type="number"
                 name="code" 
                 placeholder="Enter your phone no."
                 id="email"
                  />
              </div>
             
                
                
            </form>
            </section>
        
    
      
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total Bill</h2>
        <div>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>${2}</p>
        </div>
        <hr  />
        <div className="cart-total-details">
          <b>Total</b>
          <b>${getTotalCartAmount()+2}</b>
        </div>
      </div>
      <button  >Place Order</button>
      
      </div>
      <div className="cart-promocode">
        
        
      </div>
    </div>
      
    
      
    </div>
  )
}

export default OrderPage;