"use client";

import { assetPath } from "@/lib/assetPath";

const SKILL_IMAGES = {
    msaccess: { src: "/img/skills/msaccess.jpg", alt: "Microsoft Access" },
    gamemaker: { src: "/img/skills/gamemaker.png", alt: "Game Maker Studio 2" },
    mysql: { src: "/img/skills/mysql.jpg", alt: "MySQL" },
};

export function SkillImageIcon({ name, width = 80, height = 80 }) {
    const image = SKILL_IMAGES[name];
    if (!image) return null;

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={assetPath(image.src)}
            alt={image.alt}
            width={width}
            height={height}
            className="object-contain"
        />
    );
}
