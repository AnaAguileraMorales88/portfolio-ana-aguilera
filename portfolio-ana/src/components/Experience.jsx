import React from 'react';

const ExperienceItem = ({ role, company, period, description }) => (
    <div className="relative pl-8 pb-12 last:pb-0 border-l border-white/10 ml-4 group">
        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-dark-bg group-hover:ring-primary/20 transition-all duration-300"></div>

        <div className="glass-card p-6 -mt-2 ml-4">
            <h3 className="text-xl font-display font-semibold text-white mb-1">{role}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center text-sm text-primary mb-4 gap-2">
                <span className="font-medium">{company}</span>
                <span className="hidden sm:inline text-white/20">•</span>
                <span className="opacity-80">{period}</span>
            </div>

            <ul className="space-y-2 text-text-muted text-sm">
                {description.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 flex-shrink-0"></span>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const Experience = () => {
    const experiences = [
        {
            role: "Web Designing Intern",
            company: "Moonstone Digital",
            period: "April - July 2023",
            description: [
                "Created responsive layouts using HTML & CSS.",
                "Joined design discussions and improved UI flow.",
                "Built small yet key features to enhance usability."
            ]
        },
        {
            role: "Personal Projects & Learning",
            company: "Self-driven",
            period: "Ongoing",
            description: [
                "Designed soft-themed websites for practice.",
                "Explored animations, UI consistency, and React styling."
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent to-primary/5">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-display font-bold text-center mb-16">
                    Experience
                </h2>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
