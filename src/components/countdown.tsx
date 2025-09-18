'use client';

import { useState, useEffect } from 'react';

export function Countdown() {
  const calculateTimeLeft = () => {
    // Set a fixed future date for the countdown
    const difference = +new Date('2024-12-31T23:59:59') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});
  
  useEffect(() => {
    // Set initial value on client-side only
    setTimeLeft(calculateTimeLeft());
    
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval] && timeLeft[interval] !== 0) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <span className="text-4xl md:text-5xl font-bold text-accent">
          {String(timeLeft[interval]).padStart(2, '0')}
        </span>
        <span className="text-xs uppercase text-foreground/60">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex justify-center gap-4 sm:gap-8 my-6">
      {timerComponents.length ? timerComponents : <span>Promoção encerrada!</span>}
    </div>
  );
}
