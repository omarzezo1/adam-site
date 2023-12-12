import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAddress,
  getAllAddAddress,
  removeAddress,
} from "../../redux/actions/addressAction";
import ProfileNavigation from "../../utilities/ProfileNavigation";
import Home from "../../images/svg/home.svg";
import Trash from "../../images/svg/trash-white.svg";

const AddAddress = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [successMsg, setSuccessMsg] = useState(false);
  const [allUserData, setAllUserData] = useState([]);

  const dispatch = useDispatch();
  const addressData = useSelector((state) => state.addressReducer.address);
  const userAddressData = useSelector(
    (state) => state.addressReducer.allAddress
  );

  useEffect(() => {
    dispatch(getAllAddAddress());
  }, []);

  useEffect(() => {
    if (userAddressData) {
      if (userAddressData.status === "success") {
        if (userAddressData.data) {
          setAllUserData(userAddressData.data);
          console.log(userAddressData.data);
        }
      }
    }
  }, [userAddressData]);

  useEffect(() => {
    if (addressData) {
      if (addressData.status === "success") {
        setSuccessMsg(true);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    }
  }, [addressData]);

  const handelAddAddress = (e) => {
    e.preventDefault();
    if (
      name !== "" &&
      details !== "" &&
      phone !== "" &&
      city !== "" &&
      postalCode !== ""
    ) {
      dispatch(
        addAddress({
          alias: name,
          details: details,
          phone: phone,
          city: city,
          postalCode: postalCode,
        })
      );
    }
  };

  return (
    <div className="add-address-page">
      <h2>العناوين الخاصة بك</h2>
      <ProfileNavigation />
      <div className="add-address-containers">
        <h3>إضافة عنوان جديد</h3>
        <div
          className="msg-wraper"
          style={{ display: successMsg ? "flex" : "none" }}
        >
          <p>تم إضافة العنوان بنجاح</p>
          <h5>:نجاح</h5>
        </div>
        <form>
          <input
            type="text"
            value={name}
            placeholder="إضافة اسم العنوان (المنزل،العمل،..)"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            value={details}
            placeholder="إضافة تفاصبل العنوان"
            onChange={(e) => setDetails(e.target.value)}
            required
          />
          <input
            type="number"
            value={phone}
            placeholder="إضافة رقم الهاتف"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            value={city}
            placeholder="إضافة المحافظة"
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="text"
            value={postalCode}
            placeholder="إضافة الكود البريدي"
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
          <input
            className="submit"
            type="submit"
            value="إضافة عنوان"
            onClick={(e) => handelAddAddress(e)}
          />
        </form>
      </div>

      <div className="add-address-containers">
        <h3>كل العناوين الخاصة بك</h3>
        <div className="adresses-wraper">
          {allUserData.length > 0 ? (
            allUserData.map((address, index) => (
              <div className="address" key={index}>
                <img className="trash-img" src={Trash} alt="delete-address" onClick={()=>{
                    dispatch(removeAddress(address._id))
                    window.location.reload()
                }}/>
                <div className="address-details">
                  <span>
                    <p>{address.alias}</p>
                    <h5>:العنوان</h5>
                  </span>
                  <span>
                    <p>{address.details}</p>
                    <h5>:تفاصيل العنوان</h5>
                  </span>
                  <span>
                    <p>{address.phone}</p>
                    <h5>:رقم الهاتف</h5>
                  </span>
                  <span>
                    <p>{address.city}</p>
                    <h5>:المحافظة</h5>
                  </span>
                </div>
                <img className="home-img" src={Home} alt="address" />
              </div>
            ))
          ) : (
            <p className="no-items">لا يوجد أي عناوين حتى الأن</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
