"use client";

import { useEffect } from "react";
import { assetPath } from "@/lib/assetPath";
import { FaTimes } from "react-icons/fa";

export default function ResumeModal({ isOpen, onClose }) {
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Krish Patel resume"
        >
            <div
                className="relative max-h-[90vh] max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#16101f] border border-amber-500/30 text-stone-200 hover:text-amber-300 hover:border-amber-400/50 transition"
                    aria-label="Close resume"
                >
                    <FaTimes size={18} />
                </button>
                <div className="overflow-auto max-h-[90vh] rounded-xl border border-amber-500/20 shadow-2xl shadow-black/50 bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={assetPath("/img/krish-resume.png")}
                        alt="Krish Patel resume"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
