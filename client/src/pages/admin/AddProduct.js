import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/admin/Sidebar";
import ImageUploading from "react-images-uploading";
import Upload from "../../images/svg/upload-img.svg";
import { getAllCategory } from "../../redux/actions/categoryAction";
import { createProduct } from "../../redux/actions/productAction";
import ShopNavbar from "../../components/shop/ShopNavbar";

const AddProduct = () => {
  const [title, setTitle] = useState("")
  const [des, setDes] = useState("")
  const [qty, setQty] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [priceAfterDiscount, setPriceAfterDiscount] = useState("")
  const [priceBeforeDiscount, setPriceBeforeDiscount] = useState("")
  const [images, setImages] = useState([]);
  const maxNumber = 4;
  const [categories, setCategories] = useState([])
  const [sizes, setSizes] = useState([])
  const [age, setAge] = useState("")
  const [season, setSeason] = useState("")

  const onChangeSize = (e)=>{
    setSizes([...sizes, e.target.value])
  }


  const allCategories = useSelector(state=> state.categoryReducer.categories)

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
  };

  // Product images array
  let imgArray = []
  images.map((img)=>(
    imgArray.push(img.file)
  ))


  const dispatch = useDispatch();
  const productData = useSelector(state=> state.productReducer.products)

  useEffect(()=>{
    if(productData){
      console.log(productData)
    }
  },[productData])

  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", des)
    formData.append("category", categoryId)
    formData.append("imageCover", imgArray[0])
    imgArray.map(img=>{
      formData.append("images", img)
    })
    formData.append("price", priceBeforeDiscount)
    formData.append("priceAfterDiscount", priceAfterDiscount)
    formData.append("quantity", qty)
    sizes.map(size=>{
      formData.append("availableSizes", size)
    })
    await dispatch(createProduct(formData))
    window.location.reload()
  };

  useEffect(()=>{
    dispatch(getAllCategory())
  },[])

  useEffect(()=>{
    if(allCategories){
      if(allCategories.data){
        setCategories(allCategories.data)
      }
    }
  },[allCategories])


  return (
    <div className="admin-page">
      <ShopNavbar/>
      <div className="container">
        <div className="admin-page-wraper">
          <Sidebar />
          <section className="dashboard-container">
            <h3>ADD NEW PRODUCT</h3>
            <div className="add-wraper">
              <div className="upload-wraper product-upload">
                <ImageUploading
                  multiple
                  value={images}
                  onChange={onChange}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                      {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                      <button
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <img src={Upload} alt="product-images" />
                      </button>
                      &nbsp;
                      {imageList.map((image, index) => (
                        <div key={index} className="image-item">
                          <img src={image["data_url"]} alt="" width="100" />
                          <div className="image-item__btn-wrapper">
                            <button onClick={() => onImageUpdate(index)}>
                              Update
                            </button>
                            <button onClick={() => onImageRemove(index)}>
                              Remove
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ImageUploading>
              </div>
              <form>
                <input
                  type="text"
                  placeholder="Product Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <textarea maxLength={200} style={{resize: "none"}} placeholder="Discreption" value={des} onChange={(e)=> setDes(e.target.value)}/>
                <input
                  type="number"
                  placeholder="Quantity"
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                />                          
                <input
                  type="number"
                  placeholder="Price Before Discount"
                  value={priceBeforeDiscount}
                  onChange={(e) => setPriceBeforeDiscount(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Price After Discount"
                  value={priceAfterDiscount}
                  onChange={(e) => setPriceAfterDiscount(e.target.value)}
                />
                <select onChange={(e)=> setCategoryId(e.target.value)}>
                  <option>Choose Category</option>
                  {
                    categories ? (
                      categories.map((cat, index)=>(
                        <option value={cat._id} key={index}>{cat.name}</option>
                      ))
                    ):null
                  }
                </select>                          
                <select multiple onClick={(e)=> onChangeSize(e)}>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="2xl">2XL</option>
                    <option value="3xl">3XL</option>
                    <option value="4xl">4XL</option>
                    <option value="5xl">5XL</option>
                    <option value="6xl">6XL</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                </select>                                     
                <input
                  className="submit"
                  type="submit"
                  value="Add Product"
                  onClick={(e) => handelSubmit(e)}
                />
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
