import React from "react";

const CountDownTimer = () => {
  return (
    <div className="countdown-section">
      <div className="countdown-wrapper">
        <h1 className="heading">we're launching soon</h1>

        <div className="timer-wrapper">
          <div className="time-box">
            <div className="flip-card">
              <span className="dot left-dot" />
              <span className="dot right-dot" />
              <div className="top" />
              <div className="bottom" />
              <div className="count">14</div>
            </div>
            <span className="time-label">Days</span>
          </div>
          <div className="time-box">
            <div className="flip-card">
              <span className="dot left-dot" />
              <span className="dot right-dot" />
              <div className="top" />
              <div className="bottom" />
              <div className="count">00</div>
            </div>
            <span className="time-label">Hours</span>
          </div>
          <div className="time-box">
            <div className="flip-card">
              <span className="dot left-dot" />
              <span className="dot right-dot" />
              <div className="top" />
              <div className="bottom" />
              <div className="count">00</div>
            </div>
            <span className="time-label">Minutes</span>
          </div>
          <div className="time-box">
            <div className="flip-card">
              <span className="dot left-dot" />
              <span className="dot right-dot" />
              <div className="top" />
              <div className="bottom" />
              <div className="count">00</div>
            </div>
            <span className="time-label">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
