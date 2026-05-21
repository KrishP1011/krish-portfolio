"use client";

export default function Footer() {
    return (
        <footer className="border-t border-amber-500/10 bg-[#08060d] text-stone-400 py-8 text-center mt-12">
            <div className="container mx-auto px-6">
                <p className="font-display text-lg font-semibold text-title">
                    &copy; {new Date().getFullYear()} Krish Patel
                </p>
            </div>
        </footer>
    );
}
