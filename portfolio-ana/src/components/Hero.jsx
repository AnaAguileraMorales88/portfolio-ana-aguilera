import React from 'react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 px-4">
            <section className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
                <header className="order-2 md:order-1 space-y-6 text-center md:text-left animate-fade-in">
                    <h1 className="text-5xl md:text-7xl font-display font-bold">
                        Hi there, <br />
                        I'm <span className="text-gradient">Ana</span>
                    </h1>
                    <p className="text-xl text-text-muted max-w-lg mx-auto md:mx-0">
                        Frontend Developer & Designer crafting delicate digital blooms.
                        I build beauty from simplicity and code.
                    </p>
                    <section className="pt-4">
                        <a href="#projects" className="btn-primary inline-block">
                            Discover My Creations
                        </a>
                    </section>
                </header>

                <figure className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <section className="relative">
                        <span className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur opacity-30 animate-pulse"></span>
                        <section className="glass-card p-6 rounded-3xl relative animate-float">
                            <img
                                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Ana&backgroundColor=b6e3f4"
                                alt="Ana Avatar"
                                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl bg-white/5"
                            />
                        </section>
                        {/* Decorative elements */}
                        <span className="absolute -top-10 -right-10 w-20 h-20 bg-primary rounded-full blur-3xl opacity-20"></span>
                        <span className="absolute -bottom-10 -left-10 w-20 h-20 bg-secondary rounded-full blur-3xl opacity-20"></span>
                    </section>
                </figure>
            </section>
        </section>
    );
};

export default Hero;
