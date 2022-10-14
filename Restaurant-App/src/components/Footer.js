import React from "react";
import "../Css/Footer.css";
function Footer() {
  return (
    <>
      <div className="row footer justify-content-center responsiveness">
        <div className="col-md-3 text-center">
          <h4 className="boldtext">Information</h4>
          <a href="/privacy-policy">Privacy Policy</a>
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
          <br />
        </div>
        <div className="col-md-3 text-center">
          <h4 className="boldtext">Contact Us</h4>
          <a href="/">
            <i className="fa-solid fa-phone"></i> 01724 487373
          </a>
          <br />
          <br />
          <a href="/">
            <i className="fa-solid fa-location-pin"></i> 11 Wendover Rd,
            Messingham, Scunthorpe DN17 3SN
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
            style={{width: '70%'}}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;