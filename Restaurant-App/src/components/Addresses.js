import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Addresses() {
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
                <h4>You dont have any addresses...</h4>
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
                          required
                        />
                        <label for="postcode">Postcode</label>
                        <input
                          className="form-control mb-3 px-2"
                          placeholder="Postcode"
                          id="postcode"
                          required
                        />
                      </div>
                      <div className="col-lg-5">
                        <label for="flat">Flat</label>
                        <input
                          className="form-control mb-3 px-2"
                          placeholder="Flat"
                          id="flat"
                        />
                        <label for="street">Street</label>
                        <input
                          className="form-control mb-3 px-2"
                          placeholder="Street"
                          id="street"
                          required
                        />
                      </div>
                      <div className="col-lg-10">
                      <label for="town">Town</label>
                        <input
                          className="form-control my-3 px-2"
                          placeholder="Postal Town"
                          id="town"
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
                    <button type="button" className="btn btn-primary">
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
