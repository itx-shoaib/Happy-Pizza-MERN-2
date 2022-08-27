import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Orders() {
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
              <h1 className="my-3 mx-5 responsiveness">MY ORDERS</h1>
              <div className="col-lg-12 bs br mx-5 my-3 py-2 px-5 responsiveness">
                <div className="row justify-content-center my-3">
                  <div className="dropdown">
                    <button
                      className="btn btn-light btn-lg filterbtn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      FILTER
                    </button>
                    <ul
                      className="dropdown-menu filtermenu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <h6 className="dropdown-item">Date Range</h6>
                      <input className="mx-2" placeholder="Start Date" />
                      <input className="mx-2" placeholder="End Date" />
                      <button className="btn btn-primary mx-3">Export</button>
                      <button className="btn btn-primary mx-3">Search</button>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 bs br mx-5 my-5 py-5 px-5 responsiveness">
                <div className="row justify-content-center">
                  <h6>ORDER HISTORY</h6>
                  <br />
                  <hr />
                  <br />
                  <br />
                  <h4>You dont have any orders...</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
