import React from 'react'
import NextIcon from '../images/icon-next.svg'
import prevIcon from '../images/icon-previous.svg'
import Close from '../images/icon-close.svg'
import { useShoppingCart } from '../context/ShoppingCartContext'
const CardImage = () => {
    const {products,otherMainImage,showLightBox,setShowLightBox,setValue,mainImage} = useShoppingCart()
  return (
    <div className={`first ${showLightBox ?'open': 'close'}`}>
    <div className='overlay'></div>
  <div>
      <img src={mainImage} className='main' onClick={() => setShowLightBox(true)}/> 
      </div>
    <ul className='img-card'>
    {products.map((item, i) => (
        <li
          key={item.id}
          className='thumbnail'
          onClick={() => setValue(i)}
        >
          <img src={item.thumbnail} alt="" className="" />
        </li>
      ))}
      </ul>
      <ul className='icon'>
            <li className='close'>
                <img src={Close}  onClick={() => setShowLightBox(false)}/>
                </li>
            <li className='prev'>
              <button
                className="btn-prev"
              >
                <img src={prevIcon} />
              </button>
            </li>
            <li className='next'>
              <button
                
                className="btn-next"
              >
                <img src={NextIcon} />
              </button>
            </li>
            </ul>
         
  </div>  
  )
}

export default CardImage
