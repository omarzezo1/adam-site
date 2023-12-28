import React from 'react'
import {useDispatch} from 'react-redux'
import Cart from '../../images/svg/cart-product.svg'
import Trash from '../../images/svg/trash.svg'
import {removeProductFromWishlist} from '../../redux/actions/wishlistAction'
import serverUrl from '../../api/serverUrl'
import { addToCart } from '../../redux/actions/cartAction'

const FavProduct = ({favProduct}) => {
    const dispatch = useDispatch()

    const removeFavProduct = async()=>{
        await dispatch(removeProductFromWishlist(favProduct._id))
        let list = JSON.parse(localStorage.getItem("favProductsAdam")).filter(el=> el !== favProduct._id)
        localStorage.setItem("favProductsAdam", JSON.stringify(list))
        window.location.reload()
    }

    const handelAddToCart = async(productId)=>{
        await dispatch(addToCart({
            productId,
        }))
        dispatch(removeProductFromWishlist(favProduct._id))
        let list = JSON.parse(localStorage.getItem("favProductsAdam")).filter(el=> el !== favProduct._id)
        localStorage.setItem("favProductsAdam", JSON.stringify(list))
        window.location.reload()
    }


  return (
    <div className='fav-product'>
        <img className='trash' src={Trash} alt='trash' onClick={removeFavProduct}/>
        <div className='product-img'>
            <img src={`${serverUrl}/products/${favProduct.imageCover}`} alt='product' loading='lazy'/>
        </div>
        <div className='product-details'>
            <h3>{favProduct.title}</h3>
            <div className='product-price'>
                <p className='old-price'>LE {favProduct.price}.00</p>
                <p className='new-price'>LE {favProduct.priceAfterDiscount}.00</p>
            </div>
            <div className='add-to-cart' onClick={()=>handelAddToCart(favProduct._id)}>
                <img src={Cart} alt='cart' loading='lazy'/>
                <h5>Add To Cart</h5>
            </div>
        </div>
    </div>
  )
}

export default FavProduct