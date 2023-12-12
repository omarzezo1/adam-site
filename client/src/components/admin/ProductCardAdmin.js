import React, { useEffect } from "react";
import Star from "../../images/svg/star.svg";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";


const ProductCardAdmin = ({product}) => {
  const dispatch = useDispatch()
  const deleteProductData = useSelector(state=>state.productReducer.deleteProduct)

  const handelDeleteProduct = (id)=>{
    dispatch(deleteProduct(id))
  }

  useEffect(()=>{
    if(deleteProductData){
      console.log(deleteProductData)
      if(deleteProductData.status === 204){
        window.location.reload()
      }
    }
  },[deleteProductData])

  return (
    <div className="product">
      <div className="product-img">
      <Link to={"/shop/product"}>
        <img  src={product.imageCover} alt="product-1" />
      </Link>
      </div>
      <div className="product-details">
        <h3>
          <Link to={"/shop/product"}>{product.title}</Link>
        </h3>
        <div className="price">
          <p className="price-before">$120.99</p>
          <p className="price-after">$110.99</p>
        </div>
        <div className="rating">
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
          <img src={Star} alt="star" />
        </div>
        <div className="add-to-cart">
            <button className="edit">Edit</button>
            <button className="delete" onClick={()=>handelDeleteProduct(product._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardAdmin;
