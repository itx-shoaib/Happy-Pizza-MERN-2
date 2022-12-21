import React from 'react'
import { Link } from "react-router-dom";
import "../Css/NoOrder.css"
import logo from '../image/NoOrders.png'

const NoOrder = () => {
    return (
        <div className="container1">
            <div className="form-box1">
                <div className="imgdiv">
                    <img className='orderImg' src={logo} alt="Logo" />
                </div>
                <h5 className="h5 text-center">NO ORDER FOUND</h5>
                <h3 className='h3' >Looks like you haven't made your order yet</h3>
                {/* <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i> */}
                <Link to="/menu"><button type="button" className="btn button btn-primary btn-block center">Order Now</button></Link>
                {/* <div className="social">
                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter-square"></i></a>
                        <a href="#"><i className="fab fa-google"></i></a>
                    </div> */}
            </div>
        </div>
    )
}

export default NoOrder