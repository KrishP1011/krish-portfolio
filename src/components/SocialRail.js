"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const links = [
    { href: "https://github.com/KrishP1011", icon: FaGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/krish-patel1011", icon: FaLinkedin, label: "LinkedIn" },
    { href: "mailto:krish7123p@gmail.com", icon: FaEnvelope, label: "Email" },
];

export default function SocialRail() {
    return (
        <aside className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-5">
            <span className="font-body text-[10px] tracking-[0.35em] text-stone-500 [writing-mode:vertical-lr] rotate-180">
                CONNECT
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-500/40 to-transparent" />
            {links.map(({ href, icon: Icon, label }) => (
                <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-stone-500 hover:text-amber-300 transition-colors"
                >
                    <Icon size={20} />
                </a>
            ))}
        </aside>
    );
}
