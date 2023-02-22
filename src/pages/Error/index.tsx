import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/header/Header";
import Footer from "../../Components/footer/Footer";
import "./error.css";

const Error: React.FC = () => {
  const { errorCode } = useParams();
  return (
    <div>
      <Header />
      <div className="errorContainer">
        <p>Something went wrong!</p>
        {errorCode && <p>{`Error code: ${errorCode}`}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Error;