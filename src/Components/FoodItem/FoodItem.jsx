import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../Assets/assets'
import { StoreContext } from '../../Context/StoreContext'


const FoodItem=({id,name,price,discription, image})=> {
  const {addToCart,cartItems , Cart , removeFromCart} =useContext(StoreContext);
  const [inCart, setInCart] = useState(false);

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setInCart(!inCart); // Toggle the state
  };

 
  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className="food-item-img" src={image} alt="" />
           
            
              <form onSubmit={handleSubmit}>
                {!inCart ?(
                <button className='add-to-cart' id='add-to-cart' onClick={()=>Cart(id)}>Add to cart</button>
                ):(
               
                <button className='remove-from-cart' id='remove-from-cart' onClick={()=>removeFromCart(id)}>Remove</button>
            
                  )}
                </form>
            
           

            
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">
                    {discription}

                </p>
                <p className="food-item-price">${price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
// !cartItems[id]
//               ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
//               :<div className='food-item-counter'><img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
//               <p>{cartItems[id]}</p>
//               <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
//               </div>