import React from 'react';

const Skills = () => {
    const skills = [
        "HTML", "CSS", "JavaScript", "React", "Figma", "Git",
        "Tailwind CSS", "Node.js", "UI/UX Design"
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-white/5">
            <section className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-display font-bold mb-6">Skills</h2>
                <p className="text-text-muted mb-12 max-w-2xl mx-auto">
                    My toolkit for crafting calm, thoughtful, and beautifully detailed digital experiences.
                </p>

                <ul className="flex flex-wrap justify-center gap-4">
                    {skills.map((skill) => (
                        <li
                            key={skill}
                            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm
                         hover:bg-primary/20 hover:border-primary/40 transition-colors duration-300 cursor-default list-none"
                        >
                            <span className="text-sm font-medium tracking-wide">{skill}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default Skills;
