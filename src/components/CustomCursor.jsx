import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovering, setIsHovering] = useState(false);

    // Smooth spring physics for the ring
    const ringX = useSpring(mouseX, { stiffness: 600, damping: 30, mass: 0.2 });
    const ringY = useSpring(mouseY, { stiffness: 600, damping: 30, mass: 0.2 });

    // Tighter spring physics for the dot (instant)
    const dotX = useSpring(mouseX, { stiffness: 2500, damping: 40, mass: 0.1 });
    const dotY = useSpring(mouseY, { stiffness: 2500, damping: 40, mass: 0.1 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.tagName === 'INPUT' || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-50 hidden md:block"
                style={{
                    x: dotX,
                    y: dotY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{ type: "tween", duration: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full mix-blend-difference pointer-events-none z-50 hidden md:block"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: "tween", duration: 0.15 }}
            />
        </>
    );
};

export default CustomCursor;
