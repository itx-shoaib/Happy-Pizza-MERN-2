import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../Css/HomePage.css"
import Navbar from "./Navbar";

function Homepage() {
  return (
    <>
    <div className="hidescroll">
    <Navbar/>
      <div className="container-fluid">
        <div
          className="carousel carousel-dark carousel-fade slide carouseladjust"
          data-bs-ride="carousel"
          id="carousel"
        >
          <div className="carousel-indicators indicatorcont">
            <button
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to="0"
              className="active indicatorbtn"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              className="indicatorbtn"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              className="indicatorbtn"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              className="indicatorbtn"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carousel"
              className="indicatorbtn"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div
              className="carousel-item carouselcont active"
            >
              <img
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/751msq61654252482.jpg"
                className="d-block w-100 img-responsive"
              />
              <div className="bottom-left">
                <h1 className="boldtext bigtext text-responsive">We keep it</h1>
                <h1 className="boldtext bigtext text-responsive">Simple, Fresh and Real</h1>
                <h4 className="text-responsive">Now Order All Favourite Food Online</h4>
              </div>
            </div>
            <div className="carousel-item carouselcont">
              <img
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/594gYqJ1654252482.jpg"
                className="d-block w-100 img-responsive"
              />
              <div className="bottom-left">
                <h1 className="boldtext bigtext text-responsive">We keep it</h1>
                <h1 className="boldtext bigtext text-responsive">Simple, Fresh and Real</h1>
                <h4 className="text-responsive">Now Order All Favourite Food Online</h4>
              </div>
            </div>
            <div className="carousel-item carouselcont">
              <img
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/783y5fE1654253475.jpg"
                className="d-block w-100 img-responsive"
              />
              <div className="bottom-left">
                <h1 className="boldtext bigtext text-responsive">We keep it</h1>
                <h1 className="boldtext bigtext text-responsive">Simple, Fresh and Real</h1>
                <h4 className="text-responsive">Now Order All Favourite Food Online</h4>
              </div>
            </div>
            <div className="carousel-item carouselcont">
              <img
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/651OLZN1654253108.jpg"
                className="d-block w-100 img-responsive"
              />
              <div className="bottom-left">
                <h1 className="boldtext bigtext text-responsive">We keep it</h1>
                <h1 className="boldtext bigtext text-responsive">Simple, Fresh and Real</h1>
                <h4 className="text-responsive">Now Order All Favourite Food Online</h4>
              </div>
            </div>
            <div className="carousel-item carouselcont">
              <img
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/5788hSk1654252482.jpg"
                className="d-block w-100 img-responsive"
              />
              <div className="bottom-left">
                <h1 className="boldtext bigtext text-responsive">We keep it</h1>
                <h1 className="boldtext bigtext text-responsive">Simple, Fresh and Real</h1>
                <h4 className="text-responsive">Now Order All Favourite Food Online</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-11 text-center">
          <div className="bs">
            <div className="row">
              <div className="col-md-12">
                <Link to="/menu"><button className="btn btn-primary homebtn">Order Now</button></Link>
              </div>
            </div>

            <div className="row bs gx-0">
              <div className="col-md-4 homecards br">
                <img
                  className="homefoodimg"
                  src="https://www.happyspizzaburger.co.uk/uploads/restorants/327JGSU1654251343.jpg"
                />
                <h2>Easy to Order.</h2>
                <p>
                  You can now order online, all your favourite dishes and many
                  more delicious options, and have them delivered straight to
                  your door in no time at all
                </p>
              </div>
              <div className="col-md-4 homecards br">
                <img
                  className="homefoodimg"
                  src="https://www.happyspizzaburger.co.uk/uploads/restorants/622lz5v1654251343.jpg"
                />
                <h2>Quality Food</h2>
                <p>
                  Order food online! It's so easy to use, fast and convenient.
                  Try our new, online website which contains our entire takeaway
                  menu.
                </p>
              </div>
              <div className="col-md-4 homecards">
                <img
                  className="homefoodimg"
                  src="https://www.happyspizzaburger.co.uk/uploads/restorants/3SNaw1654251433.jpg"
                />
                <h2>Thank You</h2>
                <p>
                  Thank you for visiting our Website. Happy Pizza & Burger is
                  operated by DIL-ZER Ltd. We hope you enjoy our online ordering
                  website and your food.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid textonimg">
        <img
          className="blockimg"
          src="https://www.happyspizzaburger.co.uk/uploads/restorants/751msq61654252482.jpg"
        />
        <div className="centered">
          <h1 className="boldtext goldclr textresponsive">FRESH & QUALITY FOOD</h1>
          <h4 className="boldtext desctextresponsive">
          Quality in Food ensures that we get the freshest of ingredients and produce every single day for all of our taste dishes. All orders are prepared fresh at the time the order is placed. The food is specially packed to keep its freshness and taste intact until arrival. Quality in Service entails our prompt order receipt, total understanding of our own menus to help you choose, exact knowledge of our offers and their availability and more so, flexibility in helping you complete the perfect meal.
          </h4>
          <Link to="/menu"><button className="btn btn-primary homebtnsm">Order Now</button></Link>
        </div>
      </div>

      <div className="row my-5">
        <div className="col-md-12 text-center">
          <h1 className="boldtext">Why Us?</h1>
          <h5 className="text-responsive whyus">
          We are pleased to offer good quality and quantity at affordable prices. Only the freshest and best quality ingredients are used in the preparation of our food items. In addition, hygiene is an important factor of quality food delivery and is taken very seriously at Mighty Pizza. Periodic fumigation and strict vigil on kitchen staff on hygiene issues helps ensure that our valued customers not only receive tasty food, but that it is also hygienic and healthful.
          </h5>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-5 text-center mx-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13611.200265534018!2d74.3023612!3d31.4746856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd90d41edbbe08d45!2sINNOVATION.TECH!5e0!3m2!1sen!2s!4v1660646556492!5m2!1sen!2s"
            width="600"
            height="550"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-md-5 bs mx-5 px-5 py-5">
          <h1 className="boldtext">Contact Us</h1>
          <h3 className="boldtext">Let's get in touch</h3>
          <input className="form-control" type="text" placeholder="Name" />
          <input className="form-control" type="email" placeholder="Email" />
          <input className="form-control" type="text" placeholder="Subject" />
          <textarea className="form-control" rows="5" placeholder="Message" />
          <button className="btn btn-lg btn-danger">Send Message</button>
        </div>
      </div>
      <Footer/>
      </div>
    </>
  );
}

export default Homepage;
