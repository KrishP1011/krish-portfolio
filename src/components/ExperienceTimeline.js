import FadeIn from "./FadeIn";

export default function ExperienceTimeline({ experience }) {
    return (
        <div className="relative max-w-3xl">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-amber-400/60 via-rose-400/40 to-transparent" />
            <div className="space-y-10">
                {experience.map((exp, index) => (
                    <FadeIn key={index} delay={index * 0.08}>
                        <div className="relative pl-10">
                            <span className="absolute left-0 top-1.5 h-[22px] w-[22px] rounded-full border-2 border-amber-400/80 bg-[#0c0a12] shadow-[0_0_12px_rgba(245,158,11,0.35)]" />
                            <div className="rounded-2xl border border-amber-500/15 bg-[#16101f]/70 p-6 backdrop-blur-sm hover:border-rose-400/30 transition-colors">
                                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                                    <h4 className="text-2xl font-semibold">{exp.title}</h4>
                                    <span className="font-body text-sm text-amber-400/80">{exp.duration}</span>
                                </div>
                                <p className="font-body text-amber-300/90 mb-4">{exp.company}</p>
                                <ul className="space-y-2">
                                    {exp.description.map((bullet, i) => (
                                        <li key={i} className="font-body text-stone-300 text-[15px] leading-relaxed flex gap-2">
                                            <span className="text-amber-500 shrink-0">▸</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    );
}
