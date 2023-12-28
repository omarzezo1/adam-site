import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addAddress,
  getAllAddAddress,
  removeAddress,
} from "../../../redux/actions/addressAction";
import ProfileNavigation from "../../../components/shop/ProfileNavigation";
import Home from "../../../images/svg/home.svg";
import Trash from "../../../images/svg/trash-white.svg";

import ShopNavbar from "../../../components/shop/ShopNavbar";
import ShopFooter from "../../../components/shop/ShopFooter";

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
      <ShopNavbar />
      <h2>YOUR ADDRESSES</h2>
      <ProfileNavigation />
      <div className="add-address-containers">
        <h3>ADD NEW ADDRESS</h3>
        <div
          className="msg-wraper"
          style={{ display: successMsg ? "flex" : "none" }}
        >
          <h5>Success</h5>
          <p>Address Added Successfully</p>
        </div>
        <form>
          <input
            type="text"
            value={name}
            placeholder="Add Address Name (home, work, ...)"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            value={details}
            placeholder="Address Details"
            onChange={(e) => setDetails(e.target.value)}
            required
          />
          <input
            type="number"
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <input
            type="text"
            value={city}
            placeholder="Add City"
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input
            type="text"
            value={postalCode}
            placeholder="Add Zip Code"
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
          <input
            className="submit"
            type="submit"
            value="ADD ADDRESS"
            onClick={(e) => handelAddAddress(e)}
          />
        </form>
      </div>

      <div className="add-address-containers">
        <h3>All Your Addresses</h3>
        <div className="adresses-wraper">
          {allUserData.length > 0 ? (
            allUserData.map((address, index) => (
              <div className="address" key={index}>
                <img
                  className="trash-img"
                  src={Trash}
                  alt="delete-address"
                  onClick={() => {
                    dispatch(removeAddress(address._id));
                    window.location.reload();
                  }}
                />
                <img className="home-img" src={Home} alt="address" />
                <div className="address-details">
                  <span>
                    <h5>Address:</h5>
                    <p>{address.alias}</p>
                  </span>
                  <span>
                    <h5>Address Details:</h5>
                    <p>{address.details}</p>
                  </span>
                  <span>
                    <h5>Phone Number:</h5>
                    <p>{address.phone}</p>
                  </span>
                  <span>
                    <h5>City:</h5>
                    <p>{address.city}</p>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="no-items">No Addresses Yet</p>
          )}
        </div>
      </div>
      <ShopFooter />
    </div>
  );
};

export default AddAddress;
