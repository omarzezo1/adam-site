import React from 'react'
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
    <h2>Adam Dashboard</h2>
    <ul>
      <li>
        <Link to="/manage-orders">Manage Orders</Link>
      </li>
      <li>
        <Link to="/admin">Manage Products</Link>
      </li>
      <li>
        <Link to="/admin/manage-coupons">Manage Coupons</Link>
      </li>
      <li>
        <Link to="/admin/manage-categories">Manage Categories</Link>
      </li>
      <li>
        <Link to="/admin/manage-brands">Manage Brands</Link>
      </li>
      <li>
        <Link to="/admin/add-product">Add Product</Link>
      </li>
      <li>
        <Link to="/admin/add-coupon">Add Coupons</Link>
      </li>
    </ul>
  </aside>
  )
}

export default Sidebar