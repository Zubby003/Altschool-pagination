import React from "react";
import OnBoarding from "../assets/onboarding-2.gif";

function Home() {
  return (
    <>
      <div className="home-page">
        <h1>Welcome </h1>
      </div>
      <div className="home-page">
        <img src={OnBoarding} />
      </div>
    </>
  );
}

export default Home;
