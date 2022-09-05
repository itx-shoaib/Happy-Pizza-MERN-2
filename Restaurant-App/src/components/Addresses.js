import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import '../Css/Address.css'

function Addresses() {
  const [house, sethouse] = useState('');
  const [postcode, setpostcode] = useState('');
  const [flat, setflat] = useState('');
  const [street, setstreet] = useState('');
  const [town, settown] = useState('');
  const [address, setAddress] = useState([])
  const getstatus = localStorage.getItem('status');

  async function addAddress() {
    const info = {
      house,
      postcode,
      flat,
      street,
      town,
      customer_Id: JSON.parse(localStorage.getItem('currentuser'))[0].customer_Id
    }
    try {
      const data = (await axios.post('http://localhost:5000/api/user/addaddress', info)).data
      console.log(data.data)
      toast.success("New address added")

      sethouse('');
      setpostcode('');
      setflat('');
      setstreet('');
      settown('');

    } catch (error) {
      console.log(error)
      toast.warn("Failed! Try again later")
    }
  }

  async function primary(ID) {
    const info = {
      customer_Id: JSON.parse(localStorage.getItem('currentuser'))[0].customer_Id,
      ID
    }
    try {
      const data = (await axios.post('http://localhost:5000/api/user/setaddressprimary', info)).data
      update()
      toast.success("Address successfully updated.")
      // window.location.reload();
      // console.log(data.data)


    } catch (error) {
      console.log(error)
    }
  }

  async function update(){
    if(getstatus==="true")
  {
   const user =JSON.parse(localStorage.getItem('currentuser'))[0].customer_Id;
   

      const temp = {
        customer_Id:user
      }
      try {

        const data = ( await axios.post("http://localhost:5000/api/user/getaddress",temp)).data;
        console.log(data.data)
        setAddress(data.data)

      } catch (error) {
        console.log(error);

      }
    }
  }

  useEffect(() => {
    async function fetchData() {
      const user = {
        customer_Id: JSON.parse(localStorage.getItem('currentuser'))[0].customer_Id
      }
      try {
        const data = await (await axios.post('http://localhost:5000/api/user/getaddress', user)).data
        setAddress(data.data)

      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-lg-3 col-xl-2 px-sm-2 px-0 sidebar">
            <div className="d-flex flex-column align-items-center px-3 pt-2 min-vh-100">
              <h5 className="my-5 text-center">{getstatus === "true" ? (<>
                {JSON.parse(localStorage.getItem('currentuser'))[0].name}
              </>) : (<>
                user name</>)}</h5>
              <ul
                className="nav nav-tabs mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <Link
                    to="/profile"
                    className="nav-link align-middle px-0 sidebartag"
                  >
                    <i className="fa-solid fa-user"></i>
                    <span className="ms-1 d-none d-sm-inline"> My Profile</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/orders"
                    className="nav-link align-middle px-0 sidebartag"
                  >
                    <i className="fa-solid fa-chart-line"></i>
                    <span className="ms-1 d-none d-sm-inline"> My Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/addresses"
                    className="nav-link align-middle px-0 sidebartag"
                  >
                    <i className="fa-solid fa-location-dot"></i>
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
                    <i className="fa-solid fa-lock-open"></i>
                    <span className="ms-1 d-none d-sm-inline">Password</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="row">
              <h1 className="my-3 mx-5 responsiveness">MY ADDRESSES</h1>
              <div className="col-lg-12 bs br mx-4 my-5 py-4 px-4 responsiveness">
                <div className="container userprofileinfo">
                  <h6>MY ADDRESSES</h6>
                  <button
                    type="button"
                    className="btn btn-primary usercartbtn"
                    data-bs-toggle="modal"
                    data-bs-target="#addressModal"
                  >
                    Add Address
                  </button>
                </div>
                <br />
                <hr />
                <br />
                <div className="row">
                  <div className="col-md-12">
                    {address.length > 0 && (<>
                      <div className="table-responsive-sm">


                        <table class="table">
                          <thead>
                            <tr>
                              <th scope="col">Address</th>
                              <th scope="col"></th>
                              <th scope="col"></th>
                              <th scope="col">Actions</th>
                            </tr>
                          </thead>
                          <tbody class="table-group-divider">
                            {address.map((item) => {
                              return <>
                                <tr>
                                  <td>{item.house},{item.flat},{item.street},{item.postcode},{item.town}
                                  {item.address_status === 1 && (<><span class="badge text-bg-info info">Primary Address</span></>) }
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td>
                                    <div class="dropdown">
                                      <button class="btn btn-info customRadius" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      <AiOutlineUnorderedList />
                                      </button>
                                      <ul class="dropdown-menu">
                                        {item.address_status === 1 ? (<>
                                          <li><button class="dropdown-item" type="button">Delete</button></li>
                                        </>):(<>
                                          <li><button class="dropdown-item" type="button" onClick={()=>{primary(item.ID)}}>Set as primary</button></li>
                                          <li><button class="dropdown-item" type="button">Delete</button></li>
                                          </>)}
                                        
                                        
                                      </ul>
                                    </div>
                                  </td>
                                </tr>

                                {/* <h4>{item.house},{item.flat},{item.street},{item.postcode},{item.town}</h4> */}
                              </>
                            })}
                          </tbody>
                        </table>
                      </div>
                    </>)}
                    {address ? (<>
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">Address</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody class="table-group-divider">
                          <tr>
                            <td scope="row">{address.house},{address.flat},{address.street},{address.postcode},{address.town}</td>
                            <td></td>
                            <td></td>
                            <td>@mdo</td>
                          </tr>
                        </tbody>
                      </table>
                      {/* <h4> {address.house},{address.flat},{address.street},{address.postcode},{address.town}</h4> */}
                    </>) : (<>
                      <h4>You dont have any addresses...</h4>
                    </>)}
                  </div>
                </div>




              </div>
            </div>
            <div
              className="modal fade"
              id="addressModal"
              tabindex="-1"
              aria-labelledby="addressModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="addressModalLabel">
                      ADD NEW ADDRESS
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13611.200265534018!2d74.3023612!3d31.4746856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd90d41edbbe08d45!2sINNOVATION.TECH!5e0!3m2!1sen!2s!4v1660646556492!5m2!1sen!2s"
                          width="100%"
                          height="150px"
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <input
                          className="form-control my-3 px-2"
                          placeholder="Search address using Postal Code, street, etc"
                        />
                      </div>
                      <div className="col-lg-5">
                        <label for="houseno">House/Door No.</label>
                        <input
                          className="form-control mb-3 px-2"
                          placeholder="House/Door No."
                          id="houseno"
                          value={house}
                          onChange={(e) => { sethouse(e.target.value) }}
                          required
                        />
                        <label for="postcode">Postcode</label>
                        <input
                          className="form-control mb-3 px-2"
                          placeholder="Postcode"
                          id="postcode"
                          value={postcode}
                          onChange={(e) => { setpostcode(e.target.value) }}
                          required
                        />
                      </div>
                      <div className="col-lg-5">
                        <label for="flat">Flat</label>
                        <input
                          className="form-control mb-3 px-2"
                          placeholder="Flat"
                          id="flat"
                          value={flat}
                          onChange={(e) => { setflat(e.target.value) }}
                          required
                        />
                        <label for="street">Street</label>
                        <input
                          className="form-control mb-3 px-2"
                          placeholder="Street"
                          id="street"
                          value={street}
                          onChange={(e) => { setstreet(e.target.value) }}
                          required
                        />
                      </div>
                      <div className="col-lg-10">
                        <label for="town">Town</label>
                        <input
                          className="form-control my-3 px-2"
                          placeholder="Postal Town"
                          id="town"
                          value={town}
                          onChange={(e) => { settown(e.target.value) }}
                          required
                        />
                        <div class="form-check form-switch my-3">
                          <label
                            class="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            Default Address
                          </label>
                          <input
                            class="form-check-input"
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" onClick={addAddress} className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addresses;
