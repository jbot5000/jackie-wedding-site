import React, { useEffect, useState } from "react";

const Countdown = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date("Nov 14, 2020 13:00:00").getTime() - +new Date();
        
        let timeLeft = {};
        
        if (difference > 0) {
            timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            };
        }
        
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 60000);
        
        return () => clearTimeout(timer);
    });

    const timerComponents = [];
    
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
        return;
        }
    
        timerComponents.push(
        <span key={interval}>
            <span className="timer-number">{timeLeft[interval]}</span> {interval}
        </span>
        );
    });
    
    return (
        timerComponents.length ? <span id="countdown">{timerComponents}</span> : null
    );
}



export default Countdown