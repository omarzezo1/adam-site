import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Upload from "../../images/svg/upload-img.svg";
import Delete from "../../images/svg/close.svg";
import Edit from "../../images/svg/edit.svg";
import Sidebar from "../../components/admin/Sidebar";
import { createCategory, deleteCategory, getAllCategory } from "../../redux/actions/categoryAction";
import ShopNavbar from "../../components/shop/ShopNavbar";

const AddCategory = () => {
  const [imgURL, setImgURL] = useState(Upload);
  const [img, setImg] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [allCategories, setAllCategories] = useState([])

  const dispatch = useDispatch()
  const allCategoriesData = useSelector(state=>state.categoryReducer.categories)

  const onChangeImg = (e)=>{
    if(e.target.files && e.target.files[0]){
      setImgURL(URL.createObjectURL(e.target.files[0]))
      setImg(e.target.files[0])
    }
  }

  const handelSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', categoryName)
    await formData.append('image', img)
    await dispatch(createCategory(formData))
    setImgURL(Upload)
    setCategoryName("")
  }

  useEffect(()=>{
    dispatch(getAllCategory())
  },[])

  useEffect(()=>{
    if(allCategoriesData){
      if(allCategoriesData.data){
        setAllCategories(allCategoriesData.data)
      }
    }
  },[allCategoriesData])

  return (
    <div className="admin-page">
      <ShopNavbar/>
      <div className="container">
        <div className="admin-page-wraper">
          <Sidebar/>
          <section className="dashboard-container">
            <h3>ADD NEW CATEGORY</h3>
            <div className="add-wraper">
              <div className="upload-wraper">
                <label htmlFor="upload-img">
                  <img src={imgURL} alt="upload-img" loading='lazy'/>
                </label>
                <input
                  type="file"
                  id="upload-img"
                  onChange={onChangeImg}
                />
              </div>
              <form>
                <input type="text" placeholder="Category Name" value={categoryName} onChange={(e)=> setCategoryName(e.target.value)}/>
                <input className="submit" type="submit" value="Add Category" onClick={(e)=> handelSubmit(e)}/>
              </form>
            </div>
            <div className="manage-categories">
              {
                allCategories.length > 0 ? (
                  allCategories.map((cat, index)=>(
                    <div className="category" key={index}>
                      <img src={Delete} alt="delete-category" onClick={()=>{
                        dispatch(deleteCategory(cat._id))
                        window.location.reload()
                      }}/>
                      <img src={Edit} className="edit" alt="edit-category"/>
                      <h6>{cat.name}</h6>
                    </div>
                  ))
                ):null
              }
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
