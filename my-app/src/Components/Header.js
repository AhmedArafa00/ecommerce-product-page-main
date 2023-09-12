import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.svg'
import Cart from '../images/icon-cart.svg'
import Avatar from '../images/image-avatar.png'
import Menu from '../images/icon-menu.svg'
import Close from '../images/icon-close.svg'
const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='left-nav'>
        <diV className="menu">
          <img src={Menu}></img>
        </diV>
           <div className='logo'>
            <img src={Logo}/>
           </div>
           <ul className='nav'>
            <div className='close'>
             <img src={Close}></img>
            </div>
             <li><Link to={'/collections'}>Collections</Link></li>
             <li><Link to={'/men'}>Men</Link></li>
             <li><Link to={'/women'}>Women</Link></li>
             <li><Link to={'/about'}>About</Link></li>
             <li><Link to={'/contact'}>Contact</Link></li>
           </ul>
           </div>
           <div className='icon'>
            <div className='cart'>
              <img className='cart-icon' src={Cart}></img>
              </div>
             <img className='avatar' src={Avatar}></img> 
           <div className='cart-box'>
                 <h2>Cart</h2>
                 <div></div>
                 <button className='btn'>Checkout</button>
               </div>
           </div>
      </div>
    </div>
  )
}

export default Header
