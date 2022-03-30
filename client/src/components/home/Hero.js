import React from "react";
import "./styles/hero.scss";
import image from "../../images/done-deal.jpg";

const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="mainDiv container">
        <div className="imgDiv">
          <img src={image} alt="imag" />
        </div>
        <div className="textDiv">
          <h2 className="text-center">
            Thousands of business owners connect with investors & advisors on
            BIZDUKA to franchise or sell their business
          </h2>
        </div>
      </div>
      <div className="bottomDiv row container">
        <div className="col-sm-4">
          <p>Selling your business or seeking funds?</p>
          <button className="btn btn-primary">Create Business Profile</button>
        </div>
        <div className="col-sm-4">
          <h1>Get Started</h1>
          <p>Looking to franchise or grow your brand?</p>
          <button className="btn btn-warning">Create Franchise Profile</button>
        </div>
        <div className="col-sm-4">
          <p>Are you an Investor, Buyer, Advisor or Lender?</p>
          <button className="btn btn-info">Create Member Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
