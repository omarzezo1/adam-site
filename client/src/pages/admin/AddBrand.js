import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Upload from "../../images/svg/upload-img.svg";
import Delete from "../../images/svg/close.svg";
import Edit from "../../images/svg/edit.svg";
import Sidebar from "../../components/admin/Sidebar";
import { createBrand, getAllBrands, deleteBrand } from "../../redux/actions/brandAction";
import ShopNavbar from "../../components/shop/ShopNavbar";

const AddBrand = () => {
  const [imgURL, setImgURL] = useState(Upload);
  const [img, setImg] = useState(null);
  const [brandName, setBrandName] = useState("");
  const [allBrands, setAllBrands] = useState([]);

  const dispatch = useDispatch()
  const allBrandsData = useSelector(state=>state.brandReducer.brands)

  useEffect(()=>{
    dispatch(getAllBrands())
  },[])

  useEffect(()=>{
    if(allBrandsData){
      if(allBrandsData.status === 200){
        if(allBrandsData.data){
          setAllBrands(allBrandsData.data.data)
        }
      }
    }
  },[allBrandsData])

  const onChangeImg = (e)=>{
    if(e.target.files && e.target.files[0]){
      setImgURL(URL.createObjectURL(e.target.files[0]))
      setImg(e.target.files[0])
    }
  }

  const handelSubmit = async(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('name', brandName)
    await formData.append('image', img)
    await dispatch(createBrand(formData))
    setImgURL(Upload)
    setBrandName("")
  }

  return (
    <div className="admin-page">
      <ShopNavbar/>
      <div className="container">
        <div className="admin-page-wraper">
          <Sidebar/>
          <section className="dashboard-container">
            <h3>ADD NEW BRAND</h3>
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
                <input type="text" placeholder="Brand Name" value={brandName} onChange={(e)=> setBrandName(e.target.value)}/>
                <input className="submit" type="submit" value="ADD Brand" onClick={(e)=> handelSubmit(e)}/>
              </form>
            </div>
            <div className="manage-categories">
              {
                allBrands.length > 0 ? (
                  allBrands.map((brand, index)=>(
                    <div className="category" key={index}>
                      <img src={Delete} alt="delete-category" onClick={()=>{
                        dispatch(deleteBrand(brand._id))
                        window.location.reload()
                      }}/>
                      <img src={Edit} className="edit" alt="edit-category"/>
                      <h6>{brand.name}</h6>
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

export default AddBrand;