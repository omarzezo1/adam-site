import React from 'react';
import Home from './pages/home/Home';
import './styles/main.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import AboutUs from './pages/home/AboutUs';
import ScrollToTop from './utilities/ScrollToTop'
import Shop from './pages/shop/Shop';
import Contacts from './pages/home/Contacts';
import SingleBlog from './pages/blog/SingleBlog';
import Blogs from './pages/blog/Blogs';
import AllArticles from './pages/blog/AllArticles';
import SingleProduct from './pages/shop/SingleProduct';

import Login from './pages/shop/account/Login';
import Signup from './pages/shop/account/Signup';
import Profile from './pages/shop/account/Profile';
import AddAddress from './pages/shop/account/AddAddress';

import Cart from './pages/shop/order/Cart';
import Checkout from './pages/shop/order/Checkout';

import ManageProducts from './pages/admin/ManageProducts';
import AddCategory from './pages/admin/AddCategory';
import AddBrand from './pages/admin/AddBrand';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import AddCoupon from './pages/admin/AddCoupon';
import ManageCoupons from './pages/admin/ManageCoupons';
import ManageOrders from './pages/admin/ManageOrders';
import OrderDetails from './pages/shop/order/OrderDetails'
import ForgetPassword from './pages/shop/account/ForgetPassword';
import ResetCode from './pages/shop/account/ResetCode';
import ResetPassword from './pages/shop/account/ResetPassword';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop>
    <main className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/shop' element={<Shop/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/reset-code' element={<ResetCode/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/add-address' element={<AddAddress/>}/>

        <Route path='/admin' element={<ManageProducts/>}/>
        <Route path='/admin/manage-categories' element={<AddCategory/>}/>
        <Route path='/admin/manage-brands' element={<AddBrand/>}/>
        <Route path='/admin/add-product' element={<AddProduct/>}/>
        <Route path='/admin/edit-product/:id' element={<EditProduct/>}/>
        <Route path='/admin/add-coupon' element={<AddCoupon/>}/>
        <Route path='/admin/manage-coupons' element={<ManageCoupons/>}/>
        <Route path='/admin/manage-orders' element={<ManageOrders/>}/>
        <Route path='/admin/order-details/:id' element={<OrderDetails/>}/>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>

        <Route path='/shop/product/:id' element={<SingleProduct/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/all-articles' element={<AllArticles/>}/>
        <Route path='/blogs/blog' element={<SingleBlog/>}/>
      </Routes>
    </main>
    </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
