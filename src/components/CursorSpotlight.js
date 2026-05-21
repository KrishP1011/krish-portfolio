"use client";
import { useEffect, useState } from "react";

export default function CursorSpotlight() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const spotlightRadius = "420px";

    return (
        <div
            className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
            style={{
                background: `radial-gradient(${spotlightRadius} at ${position.x}px ${position.y}px, rgba(245, 158, 11, 0.14), rgba(244, 114, 182, 0.06) 40%, transparent 75%)`,
            }}
        />
    );
}
