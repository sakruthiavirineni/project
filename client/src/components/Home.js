import React from "react";
import Navbar from "./Navbar";
import Hoverbar from "./Hoverbar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import EtsyBody from "./EtsyBody";
import AboutFooter from "./AboutFooter";
import FooterBanner from "./FooterBanner";
import ProductsInHome from "./ProductsInHome";
import HomeImages from "./HomeImages";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hoverbar />
      <Dashboard />
      <EtsyBody />
      <ProductsInHome/>
      <HomeImages/>
      <AboutFooter />

      <Footer />
      <FooterBanner />
    </div>
  );
};

export default Home;
