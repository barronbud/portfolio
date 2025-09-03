"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
}

interface ParticleBackgroundProps {
    particleCount?: number;
    colors?: string[];
    speed?: number;
    className?: string;
}

export default function ParticleBackground({
    particleCount = 50,
    colors = ["#3b82f6", "#8b5cf6", "#6366f1", "#06b6d4"],
    speed = 0.5,
    className = "",
}: ParticleBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number>(0);
    const particlesRef = useRef<Particle[]>([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
            canvas.style.width = rect.width + "px";
            canvas.style.height = rect.height + "px";
        };

        const createParticle = (): Particle => ({
            x: Math.random() * canvas.offsetWidth,
            y: Math.random() * canvas.offsetHeight,
            vx: (Math.random() - 0.5) * speed,
            vy: (Math.random() - 0.5) * speed,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.1,
            color: colors[Math.floor(Math.random() * colors.length)],
        });

        const initParticles = () => {
            particlesRef.current = Array.from({ length: particleCount }, createParticle);
        };

        const updateParticle = (particle: Particle) => {
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Wrap around edges
            if (particle.x < 0) particle.x = canvas.offsetWidth;
            if (particle.x > canvas.offsetWidth) particle.x = 0;
            if (particle.y < 0) particle.y = canvas.offsetHeight;
            if (particle.y > canvas.offsetHeight) particle.y = 0;

            // Subtle opacity animation
            particle.opacity += Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.01;
            particle.opacity = Math.max(0.1, Math.min(0.6, particle.opacity));
        };

        const drawParticle = (particle: Particle) => {
            ctx.save();
            ctx.globalAlpha = particle.opacity;
            ctx.fillStyle = particle.color;
            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        };

        const drawConnections = () => {
            const maxDistance = 100;
            const particles = particlesRef.current;

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.1;
                        ctx.save();
                        ctx.globalAlpha = opacity;
                        ctx.strokeStyle = particles[i].color;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                        ctx.restore();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

            particlesRef.current.forEach((particle) => {
                updateParticle(particle);
                drawParticle(particle);
            });

            drawConnections();

            animationRef.current = requestAnimationFrame(animate);
        };

        const handleResize = () => {
            resizeCanvas();
            initParticles();
        };

        // Initialize
        resizeCanvas();
        initParticles();
        animate();

        // Event listeners
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [particleCount, colors, speed]);

    return (
        <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none ${className}`} style={{ zIndex: 0 }} />
    );
}
