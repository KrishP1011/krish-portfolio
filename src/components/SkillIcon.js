"use client";

import Image from "next/image";

const SKILL_IMAGES = {
    msaccess: { src: "/img/skills/msaccess.png", alt: "Microsoft Access" },
    gamemaker: { src: "/img/skills/gamemaker.png", alt: "Game Maker Studio 2" },
    mysql: { src: "/img/skills/mysql.png", alt: "MySQL" },
};

export function SkillImageIcon({ name, width = 80, height = 80 }) {
    const image = SKILL_IMAGES[name];
    if (!image) return null;

    return (
        <Image
            src={image.src}
            alt={image.alt}
            width={width}
            height={height}
            className="object-contain"
            unoptimized
        />
    );
}
