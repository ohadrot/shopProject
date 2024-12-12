import React, { useEffect, useState } from 'react'
import './NavBar.css'
import Button from '@mui/material/Button';
import axios from 'axios';
import cart from '../../assets/cart.png'
import CartDetails from '../CartDetails/CartDetails';


const NavBar = ({setCategory,setProductsList}) => {

  const [categoryList, setCategoryList] = useState([])
  const [showCart,setShowCart] = useState(false)

  useEffect(()=>{
    const getAllCategory = async()=>{
      const response = await axios(`${import.meta.env.VITE_URI}/products/category/all`);
      console.log(response.data.data)
      setCategoryList([...response.data.data]);
    }

    getAllCategory()
  },[])


  return (
    <div className='navBar'>
      <div className='allBtn'>
        {categoryList.map((cat)=>
        <Button onClick={()=>{setProductsList([]);setCategory(cat)}} variant="contained">{cat}</Button>)}
        <div className='cartBtn'>
        <Button onClick={()=>{setShowCart(!showCart)}}><img src={cart}/></Button>
          <div className='cartDetails'>
          {showCart && <CartDetails/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar