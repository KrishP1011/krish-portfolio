"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const NAV = [
    { id: "projects", label: "Work" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 220;
            let current = "home";

            for (const { id } of NAV) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollPos) current = id;
            }

            if (window.scrollY < 300) current = "home";
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-amber-500/10 bg-[#0c0a12]/90 backdrop-blur-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
                <Link href="#home" className="font-display text-xl font-semibold text-title">
                    Krish
                </Link>

                <div className="hidden md:flex items-center gap-1 p-1 rounded-full border border-amber-500/15 bg-[#16101f]/50">
                    {NAV.map(({ id, label }) => (
                        <Link
                            key={id}
                            href={`#${id}`}
                            className={`font-body text-sm px-4 py-1.5 rounded-full transition-all ${
                                activeSection === id
                                    ? "bg-gradient-to-r from-amber-500/25 to-rose-500/20 text-amber-200"
                                    : "text-stone-400 hover:text-stone-200"
                            }`}
                        >
                            {label}
                        </Link>
                    ))}
                </div>

                <Link
                    href="#contact"
                    className="font-body text-sm px-4 py-2 rounded-full border border-amber-500/40 text-amber-300 hover:bg-amber-500/10 transition"
                >
                    Let&apos;s talk
                </Link>
            </div>
        </nav>
    );
}
