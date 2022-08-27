import React from "react";
import { Link } from "react-router-dom";
import "../Css/Signin.css";

function SigninPage() {
  return (
    <>
      <div className="scrolling-off">
        <div className="row justify-content-center">
          <div className="col-md-4 text-center mt-2 responsiveness">
          <Link to="/">
              <img
                className="menuimg"
                src="https://www.happyspizzaburger.co.uk/uploads/restorants/198031cc-1875-4d54-8945-8135a96f353a_large.jpg"
              />
            </Link>
            <h3 className="boldtext my-3">WELCOME BACK</h3>
            <form action="/" method="get">
              <div className="my-5 ms-5 me-2 text-start centeredItems">
                <label for="emailad">Email Address</label>
                <input
                  id="emailad"
                  className="form-control mb-4"
                  placeholder="Email"
                  required
                />
                <label for="password">Password</label>
                <input
                  id="password"
                  className="form-control mb-4"
                  placeholder="Password"
                  required
                />
                <div class="form-check mt-5">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="checkbox"
                  />
                  <label class="form-check-label" for="checkbox">
                    Remember Me
                  </label>
                </div>
              </div>

              <div className="mb-5">
                <button
                  className="btn btn-primary signinbtn"
                  type="submit"
                  formmethod="post"
                >
                  SIGN IN
                </button>
                <button className="btn btn-light signinbtn">
                  <i class="fa-brands fa-google"></i> GOOGLE
                </button>
                <button className="btn btn-light signinbtn">
                  <i class="fa-brands fa-square-facebook"></i> FACEBOOK
                </button>
              </div>
            </form>

            <p className="my-5">
              Do you have an account yet? <Link to="/register">Register</Link>
            </p>
          </div>
          <div className="col-md-8 responsiveness">
            <img
              className="signinimg"
              src="https://goldenfrysedgley.co.uk/admin2/img/photos/bg1.webp"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SigninPage;
