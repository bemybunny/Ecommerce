import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Ecommerce_Frontend_Assets/Assets/star_icon.png'
import star_dull_icon from '../Ecommerce_Frontend_Assets/Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
            <img src={product.image} alt=""/>
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt=""/>
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
            <img src={star_icon} alt =""/>
            <img src={star_icon} alt =""/>
            <img src={star_icon} alt =""/>
            <img src={star_icon} alt =""/>
            <img src={star_dull_icon} alt =""/>
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">${product.old_price}</div>
            <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
        A cotton mini skirt is a stylish and comfortable garment that typically features a shorter length, usually above the knee. Ideal for both casual outings and semi-formal occasions, a cotton mini skirt combines comfort with a chic aesthetic, making it a popular choice in contemporary fashion.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <div className="productdisplay-right-category">
            <p><span>Category :</span>Women,T-Shirt,Crop Top</p>
            <p><span>Tags :</span>Modern, Latest</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
