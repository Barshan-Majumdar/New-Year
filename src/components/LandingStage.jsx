import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Sparkles, Cpu, Rocket, Zap, Moon } from 'lucide-react';
import AuroraBackground from './AuroraBackground';
import TiltCard from './TiltCard';
import Countdown from './Countdown';
import { soundManager } from '../utils/SoundManager';

const LandingStage = ({ onLaunch }) => {
    const [name, setName] = useState('');
    const [typingDone, setTypingDone] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            soundManager.playLaunch();
            onLaunch(name);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden"
        >
            <AuroraBackground />

            {/* Decorative Floating Elements */}
            <motion.div
                className="absolute top-20 left-10 text-white/10 hidden md:block"
                animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
            >
                <Globe size={64} strokeWidth={1} />
            </motion.div>
            <motion.div
                className="absolute bottom-20 right-10 text-white/10 hidden md:block"
                animate={{ y: [0, 30, 0], rotate: [0, -45, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
            >
                <Cpu size={64} strokeWidth={1} />
            </motion.div>
            <motion.div
                className="absolute top-1/3 right-1/4 text-purple-500/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                <Sparkles size={32} />
            </motion.div>
            <motion.div
                className="absolute bottom-1/3 left-1/4 text-yellow-500/10 hidden md:block"
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
            >
                <Rocket size={48} strokeWidth={1} />
            </motion.div>
            <motion.div
                className="absolute top-10 right-20 text-cyan-500/10 hidden md:block"
                animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Zap size={40} strokeWidth={1} />
            </motion.div>
            <motion.div
                className="absolute top-1/2 left-10 text-gray-500/10 hidden md:block"
                animate={{ rotate: [0, -20, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
                <Moon size={56} strokeWidth={1} />
            </motion.div>

            <div className="z-10 w-full max-w-lg space-y-12">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center space-y-4"
                >
                    <motion.h1
                        className="text-5xl md:text-7xl font-display font-bold text-white tracking-widest text-glow-cyan"
                        animate={{ y: [-15, 15, -15] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    >
                        2026
                    </motion.h1>

                    <div className="h-8 flex justify-center">
                        <motion.p
                            className={`text-aurora-violet font-sans tracking-[0.2em] uppercase text-sm border-r-2 pr-1 ${typingDone ? "animate-pulse border-aurora-violet" : "border-aurora-violet"}`}
                            initial={{ width: 0 }}
                            animate={{ width: "auto" }}
                            transition={{ duration: 4, ease: "linear" }}
                            onAnimationComplete={() => setTypingDone(true)}
                            style={{ whiteSpace: "nowrap", overflow: "hidden", display: "inline-block" }}
                        >
                            System Initialization Process
                        </motion.p>
                    </div>
                </motion.div>

                <TiltCard className="w-full">
                    <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden group">
                        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-aurora-cyan to-transparent opacity-50"></div>

                        <Countdown />

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6 relative z-20">
                            <div className="space-y-2">
                                <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">Identity Verification</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="ENTER USERNAME"
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-4 text-center font-display text-lg tracking-widest focus:outline-none focus:border-aurora-cyan/50 focus:bg-black/60 transition-all placeholder-gray-700"
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, letterSpacing: "0.2em" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/5 rounded-lg flex items-center justify-center space-x-3 text-sm font-bold tracking-widest uppercase transition-all group-hover:neon-border"
                            >
                                <span>Initiate Sequence</span>
                                <ArrowRight className="w-4 h-4 text-aurora-cyan" />
                            </motion.button>
                        </form>
                    </div>
                </TiltCard>
            </div>

            <div className="absolute bottom-8 left-0 w-full text-center text-xs text-white/20 uppercase tracking-[0.3em]">

            </div>
        </motion.div>
    );
};

export default LandingStage;
