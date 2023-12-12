import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Sidebar from "../../components/admin/Sidebar";
import ProductCardAdmin from '../../components/admin/ProductCardAdmin'
import {getAllProducts} from '../../redux/actions/productAction'
import ShopNavbar from '../../components/shop/ShopNavbar';

const ManageProducts = () => {

  const [allProducts, setAllProducts] = useState([])

  const products = useSelector(state=> state.productReducer.products)

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllProducts())
  },[])

  useEffect(()=>{
    if(products){
      if(products.status === 200){
        if(products.data){
          setAllProducts(products.data.data)
        }
      }
    }
  },[products])


  return (
    <div className="admin-page">
      <ShopNavbar/>
    <div className="container">
      <div className="admin-page-wraper">
        <Sidebar/>
        <section className="dashboard-container">
          <h3>MANAGE PRODUCTS</h3>
          <div className="add-wraper">
            <div className='products-container'>
              {
                allProducts ? (
                  allProducts.map((product, index)=>(
                    <ProductCardAdmin key={index} product={product}/>
                  ))
                ):null
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  )
}

export default ManageProducts