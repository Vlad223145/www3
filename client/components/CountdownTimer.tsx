import React, { useState, useEffect, memo } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = memo(() => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center pt-6">
      <p className="text-white/80 text-lg mb-4">Free Sample Program Ends In:</p>
      <div className="flex justify-center gap-4">
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold text-white">
            {timeLeft.days.toString().padStart(2, "0")}
          </div>
          <div className="text-white/70 text-sm">DAYS</div>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold text-white">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div className="text-white/70 text-sm">HOURS</div>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold text-white">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-white/70 text-sm">MINUTES</div>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-lg p-4 min-w-[80px]">
          <div className="text-3xl font-bold text-white">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-white/70 text-sm">SECONDS</div>
        </div>
      </div>
    </div>
  );
});

CountdownTimer.displayName = "CountdownTimer";

export default CountdownTimer;
