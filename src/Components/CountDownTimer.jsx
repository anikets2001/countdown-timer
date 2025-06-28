import React, { useEffect, useState } from "react";
import { timeUnits } from "../utils/config";

const CountDownTimer = () => {
  const [remainingTime, setRemainingTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  function formatTime(num) {
    return num < 10 ? "0" + num : num;
  }

  function getRemainingTime(initialDate) {
    const now = new Date();
    const timeDiff = initialDate - now;

    const totalSeconds = Math.floor(timeDiff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const days = formatTime(Math.floor(totalHours / 24));
    const hours = formatTime(totalHours % 24);
    const minutes = formatTime(totalMinutes % 60);
    const seconds = formatTime(totalSeconds % 60);

    return { days, hours, minutes, seconds, isComplete: timeDiff <= 0 };
  }

  function startCountdown(setTimeLeft) {
    const initialDate = new Date();
    initialDate.setDate(initialDate.getDate() + 14);

    const timerID = setInterval(() => {
      const result = getRemainingTime(initialDate);

      if (result.isComplete) {
        alert("time's up");
        clearInterval(timerID);

        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      setTimeLeft({
        days: result.days,
        hours: result.hours,
        minutes: result.minutes,
        seconds: result.seconds,
      });
    }, 1000);

    return timerID;
  }

  useEffect(() => {
    const interval = startCountdown(setRemainingTime);
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
