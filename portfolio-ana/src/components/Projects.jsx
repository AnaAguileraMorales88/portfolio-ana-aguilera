import React from 'react';

const ProjectCard = ({ title, description, tags, link }) => (
    <article className="glass-card p-6 flex flex-col h-full group">
        <section className="flex-1">
            <header className="flex items-center gap-2 mb-4">
                <span className="text-2xl" role="img" aria-label="sprout">🌱</span>
                <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                    {title}
                </h3>
            </header>
            <p className="text-text-muted text-sm mb-6 line-clamp-3">
                {description}
            </p>

            <ul className="flex flex-wrap gap-2 mb-6" aria-label="Tags">
                {tags.map((tag) => (
                    <li key={tag} className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300">
                        {tag}
                    </li>
                ))}
            </ul>
        </section>

        <a
            href={link}
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white/5 
                 hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium w-fit"
        >
            Visit Site
        </a>
    </article>
);

const Projects = () => {
    const projects = [
        {
            title: "Bloom Website",
            description: "A cozy and modern cafe website designed with pastel tones, animated menus, and interactive transitions.",
            tags: ["HTML", "CSS", "GSAP"],
            link: "#"
        },
        {
            title: "Dreamy Portfolio",
            description: "My personal portfolio crafted with a soft, peony-inspired theme. Light/dark modes, flowing visuals.",
            tags: ["React", "Tailwind", "Framer Motion"],
            link: "#"
        },
        {
            title: "Nature Blog UI",
            description: "A relaxing blog interface inspired by nature. Smooth reading experience with soft card layouts and gentle typography.",
            tags: ["Next.js", "CSS Modules"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 px-4">
            <section className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold">
                        <span className="border-b-2 border-primary/30 pb-2">Projects</span>
                    </h2>
                </header>

                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </section>
            </section>
        </section>
    );
};

export default Projects;
