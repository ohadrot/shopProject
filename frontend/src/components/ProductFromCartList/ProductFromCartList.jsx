import React from 'react'
import './ProductFromCartList.css'

const ProductFromCartList = ({Name,Quantity}) => {
  return (
    <div className='ProductFromCartList'>
        <div>
            <p>{Name}</p>
        </div>
        <div>
            <button className='optionBtn'>+</button>
            <span>{Quantity}</span>
            <button className='optionBtn'>-</button>
        </div>
        <div>
            <button>remove</button>
        </div>
    </div>
  )
}

export default ProductFromCartList