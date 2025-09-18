'use client';

import { useState, useEffect } from 'react';

// Helper function to calculate time left
const calculateTimeLeft = () => {
    // This is a fixed date in the future for demo purposes.
    // In a real application, you would get this from a server.
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


export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{ [key: string]: number }>({});
  
  // This effect runs only on the client, after the initial render.
  // This prevents hydration mismatch errors between server and client.
  useEffect(() => {
    // Set initial value
    setTimeLeft(calculateTimeLeft());

    // Update the countdown every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array ensures this runs only once on mount

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    // Ensure the value is a number before proceeding
    if (typeof timeLeft[interval] !== 'number') {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center">
        <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-accent">
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
