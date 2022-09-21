import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../Css/order.css";

function Orders() {
  const [order, setOrder] = useState([]);
  const getstatus = localStorage.getItem("status");

  useEffect(() => {
    async function fetchData() {
      const user = {
        customer_Id: JSON.parse(localStorage.getItem("currentuser"))[0]
          .customer_Id,
      };
      try {
        const data = await (
          await axios.post(
            "http://localhost:5000/api/admin/getcart",
            user
          )
        ).data;
        setOrder(data.data);
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
                      <i className="fa-solid fa-user"></i>
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
                      <i className="fa-solid fa-chart-line"></i>
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
                    <div
                      className="accordion my-2 mx-4 bs responsiveness"
                      id="accordionExample"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button boldtext"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            FILTER
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body text-start my-3">
                            <label
                              for="daterange"
                              className="me-1 my-1 boldtext"
                            >
                              Date Range
                            </label>
                            <input
                              id="daterange"
                              className="me-1 my-1 py-1"
                              placeholder="Start Date"
                            />
                            <input
                              id="daterange"
                              className="me-1 my-1 py-1"
                              placeholder="End Date"
                            />
                            <label
                              for="customerfilter"
                              className="boldtext my-1 ms-2"
                            >
                              Filter by Customer:
                            </label>
                            <input
                              id="customerfilter"
                              className="mx-1 my-1 py-1"
                              placeholder="Select an option"
                            />
                            <button className="btn btn-primary my-1 mx-1">
                              Export
                            </button>
                            <button className="btn btn-primary my-1 mx-1">
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
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
                    {order.length > 0 ? (
                      <>
                        <div className="table-responsive-sm">
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Created</th>
                                <th scope="col">Method</th>
                                <th scope="col">Last status</th>
                                <th scope="col">Payment status</th>
                                <th scope="col">Total</th>
                              </tr>
                            </thead>
                            <tbody class="table-group-divider">
                              {order.map((orders) => {
                                return (
                                  <>
                                    <tr>
                                      <td>
                                        <span class="badge text-bg-info info">
                                          {orders.ID}
                                        </span>
                                      </td>
                                      <td>{orders.DateTime}</td>
                                      <td>
                                        <span class="badge text-bg-primary primary">
                                          collection
                                        </span>
                                      </td>
                                      <td>
                                        <span class="badge text-bg-info info">
                                          {orders.Orderstatus === "1" ? (
                                            <>Pending</>
                                          ) : orders.Orderstatus === "2" ? (
                                            <>In Process</>
                                          ) : orders.Orderstatus === "3" ? (
                                            <>Completed</>
                                          ) : (
                                            <>Rejected</>
                                          )}
                                        </span>
                                      </td>
                                      <td>
                                        <span class="badge text-bg-primary primary">
                                          cod(unpaid)
                                        </span>
                                      </td>
                                      <td>${orders.Price}</td>
                                    </tr>
                                  </>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </>
                    ) : order ? (
                      <>
                        <div className="table-responsive-sm">
                          <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Created</th>
                                <th scope="col">Method</th>
                                <th scope="col">Last status</th>
                                <th scope="col">Payment status</th>
                                <th scope="col">Total</th>
                              </tr>
                            </thead>
                            <tbody class="table-group-divider">
                              <tr>
                                <td>
                                  <span class="badge text-bg-info info">
                                    {order.ID}
                                  </span>
                                </td>
                                <td>{order.DateTime}</td>
                                <td>
                                  <span class="badge text-bg-primary primary">
                                    collection
                                  </span>
                                </td>
                                <td>
                                  <span class="badge text-bg-info info">
                                    rejected
                                  </span>
                                </td>
                                <td>
                                  <span class="badge text-bg-primary primary">
                                    cod(unpaid)
                                  </span>
                                </td>
                                <td>${order.Price}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </>
                    ) : (
                      <>
                        <h4>You dont have any orders...</h4>
                      </>
                    )}
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
