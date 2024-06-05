import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import "./cart.css";
import { useNavigate } from "react-router-dom";
import { assets } from "../Components/Assets/assets";

const Cart = ({id,name,price,discription, image}) => {
  const { cartItems, food_list, removeFromCart ,getTotalCartAmount ,addToCart } = useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Add or Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                 
                  <p>${item.price * cartItems[item._id]}</p>
                  
                  <div className='food-item-counter'>
                  <img   onClick={()=>removeFromCart(item._id)} src={assets.remove_icon_red} alt=''/>
                  <img  onClick={()=>addToCart(item._id)} src={assets.add_icon_white} alt=''/>
                  
                  </div>
                  </div>
                
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
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
      <button onClick={()=>navigate("/orderpage")}>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>If you have Promo code , Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text"  placeholder="promo code" name="promo code" id="" />

            <button>submit</button>
          </div>
        </div>
      </div>
    </div>
</div>
  );
};

export default Cart;
