"use client";

export default function GlobalError({ reset }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col items-center justify-center text-stone-200 bg-[#0c0a12] px-6 text-center">
                <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
                <button
                    type="button"
                    onClick={() => reset()}
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 text-[#1c1010] font-semibold"
                >
                    Try again
                </button>
            </body>
        </html>
    );
}
