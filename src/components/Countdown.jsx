
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const year = 2026;
        const difference = +new Date(`${year}-01-01`) - +new Date();

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center mx-2 md:mx-4">
            <motion.div
                key={value}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                className="text-2xl md:text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
            >
                {String(value || '00').padStart(2, '0')}
            </motion.div>
            <span className="text-xs text-aurora-cyan uppercase tracking-widest mt-1">{label}</span>
        </div>
    );

    return (
        <div className="flex justify-center items-center backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-white/5">
            <TimeUnit value={timeLeft.days} label="Days" />
            <span className="text-2xl font-thin text-gray-600 self-start mt-1">:</span>
            <TimeUnit value={timeLeft.hours} label="Hrs" />
            <span className="text-2xl font-thin text-gray-600 self-start mt-1">:</span>
            <TimeUnit value={timeLeft.minutes} label="Min" />
            <span className="text-2xl font-thin text-gray-600 self-start mt-1">:</span>
            <TimeUnit value={timeLeft.seconds} label="Sec" />
        </div>
    );
};

export default Countdown;
