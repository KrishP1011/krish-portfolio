import React from "react";
import {
    HTML, CSS, SQL, PYTHON, JAVA, CSHARP, GITHUB,
} from "./svg/badges";
import { SkillImageIcon } from "./SkillIcon";

function renderSkill(item, width, height) {
    if (typeof item === "string") {
        return <SkillImageIcon name={item} width={width} height={height} />;
    }
    const Icon = item;
    return <Icon width={width} height={height} />;
}

const SkillSet = () => {
    const skills = [
        {
            title: "Languages",
            items: [JAVA, PYTHON, HTML, CSS, CSHARP, SQL],
            names: ["Java", "Python", "HTML", "CSS", "C#", "SQL"],
        },
        {
            title: "Software & Tools",
            items: ["msaccess", GITHUB, "gamemaker", "mysql"],
            names: ["Microsoft Access", "GitHub", "Game Maker Studio 2", "MySQL"],
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {skills.map((category, idx) => (
                <div
                    key={idx}
                    className="bg-[#16101f]/90 p-6 rounded-2xl shadow-lg text-center border border-amber-500/10 hover:border-rose-400/20 transition-colors"
                >
                    <h4 className="text-2xl font-semibold mb-4">{category.title}</h4>
                    <div className="flex flex-wrap justify-center gap-6">
                        {category.items.map((item, i) => (
                            <div key={i} className="flex flex-col items-center w-24">
                                <div className="flex justify-center items-center w-20 h-20">
                                    {renderSkill(item, 80, 80)}
                                </div>
                                <p className="text-stone-300 text-md mt-2">{category.names[i]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillSet;
