import React from 'react';

const AboutCard = ({ icon, title, description }) => (
    <div className="glass-card p-8 hover:transform hover:-translate-y-2 transition-all duration-300">
        <div className="text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-display font-semibold mb-3 text-primary">{title}</h3>
        <p className="text-text-muted text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

const About = () => {
    const cards = [
        {
            icon: "✨",
            title: "Who I Am",
            description: "A soul wrapped in warmth and rain, I create with an artistic spirit. I believe beauty lives in simplicity and gentle colors."
        },
        {
            icon: "🌷",
            title: "What I Love",
            description: "Crafting clean, elegant designs that dance with soft pastels and airy fonts. My inspiration blooms from nature's whispers."
        },
        {
            icon: "☀️",
            title: "Sunlight Side",
            description: "I nurture ideas with patience, allowing them the time they need to grow. My energy flows quietly, guiding and supporting."
        }
    ];

    return (
        <section id="about" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-display font-bold text-center mb-16">
                    <span className="border-b-2 border-primary/30 pb-2">About Me</span>
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <AboutCard key={index} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
