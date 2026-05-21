"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaMapMarkerAlt } from "react-icons/fa";

import ProjectShowcase from "@/components/ProjectShowcase";
import SkillSet from "@/components/SkillSet";
import FadeIn from "@/components/FadeIn";
import ResumeModal from "@/components/ResumeModal";
import SectionLabel from "@/components/SectionLabel";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SocialRail from "@/components/SocialRail";

import projectData from "@/data/project-data";
import experienceData from "@/data/experience-data";
import certificationsData from "@/data/certifications-data";
import { assetPath } from "@/lib/assetPath";

const CONTACT = {
    email: "krish7123p@gmail.com",
    linkedin: "https://www.linkedin.com/in/krish-patel1011",
    github: "https://github.com/Lord-Samosa",
};

const STATS = [
    "VCU · Computer Science",
    "AI Minor",
    "GPA 3.5",
    "Richmond, VA",
];

export default function Home() {
    const [resumeOpen, setResumeOpen] = useState(false);

    return (
        <div className="min-h-screen text-stone-100 relative">
            <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
            <SocialRail />

            {/* Hero — split layout, left-aligned */}
            <section id="home" className="relative z-10 min-h-screen flex items-center px-6 pt-24 pb-16">
                <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">
                    <div className="text-left">
                        <FadeIn>
                            <span className="inline-flex items-center gap-2 font-body text-sm text-emerald-400/90 mb-6 px-3 py-1 rounded-full border border-emerald-500/25 bg-emerald-500/10">
                                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                                Open to internships
                            </span>
                        </FadeIn>
                        <FadeIn delay={0.05}>
                            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold mb-6 leading-[1.1]">
                                Krish Patel
                            </h1>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <p className="font-body text-lg sm:text-xl text-stone-300 leading-relaxed max-w-xl mb-8">
                                Computer Science student building games, software, and creative tech —
                                focused on problem-solving, leadership, and meaningful projects.
                            </p>
                        </FadeIn>
                        <FadeIn delay={0.15}>
                            <div className="flex flex-wrap gap-2 mb-10">
                                {STATS.map((stat) => (
                                    <span key={stat} className="stat-chip">
                                        {stat}
                                    </span>
                                ))}
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.2}>
                            <div className="flex flex-wrap gap-4">
                                <Link href="#projects">
                                    <button className="lit-card-btn px-7 py-3 font-body font-semibold shadow-glow hover:shadow-glow-rose transition-all">
                                        View my work
                                    </button>
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setResumeOpen(true)}
                                    className="px-7 py-3 font-body font-semibold rounded-lg border border-amber-500/50 text-amber-300 hover:bg-amber-500/10 flex items-center gap-2 transition-all"
                                >
                                    <FaFileAlt size={16} />
                                    Resume
                                </button>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.15} className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-500/20 via-transparent to-rose-500/20 blur-2xl" />
                            <div className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[380px] rounded-[2rem] overflow-hidden border border-amber-500/30 hero-glow rotate-2 hover:rotate-0 transition-transform duration-500">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={assetPath("/img/krish-profile.png")}
                                    alt="Krish Patel"
                                    className="h-full w-full object-cover object-[center_18%]"
                                />
                            </div>
                            <div className="absolute -bottom-4 -left-4 font-body text-xs px-3 py-2 rounded-lg border border-amber-500/20 bg-[#16101f]/90 text-stone-400 flex items-center gap-2">
                                <FaMapMarkerAlt className="text-amber-500/80" size={12} />
                                Richmond, VA
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
                <FadeIn>
                    <SectionLabel
                        number="01 — WORK"
                        title="Selected projects"
                        subtitle="A mix of competition wins and personal builds."
                    />
                </FadeIn>
                <ProjectShowcase projects={projectData} />
            </section>

            {/* About + Education */}
            <section id="about" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
                <FadeIn>
                    <SectionLabel
                        number="02 — ABOUT"
                        title="A little about me"
                        subtitle="Student, builder, and team player."
                    />
                </FadeIn>
                <FadeIn delay={0.1}>
                    <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-start">
                        <p className="font-body text-lg text-stone-300 leading-relaxed">
                            I&apos;m a Computer Science student at Virginia Commonwealth University with a minor in
                            Artificial Intelligence. I bring strong foundations in software development,
                            technical troubleshooting, and leadership — from front-desk management to building
                            multiplayer games. I&apos;m looking for internship opportunities where I can learn fast
                            and contribute real value.
                        </p>
                        <div className="rounded-2xl border border-amber-500/20 bg-[#16101f]/70 p-6 backdrop-blur-sm">
                            <h3 className="font-display text-xl font-semibold mb-4">Education</h3>
                            <p className="font-body text-stone-200 font-medium">Virginia Commonwealth University</p>
                            <p className="font-body text-stone-400 text-sm mt-1">B.S. Computer Science · Minor in AI</p>
                            <p className="font-body text-amber-400/90 text-sm mt-3">Expected May 2029 · GPA 3.5</p>
                            <p className="font-body text-stone-500 text-sm mt-2">Dean&apos;s List — First Semester</p>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Experience timeline */}
            <section id="experience" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
                <FadeIn>
                    <SectionLabel
                        number="03 — EXPERIENCE"
                        title="Where I've worked"
                        subtitle="Leadership and operations outside the classroom."
                    />
                </FadeIn>
                <ExperienceTimeline experience={experienceData} />
            </section>

            {/* Skills + Certifications */}
            <section id="skills" className="relative z-10 max-w-6xl mx-auto px-6 py-24">
                <FadeIn>
                    <SectionLabel number="04 — SKILLS" title="Tools & languages" />
                </FadeIn>
                <SkillSet />
                <FadeIn delay={0.2}>
                    <div className="mt-16">
                        <h3 className="font-display text-2xl font-semibold mb-6">Certifications</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {certificationsData.map((cert) => {
                                const className =
                                    "flex justify-between items-center font-body px-5 py-4 rounded-xl border border-amber-500/15 bg-[#16101f]/50 hover:border-amber-400/30 transition-colors";

                                if (cert.link) {
                                    return (
                                        <a
                                            key={cert.title}
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`${className} cursor-pointer hover:bg-amber-500/5 group`}
                                            title={`View ${cert.title} on Certiport`}
                                        >
                                            <span className="text-stone-200 group-hover:text-amber-200 transition-colors">
                                                {cert.title}
                                                <span className="ml-2 text-amber-500/60 group-hover:text-amber-400">↗</span>
                                            </span>
                                            <span className="text-amber-400/80 text-sm">{cert.year}</span>
                                        </a>
                                    );
                                }

                                return (
                                    <div key={cert.title} className={className}>
                                        <span className="text-stone-200">{cert.title}</span>
                                        <span className="text-amber-400/80 text-sm">{cert.year}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* Contact CTA */}
            <section id="contact" className="relative z-10 max-w-6xl mx-auto px-6 py-24 pb-32">
                <FadeIn>
                    <div className="rounded-3xl border border-amber-500/25 bg-gradient-to-br from-[#16101f]/90 via-[#1a1028]/80 to-[#16101f]/90 p-10 md:p-14 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                        <p className="font-body text-sm tracking-[0.3em] text-amber-500/70 mb-3 relative">05 — CONTACT</p>
                        <h2 className="font-display text-4xl md:text-5xl font-semibold mb-4 relative">Let&apos;s build something</h2>
                        <p className="font-body text-stone-400 max-w-md mx-auto mb-8 relative">
                            Interested in collaborating or hiring? I&apos;d love to hear from you.
                        </p>
                        <div className="flex justify-center gap-6 relative">
                            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-300 transition transform hover:scale-110" aria-label="GitHub">
                                <FaGithub size={36} />
                            </a>
                            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-rose-400 transition transform hover:scale-110" aria-label="LinkedIn">
                                <FaLinkedin size={36} />
                            </a>
                            <a href={`mailto:${CONTACT.email}`} className="text-stone-400 hover:text-orange-400 transition transform hover:scale-110" aria-label="Email">
                                <FaEnvelope size={36} />
                            </a>
                        </div>
                        <a
                            href={`mailto:${CONTACT.email}`}
                            className="inline-block mt-8 font-body text-amber-300 hover:text-amber-200 transition relative"
                        >
                            krish7123p@gmail.com
                        </a>
                    </div>
                </FadeIn>
            </section>
        </div>
    );
}
