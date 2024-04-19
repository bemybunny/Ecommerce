import React,{useState,useEffect} from 'react'
import './Popular.css'
import Item from '../Item/Item'
import popularProducts from '../Ecommerce_Frontend_Assets/Assets/data'
const Popular = () => {

  return ( 
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item">
        {popularProducts.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
