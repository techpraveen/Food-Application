import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = () => {
    const {food_list}= useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
        <h2>Food Menu</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                return <FoodItem key={index} id={item._id} name={item.name} price={item.price} discription={item.description} image={item.image}/>

            })}
        </div>
      
    </div>
  )
}

export default FoodDisplay
