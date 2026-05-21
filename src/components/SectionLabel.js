export default function SectionLabel({ number, title, subtitle }) {
    return (
        <div className="mb-12 md:mb-16">
            <p className="font-body text-sm tracking-[0.3em] text-amber-500/70 mb-2">{number}</p>
            <h2 className="text-4xl md:text-5xl font-semibold">{title}</h2>
            {subtitle && (
                <p className="font-body text-stone-400 mt-3 max-w-xl text-lg">{subtitle}</p>
            )}
        </div>
    );
}
