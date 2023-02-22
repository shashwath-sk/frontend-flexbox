import React from "react";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";

import "./pageNotFound.css";

const PageNotFound: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="pageNotFoundContainer">
        <p>404 Error. Page not found</p>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;