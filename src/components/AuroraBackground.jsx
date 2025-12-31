
import React from 'react';

const AuroraBackground = () => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505]">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-aurora-indigo/20 via-[#050505] to-[#050505] animate-Aurora blur-3xl opacity-50" />
            <div className="absolute top-[0%] left-[0%] w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-aurora-magenta/20 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-[0%] right-[0%] w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-aurora-cyan/20 via-transparent to-transparent opacity-60" />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
        </div>
    );
};

export default AuroraBackground;
