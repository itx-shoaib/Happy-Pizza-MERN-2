import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

function Profile() {
  const getstatus = localStorage.getItem("status");
  const [name, setname] = useState(JSON.parse(localStorage.getItem("currentuser"))[0].name);
  const [email, setemail] = useState(JSON.parse(localStorage.getItem("currentuser"))[0].email);
  const [number, setnumber] = useState(JSON.parse(localStorage.getItem("currentuser"))[0].number);
  const [ordercount, setordercount] = useState("")
  const [address, setaddress] = useState([])

  async function updatecustomer(e) {
    const details = {
      customer_Id: JSON.parse(localStorage.getItem('currentuser'))[0].customer_Id,
      name,
      email,
      number
    }
    try {

      // setloading(true)
      const result = await axios.post("https://apinodejs.creativeparkingsolutions.com/api/admin/myprofile", details).data;
      console.log(result)
      // toast.success("Password has been changed")
      // setloading(true)
      setInterval(() => {
        window.location.href = "/home"
      }, 2000);


      setemail('');
      setname('');
      setnumber('');

    } catch (error) {
      console.log(error);
      // toast.warn("Something went wrong!")
      e.preventDefault()
      // setloading(true)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const detail = {
        customer_Id: JSON.parse(localStorage.getItem("currentuser"))[0].customer_Id
      }
      try {
        const data = await (
          await axios.post("https://apinodejs.creativeparkingsolutions.com/api/admin/getordercount", detail)
        ).data;

        const result = await (
          await axios.post("https://apinodejs.creativeparkingsolutions.com/api/user/lastaddedaddress", detail)
        ).data

        setordercount(data.data['total']);
        setaddress(result.data[0])
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-lg-3 col-xl-2 px-sm-2 px-0 sidebar">
            <div className="d-flex flex-column align-items-center px-3 pt-2 min-vh-100">
              <h5 className="my-5 text-center">
                {getstatus === "true" ? (
                  <>
                    {JSON.parse(localStorage.getItem("currentuser"))[0].name}
                  </>
                ) : (
                  <>user name</>
                )}
              </h5>
              <ul
                className="nav nav-tabs mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <Link
                    to="/profile"
                    className="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-user"></i>
                    <span className="ms-1 d-none d-sm-inline">
                      {" "}
                      My Profile
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/orders"
                    className="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-chart-line"></i>
                    <span className="ms-1 d-none d-sm-inline">
                      {" "}
                      My Orders
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/addresses"
                    className="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-location-dot"></i>
                    <span className="ms-1 d-none d-sm-inline">
                      My Addresses
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/change-password"
                    className="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-lock-open"></i>
                    <span className="ms-1 d-none d-sm-inline">Password</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <h1 className="my-3 mx-5 responsiveness">USER PROFILE</h1>
              <div className="col-lg-7 bs br mx-4 my-5 py-4 px-4 responsiveness">
                <div className="container userprofileinfo">
                  <h6>USER PROFILE</h6>
                  {/* <Link to="/cart-checkout">
                    <button className="btn btn-info usercartbtn">
                      <i class="fa-solid fa-bag-shopping btnicon"></i> CART
                    </button>
                  </Link> */}
                </div>
                <br />
                <hr />
                <br />
                <label for="namee">Name</label>
                <input
                  id="namee"
                  className="form-control mb-4"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => { setname(e.target.value) }}
                />
                <label for="emailad">Email Address</label>
                <input
                  id="emailad"
                  className="form-control mb-4"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => { setemail(e.target.value) }}
                />
                <label for="phoneno">Phone</label>
                <input
                  id="phoneno"
                  className="form-control mb-4"
                  placeholder="Phone"
                  value={number}
                  onChange={(e) => { setnumber(e.target.value) }}
                />
                <button className="btn btn-primary usercartbtn" onClick={updatecustomer}>
                  Update
                </button>
              </div>
              <div className="col-lg-4 text-start bs br mx-3 my-5 py-4 px-4 profileinfo responsiveness">
                <p>Total Orders: {ordercount}</p>
                <br />
                <hr />
                <br />
                <p>Last Added Address:</p>
                {address.length < 1 ? (
                  <p>
                    <h6>No address</h6>
                  </p>
                ) :
                  // address.map(
                  //   (val) => {
                  //     return <>
                  //       <p>{val.house},{val.flat},{val.street}</p>
                  //     </>
                  //   }
                  // )
                  <p>{address.house},{address.flat},{address.street}</p>

                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
