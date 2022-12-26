import React, { useState, useEffect } from "react";
import axios from "axios"
import "../Css/Footer.css";
function Footer() {
  const [phone, setphone] = useState([])
  const [address, setaddress] = useState([])
  const [pages, setpages] = useState([])

  useEffect(() => {
    async function fetchData() {
      const detail = {
        ID: JSON.parse(localStorage.getItem("currentuser"))[0].resturant_ID
      }
      try {
        const data = (
          await axios.post(
            "https://apinodejs.creativeparkingsolutions.com/api/admin/phoneandaddress",
            detail
          )
        ).data;

        const result = (
          await axios.post(
            "https://apinodejs.creativeparkingsolutions.com/api/admin/getallpages",
            detail
          )
        ).data;


        setpages(result.data)
        setphone(data.data[0]['phone'])
        setaddress(data.data[0]['address'])

      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="row footer justify-content-center responsiveness">
        <div className="col-md-3 text-center">
          {pages.length > 0 && <>
            <h4 className="boldtext">Information</h4>
            {pages.map((info) => {
              return <>
                <a href={`/privacy-policy/${info.ID}`}>{info.title}</a>
                <br />
                <br />
              </>
            })}
          </>}

          {/* <a href="/privacy-policy">Privacy Policy</a>
          <br />
          <br />
          <a href="/term-of-use">Terms of Use</a>
          <br />
          <br />
          <a href="/terms-and-conditions">Terms & Conditions</a>
          <br />
          <br />
          <a href="/allergy-information">Allergy Information</a>
          <br />
          <br /> */}
        </div>
        <div className="col-md-3 text-center">
          <h4 className="boldtext">Contact Us</h4>
          <a href="/">
            <i className="fa-solid fa-phone"></i> {phone}
          </a>
          <br />
          <br />
          <a href="/">
            <i className="fa-solid fa-location-pin"></i> {address}
          </a>
          <br />
          <br />
        </div>
        <div className="col-md-3 text-center">
          <h4 className="boldtext">Get in Touch</h4>
          <p>Stay updated about our news,promotions and new offers</p>
          <input
            className="form-control input-responsive"
            type="email"
            placeholder="Enter email address"
          />
          <button className="btn btn-primary btn-responsive">Subscribe</button>
          <br />
          <br />
        </div>
        <div className="col-md-3 text-center mt-5">
          <img
            className="footerimg"
            src="https://happyspizzaburger.co.uk/assets/img/cards.png"
            alt=".."
            style={{ width: '70%' }}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;