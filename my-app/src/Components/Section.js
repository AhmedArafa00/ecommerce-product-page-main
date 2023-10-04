import React, { useState } from 'react'
import { data } from '../data'
import NextIcon from '../images/icon-next.svg'
import prevIcon from '../images/icon-previous.svg'
import Close from '../images/icon-close.svg'
const Section = () => {
    const [products] = useState(data)
    const [value, setValue] = useState(0);
    const { mainImage } = products[value];
    const [count, setCount] = useState(0);
    const [showLightBox, setShowLightBox] = useState(false)
    const [slideIndex, setSlideIndex] = useState(1);
    const [counter, setCounter] = useState(0);
    const nextSlide = () => {
      if (slideIndex !== products.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === products.length) {
        setSlideIndex(1);
      }
    };
  
    // const previousSlide = () => {
    //   if (slideIndex !== 1) {
    //     setSlideIndex(slideIndex - 1);
    //   } else if (slideIndex === 1) {
    //     setSlideIndex(products.length);
    //   }
    // };
    //decrease counter
const decrease = () => {
  if (counter > 0) {
    setCounter(count => count - 1);
  }
};
    return (
        <>
        <div className='section'>
      <div className={`first ${showLightBox ?'open': 'close'}`}>
          <div className='overlay'></div>
        <div>
            <img src={mainImage} className='main' onClick={() => setShowLightBox(true)}/> 
            </div>
          <ul className='img-card'>
          {products.map((item, index) => (
              <li
                key={item.id}
                className='thumbnail'
                onClick={() => setValue(index)}
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
                      onClick={decrease}
                      className="btn-prev"
                    >
                      <img src={prevIcon} />
                    </button>
                  </li>
                  <li className='next'>
                    <button
                      onClick={nextSlide}
                      className="btn-next"
                    >
                      <img src={NextIcon} />
                    </button>
                  </li>
                  </ul>
               
        </div>       
        <div className='products-images'>
          <div className=''>
        <img src={mainImage} alt="main" className='main'onClick={() => setShowLightBox(true)}/>
            <ul className="">
            {products.map((item, index) => (
              <li
                key={item.id}
                className='thumbnail'
                onClick={() => setValue(index)}
              >
                <img src={item.thumbnail} alt="" className="" />
              </li>
            ))}
          </ul>
          </div>
        </div>
        <dv className='products-info'>
        <h1>Sneaker Company</h1>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <h3>$125.00<span>50%</span></h3>
        <span className='free'>$250.00</span>
        <div className='add-cart'>
          <div className='count'>
        <button onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
        <button className='counter'>{count}</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        </div>
        <button className='btn'>Add to cart</button>
        </div>
        </dv>
        </div>
        </>
    )
}

export default Section
