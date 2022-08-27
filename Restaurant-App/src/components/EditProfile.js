import React from "react";
import Navbar from "./Navbar";
import {Link} from "react-router-dom"

function EditProfile() {
  return (
    <>
      <Navbar />
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="row profilecard">
            <div className="col-md-12 text-center">
            <h1>Edit Profile</h1>
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
              <button className="btn btn-light"><Link to="/profile"><i class="fa-solid fa-pen-to-square"></i> Save</Link></button>
              <hr />
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
