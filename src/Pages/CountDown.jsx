import React from "react";
import CountDownTimer from "../Components/CountDownTimer";
import Footer from "../Components/Footer";

const CountDown = () => {
  return (
    <div className="countdown-page-wrapper">
      <CountDownTimer />
      <Footer />
    </div>
  );
};

export default CountDown;
