import React from "react";
import "./ProductsInHome.css";
import favouriteLogo from "./favourite.png";

function ProductsInHome() {
  return (
    <div className="content-area">
      <h4 className="title-text">Our Products</h4>
      <div className="recently-viewed">
        <div className="viewed-card">
            {/* <div className="bottom_left">USD 34.99</div> */}
          <img
            src={
              "https://cdn.pixabay.com/photo/2017/08/01/22/19/white-2568288_1280.jpg"
            }
            alt={""}
          />
          <div className="bottom_left">USD 34.99</div>
        </div>
        <div class="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2020/07/27/08/07/spa-5441663_1280.jpg"
            }
            alt={""}
          />
          <div>USD 29.50</div>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2015/05/25/14/27/summer-783344_1280.jpg"
            }
            alt={""}
          />
          <div>USD 48.00</div>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2015/12/03/00/04/snowman-1073524_1280.jpg"
            }
            alt={""}
          />
          <div>USD 116.00</div>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2017/09/15/12/10/mockup-2752023_1280.jpg"
            }
            alt={""}
          />

          <div className="row">
            <div >USD 65</div>
          </div>

        </div>
      </div>

      <div className="feltedsky">
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2017/08/01/22/19/white-2568288_1280.jpg"
            }
            alt={""}
          />
          <div className="bottom_left">USD 34.99</div>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2020/07/27/08/07/spa-5441663_1280.jpg"
            }
            alt={""}
          />
          <div className="bottom_left">USD 29.50</div>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2015/05/25/14/27/summer-783344_1280.jpg"
            }
            alt={""}
          />
          <div className="bottom_left">USD 48.00</div>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2015/12/03/00/04/snowman-1073524_1280.jpg"
            }
            alt={""}
          />
          <div className="bottom_left">USD 116.00</div>
        </div>
        <div className="viewed-card">
          <img
            src={
              "https://cdn.pixabay.com/photo/2017/09/15/12/10/mockup-2752023_1280.jpg"
            }
            alt={""}
          />
          <div className="bottom_left">USD 165.00</div>
        </div>
      </div>
    </div>
  );
}
export default ProductsInHome;
