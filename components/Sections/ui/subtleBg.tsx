'use client'

import React, {useEffect} from 'react'
import Image from 'next/image'

const SubtleBackground = () => {

    useEffect(() => {
        const particleCount = 50;
        const container = document.getElementById('particle-container');

        if (!container) return;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${5 + Math.random() * 10}s`;
            container.appendChild(particle);
        }

        return () => {
            container.innerHTML = '';
        };
    }, []);

return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Radial glow (like ambient light) */}
            <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.04),transparent)] rounded-full blur-3xl" />
            <div className="absolute bottom-[15%] right-[10%] w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(255,255,255,0.03),transparent)] rounded-full blur-2xl" />

            {/* Aurora blob effect */}
            <div className="absolute top-[50%] left-[50%] w-[600px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500/10 via-indigo-400/10 to-pink-500/10 blur-3xl rounded-full" />

            <div
                id="particle-container"
                className="pointer-events-none fixed top-0 left-0 w-full h-full z-[-1]"
            />

        </div>
    )
}

export default SubtleBackground
