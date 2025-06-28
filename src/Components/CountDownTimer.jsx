import React, { useEffect, useState } from "react";
import { timeUnits } from "../utils/config";
import { startCountdown } from "../utils/helpers";

const CountDownTimer = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = startCountdown(setRemainingTime, {
      days: 0,
      hours: 0,
      minutes: 1,
      seconds: 10,
    });
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-section">
      <div className="countdown-wrapper">
        <h1 className="heading">we're launching soon</h1>

        <div className="timer-wrapper">
          {timeUnits.map((item) => (
            <div className="time-box" key={item?.id}>
              <div className="flip-card">
                <span className="dot left-dot" />
                <span className="dot right-dot" />
                <div className="top" />
                <div className="bottom" />
                <div className="count">{remainingTime[item.id]}</div>
              </div>
              <span className="time-label">{item?.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
