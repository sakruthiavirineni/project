import React, { useState } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { login, registerUser, activeShop } from "../features/userSlice";

function register({ setShowRegister }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const addUser = (e) => {
    e.preventDefault();
    // localStorage.Item("preferedCurrency", userPreferedCurrency);
    Axios.post("/register", {
      email: email,
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.success === true) {
        console.log("Success========: " + response.data.success);

        dispatch(
          registerUser({
            username: username,
            email: email,
          })
        );
        console.log("In frontend register");

        window.location.pathname = "/home";
      }
    });
  };

  return (
    <>
      <div className="bg-modal">
        <div className="modal-content">
          <div
            style={{
              marginTop: "30px",
              marginLeft: "20px",
              fontFamily: "Tahoma",
            }}
          >
            <h4>Create your Account</h4>
          </div>
          <form className="signin_form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                type="email"
                className="email"
                id="email"
                placeholder="Enter email"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <br />
              <input
                type="text"
                className="username"
                id="username"
                placeholder="Enter username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                required
              />
            </div>

            <div className="htmlForm-group">
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                className="password"
                id="password"
                placeholder="Password"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                required
              />
            </div>
            <div className="forgot_password"></div>
            <button onClick={addUser} type="submit" className="btn btn-primary">
              Register
            </button>
            <div class="or-container">
              <div class="line-separator"></div>
              <div class="or-label">or</div>
              <div class="line-separator"></div>
            </div>
            <div class="row">
              <div class="col-md-12"> <a class="btn btn-lg btn-google btn-outline btn-primary" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" /> Sign up Using Google</a> </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default register;
