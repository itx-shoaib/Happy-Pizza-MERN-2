import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-lg-3 col-xl-2 px-sm-2 px-0 sidebar">
            <div className="d-flex flex-column align-items-center px-3 pt-2 min-vh-100">
              <h5 className="my-5 text-center">USER NAME</h5>
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
                    <span className="ms-1 d-none d-sm-inline"> My Profile</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/orders"
                    className="nav-link align-middle px-0 sidebartag"
                  >
                    <i class="fa-solid fa-chart-line"></i>
                    <span className="ms-1 d-none d-sm-inline"> My Orders</span>
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
                    <span className="ms-1 d-none d-sm-inline">
                      Password
                    </span>
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
              <Link to="/cart-checkout">
                <button
                  className="btn btn-info usercartbtn"
                >
                  <i class="fa-solid fa-bag-shopping btnicon"></i> CART
                </button>
                </Link>
              </div>
                <br />
                <hr />
                <br />
                <label for="namee">Name</label>
                <input
                  id="namee"
                  className="form-control mb-4"
                  placeholder="Name"
                />
                <label for="emailad">Email Address</label>
                <input
                  id="emailad"
                  className="form-control mb-4"
                  placeholder="Email"
                />
                <label for="phoneno">Phone</label>
                <input
                  id="phoneno"
                  className="form-control mb-4"
                  placeholder="Phone"
                />
                <button className="btn btn-primary usercartbtn">Update</button>
              </div>
              <div className="col-lg-4 text-start bs br mx-3 my-5 py-4 px-4 profileinfo responsiveness">
                <p>INFO</p>
                <br />
                <hr />
                <br />
                <p>Total Orders: 0</p>
                <br />
                <hr />
                <br />
                <p>Last Added Address: ---</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
