import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        // Shared mouse position state for the loop
        let mouseX = -100; // Start off screen
        let mouseY = -100;
        let followerX = -100;
        let followerY = -100;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Update main cursor instantly
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            }

            // Check hover state
            const target = e.target;
            const isClickable = target.closest('a, button, input, textarea, .cursor-pointer');
            setHovering(!!isClickable);
        };

        window.addEventListener('mousemove', onMouseMove);

        // Animation loop for follower
        let animationFrameId;
        const loop = () => {
            // Smooth lerp for follower (delay effect)
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;

            if (followerRef.current) {
                followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
            }
            animationFrameId = requestAnimationFrame(loop);
        };
        loop();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <>
            {/* Main Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{ marginTop: -4, marginLeft: -4 }}
            />

            {/* Trailing Ring Wrapper - Positioned by JS */}
            <div
                ref={followerRef}
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{ transform: 'translate3d(-100px, -100px, 0)' }} // Initial off-screen
            >
                {/* Inner Ring - Styled and Scaled by CSS */}
                <div
                    className={`w-10 h-10 -ml-5 -mt-5 border border-white/30 rounded-full transition-all duration-300 ease-out 
                        ${hovering ? 'scale-[1.8] bg-blue-500/20 border-blue-500/50' : 'scale-100 bg-transparent'}
                    `}
                />
            </div>
        </>
    );
};

export default CustomCursor;
