import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Navbar() {

  const [items, setItems] = useState([])
 
 const getstatus= localStorage.getItem('status');
  function logout() {
    localStorage.setItem('status','false');
    localStorage.removeItem('currentuser');
    window.location.href="/";
  }

  async function add(orderID,quantitys) {
    alert(orderID)
    const info = { 
      orderID,
      quantitys,
      customer_Id:JSON.parse(localStorage.getItem('currentuser'))[0].customer_Id }

        try {
            const data =  (await axios.post('http://localhost:5000/api/admin/updatecart', info)).data
            console.log(data.data)
        } catch (error) {
            console.log(error)
        }
  }

  async function remove(orderID,quantitys) {
   
    const info = { 
      orderID,
      quantitys,
      customer_Id:JSON.parse(localStorage.getItem('currentuser'))[0].customer_Id }

        try {
            const data =  (await axios.post('http://localhost:5000/api/admin/updatecart', info)).data
            console.log(data.data)
        } catch (error) {
            console.log(error)
        }
  }

  async function del(orderID){
   
    const info = { 
      orderID
    }

        try {
            const data =  (await axios.post('http://localhost:5000/api/admin/updatecart', info)).data
            console.log(data.data)
        } catch (error) {
            console.log(error)
        }
  }
 
  useEffect(() => {

    if(getstatus==="true")
  {
   const user =JSON.parse(localStorage.getItem('currentuser'))[0].customer_Id;
    async function fetchData() {

      const temp = {
        customer_Id:user
      }
      try {

        const data = (await axios.post("http://localhost:5000/api/admin/getcartitems",temp)).data;
        console.log(data.data)
        setItems(data.data)

      } catch (error) {
        console.log(error);

      }
    }
    fetchData();
  }
  }, []);
  return (
    <>
      <nav className="navbar-light justify-content-center mainnavbar">
        <div className="row menu">
          <div className="col-md-4 menuitems text-start">
            <button
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartOffcanvas"
              aria-controls="cartOffcanvas"
            >
              <i className="fa-solid fa-cart-shopping btnicon"></i>
              Cart
            </button>
          </div>

          <div
            className="offcanvas offcanvas-end shoppingcart"
            tabindex="-1"
            id="cartOffcanvas"
            aria-labelledby="cartOffcanvasLabel"
            data-bs-backdrop="false"
          >
            <div className="offcanvas-header">
              <h2 className="offcanvas-title" id="cartOffcanvasLabel">
                Shopping Cart
              </h2>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="my-5">
                <h6>Your Cart is Empty!</h6>
              </div>
              <div className="cart-cont">
                <p>
                  Order Minimum is $5.00. Please add more items in the cart.
                </p>
              </div>
              {items && items.map((item)=>{
                return <>
              <div className="cart-card">
              <h4>{item.Title}</h4>
              <h6>{item.Quantity} x ${item.Price}</h6>
              <button className="btn" onClick={()=>{add(item.orderitemid,item.Quantity+1)}}>
                <i className="fa-solid fa-plus"></i>
              </button>
              <button className="btn" onClick={()=>{remove(item.orderitemid,item.Quantity-1)}}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <button className="btn" onClick={()=>{del(item.orderitemid)}}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
            </>
              })}

              {/* <div className="cart-card">
                <h4>Item Name</h4>
                <h6>Q x $Price</h6>
                <button className="btn">
                  <i className="fa-solid fa-plus"></i>
                </button>
                <button className="btn">
                  <i className="fa-solid fa-minus"></i>
                </button>
                <button className="btn">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div> */}
              <div className="row my-5">
                <h6>Sub-total: $100</h6>
                <Link to="/cart-checkout">
                <button className="btn btn-primary btn-lg w-100 mt-2">
                  CheckOut
                </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 menuitems text-center">
            <Link to="/">
              <img
                className="menuimg"
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg"
              alt=".." />
            </Link>
          </div>

          <div className="col-md-4 menuitems text-end">
            <Link to="/menu">
              <button className="btn btn-primary">Order Now</button>
            </Link>
            {getstatus==="true" ? (<>
              <div className="dropdown">
              <button
                className="btn btn-light dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-user"></i>
              </button>
              <ul className="dropdown-menu userddmenu" aria-labelledby="dropdownMenuButton1">
              <li className="dropdown-item"><p className="dropdown-item text-center userdditem boldtext">
                {JSON.parse(localStorage.getItem('currentuser'))[0].name}
                </p></li>
              <li><hr class="dropdown-divider"/></li>
                <li>
                  <Link to="/profile">
                    <button className="btn btn-light userdditem dropdown-item">My Profile</button>
                  </Link>
                </li>
                <li>
                <Link to="/orders">
                    <button className="btn btn-light userdditem dropdown-item">My Orders</button>
                  </Link>
                </li>
                <li>
                <Link to="/addresses">
                    <button className="btn btn-light userdditem dropdown-item">My Addresses</button>
                  </Link>
                  <Link to="/change-password">
                    <button className="btn btn-light userdditem dropdown-item">Password</button>
                  </Link>
                </li>
                <li><hr class="dropdown-divider"/></li>
                <Link to="/login">
                    <button className="btn btn-light userdditem dropdown-item" onClick={logout} >LOG OUT</button>
                  </Link>
              </ul>
              </div>
            </>):(<>
              <Link to="/login">
              <button className="btn btn-light">
                <i className="fa-solid fa-user btnicon"></i>Sign in
              </button>
            </Link>
            </>)}
            </div>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
