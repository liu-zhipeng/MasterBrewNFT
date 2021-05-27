import React, { useState, useEffect } from "react"
import './Timer.scss'

const calculateTimeLeft = () => {

  let year = new Date().getFullYear();
  const difference = +new Date(`5/27/${year} 12:00:00`) - +new Date();
  
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

export default function Timer(props) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer=setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <div className="timer-box-container global-timer">
      <div className={`font-34 text-white text-center font-semibold uppercase tracking-wide line-height-large text-shadow-secondary ${props.visibleTitle ? 'block' : 'hidden'}`}>
        NFT 2.0 Pre-Sale Begins In
      </div>
      <div className="flex items-center justify-center font-alarm text-5xl sm:text-8xl lg:text-9xl text-primary mt-4 text-shadow-primary">
        <span className={`timer-box days ${props.color}`}>{timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}</span>:
        <span className={`timer-box hours ${props.color}`}>{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}</span>:
        <span className={`timer-box minutes ${props.color}`}>{timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}</span>:
        <span className={`timer-box seconds ${props.color}`}>{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
      </div>
    </div>
  )
}