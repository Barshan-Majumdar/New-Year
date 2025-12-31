import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { RefreshCw, Zap } from 'lucide-react';
import { soundManager } from '../utils/SoundManager';
import AuroraBackground from './AuroraBackground';

const GlitchText = ({ text }) => {
    return (
        <div className="relative inline-block group">
            <span className="relative z-10">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-aurora-cyan opacity-0 group-hover:opacity-70 animate-pulse translate-x-[2px]">{text}</span>
            <span className="absolute top-0 left-0 -z-10 w-full h-full text-aurora-magenta opacity-0 group-hover:opacity-70 animate-pulse -translate-x-[2px]">{text}</span>
        </div>
    );
};

const QUOTES = [
    "This isn't just a new year. It's a new timeline. Write it well.",
    "2026 is a blank canvas. Paint it with bold colors and no regrets.",
    "Don't look back. You're not going that way. Eyes forward to 2026.",
    "New Year. New Energy. New Horizons. Your time is now.",
    "The magic in new beginnings is truly the most powerful of them all.",
    "Your journey has just begun. 2026 holds infinite possibilities.",
    "Trust the magic of new beginnings. The best is yet to come.",
    "Stars don't compete with other stars. They just shine. Shine bright in 2026."
];

const RevealStage = ({ name, onReset }) => {
    const [quote, setQuote] = useState(QUOTES[0]);

    useEffect(() => {
        // Random quote on mount
        setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);

        soundManager.playAmbient();


        // Glitch in content immediately
        // setShowContent(true); 

        const duration = 56 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 45, spread: 360, ticks: 100, zIndex: 100 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            // Chaotic "Cell Bomb" Explosions
            // High intensity, random positioning, fast decay
            if (Math.random() < 0.4) {
                confetti({
                    startVelocity: randomInRange(30, 60), // Forceful blast
                    spread: 360, // Full explosion
                    ticks: 120,
                    zIndex: 100,
                    particleCount: randomInRange(50, 100),
                    origin: { x: Math.random(), y: Math.random() * 0.7 }, // Random pos in top 70%
                    colors: ['#FF0000', '#FFD700', '#C0C0C0', '#ffffff', '#FF4500'], // Red, Gold, Silver, White, OrangeRed
                    gravity: 1.5, // Heavy debris falling fast
                    scalar: 0.9,
                    drift: 0,
                    disableForReducedMotion: true
                });
            }

            // Supporting Fountain from bottom
            if (Math.random() < 0.3) {
                confetti({
                    startVelocity: 45,
                    spread: 80,
                    ticks: 150,
                    zIndex: 90,
                    particleCount: 20,
                    origin: { x: randomInRange(0.1, 0.9), y: 1 },
                    colors: ['#06b6d4', '#8b5cf6'],
                    gravity: 0.8,
                    scalar: 1,
                    drift: 0
                });
            }

            // Flash effect for explosions
            if (Math.random() > 0.85) {
                const flash = document.getElementById('flash-overlay');
                if (flash) {
                    flash.style.opacity = randomInRange(0.15, 0.4);
                    setTimeout(() => flash.style.opacity = 0, 90);
                }
            }

        }, 150);

        return () => {
            clearInterval(interval);
            soundManager.stopAmbient();
        };
    }, []);

    return (
        <motion.div
            className="relative w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <AuroraBackground />
            <div id="flash-overlay" className="absolute inset-0 bg-white pointer-events-none opacity-0 transition-opacity duration-75 z-20"></div>

            <div className="z-30 text-center relative">
                <motion.div
                    initial={{ scale: 0.9, filter: 'blur(10px)', opacity: 0 }}
                    animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                    className="relative"
                >
                    {/* Holographic Container */}
                    <div className="glass-panel p-8 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-aurora-magenta to-transparent animate-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-aurora-cyan to-transparent animate-pulse delay-75"></div>

                        <motion.h2
                            className="text-2xl md:text-3xl font-sans font-bold text-white tracking-[0.5em] uppercase mb-8"
                            animate={{ opacity: [0.8, 1, 0.8] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            HAPPY NEW YEAR
                        </motion.h2>

                        <div className="relative mb-8">
                            <h1 className="text-6xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                                2026
                            </h1>
                            <motion.h1
                                className="absolute inset-0 text-6xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-aurora-cyan via-aurora-magenta to-aurora-violet opacity-50 blur-sm"
                                animate={{ x: [-2, 2, -2], y: [1, -1, 1] }}
                                transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
                            >
                                2026
                            </motion.h1>
                        </div>

                        <motion.div
                            className="text-4xl md:text-6xl font-bold font-sans text-white uppercase tracking-wider relative inline-block group cursor-default"
                        >
                            <GlitchText text={name || "TRAVELLER"} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-12 text-sm md:text-base font-sans font-light text-gray-300 tracking-wider max-w-2xl mx-auto"
                        >
                            <p className="italic mb-2">"{quote}"</p>
                            <p className="text-aurora-cyan font-bold opacity-80">- Barshan_249</p>
                        </motion.div>
                    </div>


                </motion.div>
            </div>
        </motion.div>
    );
};

export default RevealStage;
