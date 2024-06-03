import React from 'react'
import { assets } from '../Components/Assets/assets'
import "./footer.css"

const Footer = () => {
  return (
    <div>
        <div className="footer" id='footer'>
          <div className="footer-content">
            <div className="footer-content-left">
              <img src={assets.logo} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, assumenda excepturi. Quidem dicta eaque dolores beatae adipisci dignissimos natus magni, id temporibus consequuntur numquam minus deserunt impedit, totam, accusamus tempora?
              </p>
              <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />

              </div>

            </div>
            <div className="footer-content-center">
              <h2>CAMPANY</h2>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
              </ul>
              
            </div>
            <div className="footer-content-right">
              <h2>GET INTO TOUCH</h2>
              <ul>
                <li>+4345544554</li>
                <li>contact@gmail.com</li>
              </ul>

            </div>
            
          </div>
          <hr />
          <p className="footer-copyright">
            Copyright @2024 - All right reserve
          </p>

        </div>
      
    </div>
  )
}

export default Footer
