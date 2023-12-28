import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { deleteProduct } from "../../redux/actions/productAction";
// import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";


const ratingChanged = (newRating) => {
  console.log(newRating);
};

const ProductCardAdmin = ({product}) => {
  // const dispatch = useDispatch()
  // const deleteProductData = useSelector(state=>state.productReducer.deleteProduct)

  // const handelDeleteProduct = (id)=>{
  //   dispatch(deleteProduct(id))
  // }

  // useEffect(()=>{
  //   if(deleteProductData){
  //     console.log(deleteProductData)
  //     if(deleteProductData.status === 204){
  //       window.location.reload()
  //     }
  //   }
  // },[deleteProductData])

  return (
    <div className="product">
      <div className="product-img">
      <Link to={`/shop/product/${product._id}`}>
        <img  src={product.imageCover} alt="product-1" />
      </Link>
      </div>
      <div className="product-details">
        <h3>
          <Link to={"/shop/product"}>{product.title}</Link>
        </h3>
        <div className="price">
          <p className="price-before">${Math.ceil(product.price)}</p>
          <p className="price-after">${Math.ceil(product.priceAfterDiscount)}</p>
        </div>
        <div className="rating">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={30}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#8f6B29"
              edit={false}
              value={product.ratingsAverage}
            />
        </div>
        <div className="add-to-cart">
            <Link to={`/admin/edit-product/${product._id}`} className="edit">Edit</Link>
            {/* <button className="delete" onClick={()=>handelDeleteProduct(product._id)}>Delete</button> */}
        </div>
      </div>
    </div>
  );
};

export default ProductCardAdmin;
