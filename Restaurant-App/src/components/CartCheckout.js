import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Link} from "react-router-dom"

function CartCheckout() {
  return (
    <>
      <Navbar />
      <div className="row justify-content-center my-5">
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6">
              <div className="container bs br mx-2 my-4 px-5 py-3 responsiveness">
                <h6>DELIVERY/COLLECTION</h6>
                <hr />
                <div className="form-check ordertype">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ordertype"
                    id="ordertype1"
                  />
                  <label className="form-check-label" for="ordertype1">
                    Delivery
                  </label>
                </div>
                <div className="form-check ordertype">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="ordertype"
                    id="ordertype2"
                  />
                  <label className="form-check-label" for="ordertype2">
                    Collection
                  </label>
                </div>
                <h5 className="mt-4 boldtext">Delivery Address</h5>
                <h6 className="mt-3 boldtext">
                  You dont have any address. Please add one
                </h6>
                <button
                  type="button"
                  className="btn btn-primary mt-3 mb-5"
                  data-bs-toggle="modal"
                  data-bs-target="#addressModal"
                >
                  Add New Address
                </button>
                <h5 className="boldtext">Delivery Time</h5>
                <div className="dropup timelist mb-4">
                  <button
                    className="btn btn-light w-100 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Time
                  </button>
                  <ul
                    className="dropdown-menu timelist"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li className="dropdown-item time">4:30PM - 5:00PM</li>
                    <li className="dropdown-item time">5:00PM - 5:30PM</li>
                    <li className="dropdown-item time">5:30PM - 6:00PM</li>
                    <li className="dropdown-item time">6:00PM - 6:30PM</li>
                    <li className="dropdown-item time">6:30PM - 7:00PM</li>
                    <li className="dropdown-item time">7:00PM - 7:30PM</li>
                    <li className="dropdown-item time">7:30PM - 8:00PM</li>
                    <li className="dropdown-item time">8:00PM - 8:30PM</li>
                    <li className="dropdown-item time">8:30PM - 9:00PM</li>
                    <li className="dropdown-item time">9:00PM - 9:30PM</li>
                    <li className="dropdown-item time">9:30PM - 10:00PM</li>
                    <li className="dropdown-item time">10:00PM - 10:30PM</li>
                    <li className="dropdown-item time">10:30PM - 11:00PM</li>
                  </ul>
                </div>
              </div>
              <div className="container bs br mx-2 my-4 px-5 py-3 responsiveness">
                <h6>ORDER ITEMS</h6>
                <hr />
                <h4>You dont have any orders...</h4>
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
                      <div className="col-md-10">
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
                      <div className="col-md-5">
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
                      <div className="col-md-5">
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
                      <div className="col-md-10">
                        <label for="town">Town</label>
                        <input
                          className="form-control my-3 px-2"
                          placeholder="Postal Town"
                          id="town"
                          required
                        />
                        <div className="form-check form-switch my-3">
                          <label
                            className="form-check-label"
                            for="flexSwitchCheckDefault"
                          >
                            Default Address
                          </label>
                          <input
                            className="form-check-input"
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
            <div className="col-md-6">
              <div className="container bs br mx-2 my-4 px-5 py-3 responsiveness">
                <h6>CHECKOUT</h6>
                <hr />
                <h6 className="boldtext">Subtotal: $100</h6>
                <h6 className="boldtext">Delivery: $0.0</h6>
                <h6 className="boldtext">Total: $100</h6>
                <br />
                <br />
                <br />
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Your comments here..."
                ></textarea>
                <div className="form-check mt-3 mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymenttype"
                    id="payment1"
                  />
                  <label className="form-check-label" for="payment1">
                    Cash on Delivery
                  </label>
                </div>
                <div className="form-check mb-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymenttype"
                    id="payment2"
                  />
                  <label className="form-check-label" for="payment2">
                    Pay with Card
                  </label>
                </div>
                <button className="btn btn-primary disabled mb-3">
                  Place Order
                </button>
                <div className="form-check mb-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckIndeterminate"
                  />
                  <label className="form-check-label" for="flexCheckIndeterminate">
                    I agree to the Terms of Service and Privacy Policy.
                  </label>
                </div>
              </div>
              <div className="container bs br mx-2 my-4 px-5 py-3 responsiveness">
                <h6>HAVE A PROMO CODE?</h6>
                <hr />
                <input
                  className="form-control"
                  placeholder="Enter your promo code here"
                />
                <p className="boldtext">
                  Only one promo code must be used per order
                </p>
                <button className="btn btn-primary">Apply</button>
              </div>
            </div>
            <Link to="/"><button className="btn btn-danger w-auto backbutton">Back</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartCheckout;
