import React from "react";
import { Link } from "react-router-dom";
import "../Css/RegisterPage.css";
function RegisterPage() {
  return (
    <>
      <div className="scrolling-disable">
        <div className="row justify-content-center">
          <div className="col-md-4 text-center mt-2 responsiveness">
          <Link to="/">
              <img
                className="menuimg"
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg"
              />
            </Link>
            <h3 className="boldtext my-3">SIGN UP</h3>
            <form action="/" method="get">
              <div className="my-5 ms-5 me-2 text-start centeredRegItems">
                <label for="namee">Name</label>
                <input
                  id="namee"
                  className="form-control mb-4"
                  placeholder="Name"
                  required
                />
                <label for="emailad">Email Address</label>
                <input
                  id="emailad"
                  className="form-control mb-4"
                  placeholder="Email"
                  required
                />
                <label for="phoneno">Phone</label>
                <input
                  id="phoneno"
                  className="form-control mb-4"
                  placeholder="Phone"
                  required
                />
                <label for="password">Password</label>
                <input
                  id="password"
                  className="form-control mb-4"
                  placeholder="Password"
                  required
                />
                <label for="cpassword">Confirm Password</label>
                <input
                  id="cpassword"
                  className="form-control mb-4"
                  placeholder="Confirm Password"
                  required
                />
                <div className="disablediv">
                  <iframe
                    title="reCAPTCHA"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LdO4hceAAAAAKUC0dEVBc05Whup7eljef2r2Pno&amp;co=aHR0cHM6Ly93d3cuaGFwcHlzcGl6emFidXJnZXIuY28udWs6NDQz&amp;hl=en-GB&amp;v=mq0-U1BHZ5YTcoDC-CvsLPNc&amp;theme=light&amp;size=normal&amp;cb=3dyygsvgyiom"
                    width="304"
                    height="78"
                    role="presentation"
                    name="a-yjjttnpaq2gk"
                    frameborder="0"
                    scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                  ></iframe>
                </div>
              </div>

              <div className="mb-5">
                <button
                  className="btn btn-primary registerbtn"
                  type="submit"
                  formmethod="post"
                >
                  SIGN IN
                </button>
                <button className="btn btn-light registerbtn">
                  <i class="fa-brands fa-google"></i> GOOGLE
                </button>
                <button className="btn btn-light registerbtn">
                  <i class="fa-brands fa-square-facebook"></i> FACEBOOK
                </button>
              </div>
            </form>

            <p className="mb-5">
              Already have an account yet? <Link to="/login">Login</Link>
            </p>
          </div>
          <div className="col-md-8 disablediv responsiveness">
            <img
              className="registerimg"
              src="https://goldenfrysedgley.co.uk/admin2/img/photos/bg1.webp"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
