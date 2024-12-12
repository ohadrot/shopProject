import React from 'react'
import { useSelector } from 'react-redux'
import './CartDetails.css'
import ProductFromCartList from '../ProductFromCartList/ProductFromCartList';

const CartDetails = () => {

const { items} = useSelector((state) => state.productReducer);

  return (
    <div className='cartDetails'>
        
        {items.map((item)=>{return <ProductFromCartList
         Name={item.Name}
         Quantity={item.Quantity}
         />})}
        
    </div>
  )
}

export default CartDetails