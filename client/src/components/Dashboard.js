import React from "react";
import cookie from "react-cookies";
import styled from "styled-components";

function Dashboard() {
  return (
    <div>
    <div className="dash_board">
      <h1 className="heading1">Explore one-of-a-kind finds from independent markers</h1>
      <h1 className="title">Welcome to Etsy, {cookie.load("user")}!</h1>
      <div className="dashboard_items">
        <div className="dashboard_item">
          <img
            src="https://i.etsystatic.com/12397853/r/il/505fa0/2426681051/il_1588xN.2426681051_mocv.jpg"
            alt="home"
          ></img>
          <h3 style={{ fontSize: "20px", fontWeight:"normal", marginLeft:65 }}>Wall Decor</h3>
        </div>
        <div className="dashboard_item">
          <img
            src="https://i.etsystatic.com/29669210/r/il/48a8a1/3619807266/il_1588xN.3619807266_4hg4.jpg"
            alt="home"
          ></img>
          <h3 style={{ fontSize: "20px", fontWeight:"normal", marginLeft:45 }}>Outdoor & Garden</h3>
        </div>
        <div className="dashboard_item">
          <img
            src="https://i.etsystatic.com/8928370/r/il/f32f25/3376320499/il_1588xN.3376320499_7sqq.jpg"
            alt="home"
          ></img>
          <h3 style={{ fontSize: "20px", fontWeight:"normal", marginLeft:50}}>
            Kitchen & Dining
          </h3>
        </div>
        <div className="dashboard_item">
          <img
            src="https://i.etsystatic.com/5395361/r/il/5bb896/3641190222/il_1588xN.3641190222_fydq.jpg"
            alt="home"
          ></img>
          <h3 style={{ fontSize: "20px", fontWeight:"normal", marginLeft:65}}>Necklaces</h3>
        </div>
        <div className="dashboard_item">
          <img
            src="https://i.etsystatic.com/10115319/r/il/b2ab7a/3171926331/il_1588xN.3171926331_p6i7.jpg"
            alt="home"
          ></img>
          <h3 style={{ fontSize: "20px", fontWeight:"normal", marginLeft:55 }}>
            Wedding Decor
          </h3>
        </div>
        <div className="dashboard_item">
          <img
            src="https://i.etsystatic.com/10448437/r/il/8d7c57/1985247369/il_1588xN.1985247369_d33t.jpg"
            alt="home"
          ></img>
          <h3 style={{ fontSize: "20px", fontWeight:"normal", marginLeft:75}}>
            On Sale
          </h3>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Dashboard;
