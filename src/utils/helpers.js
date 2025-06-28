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

export function startCountdown(
  setTimeLeft,
  duration = { days: 10, hours: 0, minutes: 0, seconds: 0 }
) {
  const initialDate = new Date();
  if (duration.days) initialDate.setDate(initialDate.getDate() + duration.days);
  if (duration.hours)
    initialDate.setHours(initialDate.getHours() + duration.hours);
  if (duration.minutes)
    initialDate.setMinutes(initialDate.getMinutes() + duration.minutes);
  if (duration.seconds)
    initialDate.setSeconds(initialDate.getSeconds() + duration.seconds);

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
