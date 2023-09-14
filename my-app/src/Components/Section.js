import React, { useState } from 'react'
import {data} from '../data'
const Section = () => {
    const [products] = useState(data)
    const [value, setValue] = useState(0)
    return (
        <div className='section'>
           <div className='main-img'>
             {
                products.map((items) => {
                    <img src={items.mainImage}></img>
                })
             }
           </div>
        </div>
    )
}

export default Section
