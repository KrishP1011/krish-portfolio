"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tooltip({ children, content }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.9 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute bottom-full mb-2 px-2 py-1 bg-[#1f1529] text-amber-100 text-xs font-semibold rounded shadow-xl whitespace-nowrap border border-amber-500/25 z-[100]"
                    >
                        {content}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1f1529]" />
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </div>
    );
}
