import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Home.css'
import ProductCard from '../../components/ProductCard/ProductCard';
import Button from '@mui/material/Button';
import axios from 'axios'

const Home = () => {

    const [productsList,setProductsList] = useState([])
    const [reloadMore,setReloadMore] = useState(false)
    const [category,setCategory] = useState('')



      useEffect(()=>{
        const getData = async()=>{
        const response = await axios.get(`${import.meta.env.VITE_URI}/products/${productsList.length}`);
        setProductsList((prev) => [...prev, ...response.data.data]);
        }

        const getDataByCategory = async()=>{
            const response = await axios.get(`${import.meta.env.VITE_URI}/products/${category}/${productsList.length}`);
            console.log(response.data.data)
            setProductsList((prev) => [...prev, ...response.data.data]);
            }


        if(category == '')
            getData();
        else
        {
            getDataByCategory();
        }
      },[reloadMore,category])




  return (
    <div className='full-page-container'>
        <nav className='navBarBox'>
            <NavBar setCategory ={setCategory} setProductsList={setProductsList}/>
        </nav>
        <main>
            {productsList.map((pro,index)=>{
                return <ProductCard product = {pro} key={index}/>
            })}
        </main>
        <div className='reloadBtn'>
        <Button variant="contained" onClick={()=>{setReloadMore(!reloadMore)}}>Reload more</Button>
        </div>
    </div>
  )
}

export default Home