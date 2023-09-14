import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo.svg'
import Cart from '../images/icon-cart.svg'
import Avatar from '../images/image-avatar.png'
import Menu from '../images/icon-menu.svg'
import Close from '../images/icon-close.svg'
const Header = () => {
  const [show, setShow] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  return (
          <>
    <div className='header' >
      <div className='container'>
        <div className='left-nav'>
          {
            !isOpen &&(<div className="menu" onClick={() => setIsOpen(true)}>
            <img src={Menu}></img>
          </div>
          )}
          {
            isOpen &&( <div className='close' onClick={() => setIsOpen(false)}>
            <img src={Close}></img>
           </div> 
          )}
           <div className='logo'>
            <img src={Logo}/>
           </div>
           <div className=''>
           <ul className={`nav ${isOpen && "open"}`} >
             <li><Link to={'/collections'}>Collections</Link></li>
             <li><Link to={'/men'}>Men</Link></li>
             <li><Link to={'/women'}>Women</Link></li>
             <li><Link to={'/about'}>About</Link></li>
             <li><Link to={'/contact'}>Contact</Link></li>
           </ul>
           </div>
           </div>
           <div className='icon'>
            <div className='cart'>
              <img className='cart-icon' src={Cart} onClick={() => setShow(!show)}></img>
              </div>
             <img className='avatar' src={Avatar}></img> 
           <div className={`icon-cart ${show ? "hidden" : "flex"}`}>
                 <h2>Cart</h2>
                 <div>Your cart is empty</div>
                 <button className='btn'>Checkout</button>
               </div>
           </div>
      </div>
    </div>
          </>
  )
}

export default Header
