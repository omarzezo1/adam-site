import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import Sidebar from "../../utilities/Sidebar";

const AddSize = () => {

  const [size, setSize] = useState("");

  const handelSubmit = async(e)=>{
    e.preventDefault()

  }

  return (
    <div className="admin-page">
    <div className="container">
      <div className="admin-page-wraper">
        <Sidebar/>
        <section className="dashboard-container">
          <h3>إضافة مقاس جديد</h3>
          <div className="add-wraper">
            <form>
              <input type="text" placeholder="المقاس" value={size} onChange={(e)=> setSize(e.target.value)}/>
              <input className="submit" type="submit" value="إضافة مقاس" onClick={(e)=> handelSubmit(e)}/>
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
  )
}

export default AddSize