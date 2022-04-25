import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";
import Register from "./register";
import CloseLogin from "./closeLogin";
import { useHistory } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import cookie from "react-cookies";
import { useDispatch } from "react-redux";
import { login, activeUser, activeShop } from "../features/userSlice";

function Signin({ setshowSignIn }) {
  // const history = useHistory();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const [loginStatus, setLoginStatus] = useState(null);

  const dispatch = useDispatch();

  const handleRegister = () => {
    setShowRegister(true);
  };

  Axios.defaults.withCredentials = true;

  const checkUser = (e) => {
    e.preventDefault();

    Axios.post("/signin", {
      email: email,
      password: password,
    })
      .then((response) => {
        if (response.data.length === 1) {
          console.log(response);
          console.log(response.data[0]);
          console.log("In frontend signin");

          dispatch(
            login({
              id: response.data[0].id,
              email: response.data[0].email,
              name: response.data[0].name,
              shopName: response.data[0].shopName,
              dob: response.data[0].dob,
              gender: response.data[0].gender,
              city: response.data[0].city,
              phoneNumber: response.data[0].phoneNumber,
              profilePic: response.data[0].profilePic,
              about: response.data[0].about,
              shopImage: response.data[0].shopImage,
              loggedIn: true,
            })
          );

          window.location.pathname = "/home";
        } else {
          setError("Invalid Credentials!");
        }
      })
      .catch((err) => {
        setError("Invalid credentials");
      });
  };

  useEffect(() => {
    Axios.get("/signin").then((response) => {
      // console.log(response);

      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0]);
        console.log(loginStatus);
        console.log("++++++++++ cookie ++++++++++++" + cookie.load("user"));
      }
    });
  }, []);

  // let redirVal = null;
  // if (loginStatus) {
  //   console.log(loginStatus);
  //   redirVal = <Navigate to="/home" />;
  //   setLoginStatus(null);
  // }

  return (
    <>
      {/* {redirVal} */}
      <div className="bg-modal">
        <div className="modal-content">
          <CloseLogin setshowSignIn={setshowSignIn} />

          <div className="signin_heading">
            <h4>Sign in</h4>
            <button
              onClick={handleRegister}
              className="register-btn btn-primary"
            >
              Register
            </button>
          </div>
          <form className="signin_form">
            <span style={{ color: "red" }}>{error}</span>

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
            <div className="forgot_password">
              <p className="password_forgot">Forgot your password?</p>
            </div>
            <button
              onClick={checkUser}
              type="submit"
              className="btn btn-primary"
            >
              Sign In
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
        {showRegister === true && (
          <Register setShowRegister={setShowRegister} />
        )}
      </div>
    </>
  );
}

export default Signin;
