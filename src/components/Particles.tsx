import React, { useEffect, useRef, useState } from "react";

interface MousePosition {
    x: number;
    y: number;
}

function useMousePosition(): MousePosition {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return mousePosition;
}

interface ParticlesProps {
    quantity?: number;
    color?: string;
}

function hexToRgb(hex: string): number[] {
    hex = hex.replace("#", "");
    if (hex.length === 3) {
        hex = hex.split("").map((char) => char + char).join("");
    }
    const hexInt = parseInt(hex, 16);
    return [(hexInt >> 16) & 255, (hexInt >> 8) & 255, hexInt & 255];
}

const Particles: React.FC<ParticlesProps> = ({ quantity = 100, color = "#ffffff" }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const context = useRef<CanvasRenderingContext2D | null>(null);
    const mousePosition = useMousePosition();
    const circles = useRef<Circle[]>([]);
    const dpr = window.devicePixelRatio || 1;

    useEffect(() => {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
        }
        initCanvas();
        animate();
        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, [color]);

    const initCanvas = () => {
        resizeCanvas();
        createParticles();
    };

    const resizeCanvas = () => {
        if (canvasRef.current && context.current) {
            canvasRef.current.width = window.innerWidth * dpr;
            canvasRef.current.height = window.innerHeight * dpr;
            context.current.scale(dpr, dpr);
            circles.current = []; // Reset circles for redraw
            createParticles();
        }
    };

    const createParticles = () => {
        for (let i = 0; i < quantity; i++) {
            const circle = circleParams();
            circles.current.push(circle);
        }
    };

    const circleParams = (): Circle => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const size = Math.random() * 2 + 1;
        const dx = (Math.random() - 0.5) * 0.5;
        const dy = (Math.random() - 0.5) * 0.5;
        return { x, y, size, alpha: 0.1, targetAlpha: Math.random(), dx, dy };
    };

    const rgb = hexToRgb(color);

    const drawParticles = () => {
        clearCanvas();
        circles.current.forEach((circle) => {
            if (context.current) {
                context.current.beginPath();
                context.current.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
                context.current.fillStyle = `rgba(${rgb.join(", ")}, ${circle.alpha})`;
                context.current.fill();
            }
        });
    };

    const clearCanvas = () => {
        if (context.current) {
            context.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
        }
    };

    const animate = () => {
        circles.current.forEach((circle) => {
            circle.x += circle.dx;
            circle.y += circle.dy;
            if (circle.x < 0 || circle.x > window.innerWidth) circle.dx *= -1;
            if (circle.y < 0 || circle.y > window.innerHeight) circle.dy *= -1;
            drawParticles();
        });
        requestAnimationFrame(animate);
    };

    return (
        <canvas
            ref={canvasRef}
            style={{
                // position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: -1,
            }}
        />
    );
};

interface Circle {
    x: number;
    y: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
}

export default Particles;