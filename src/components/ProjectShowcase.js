"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { badgeIdentifiers } from "./BadgeIdentifiers";
import { assetPath } from "@/lib/assetPath";

export default function ProjectShowcase({ projects }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
                <FadeIn key={project.name} delay={idx * 0.1}>
                    <article
                        className={`group overflow-hidden rounded-2xl border border-amber-500/15 bg-[#16101f]/60 backdrop-blur-sm hover:border-rose-400/35 transition-all duration-300 hover:-translate-y-1 ${
                            idx === 0 ? "lg:col-span-2" : ""
                        }`}
                    >
                        <div className={`flex flex-col ${idx === 0 ? "md:flex-row" : ""}`}>
                            <div className={`relative overflow-hidden bg-[#0c0a12] ${idx === 0 ? "md:w-1/2 h-64 md:h-auto md:min-h-[280px]" : "h-52"}`}>
                                <Image
                                    src={assetPath(`/img/${project.img}`)}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    unoptimized
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a12]/80 via-transparent to-transparent md:bg-gradient-to-r" />
                            </div>
                            <div className={`p-6 md:p-8 flex flex-col justify-center ${idx === 0 ? "md:w-1/2" : ""}`}>
                                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                                    <span className="font-body text-xs tracking-widest text-amber-500/70 uppercase">
                                        {project.date}
                                    </span>
                                    <div className="flex gap-1">
                                        {project.badges.map((badge) => (
                                            <span key={badge}>{badgeIdentifiers[badge]}</span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">{project.name}</h3>
                                <p className="font-body text-stone-400 leading-relaxed mb-6 flex-1">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 font-body text-sm font-semibold text-amber-300 hover:text-rose-300 transition-colors w-fit"
                                >
                                    View project
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </div>
                    </article>
                </FadeIn>
            ))}
        </div>
    );
}
