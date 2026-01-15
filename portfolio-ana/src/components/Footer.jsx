import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <section className="max-w-7xl mx-auto px-4">
                <ul className="flex justify-center space-x-6 mb-4">
                    <li><a href="#" className="text-text-muted hover:text-primary transition-colors">GitHub</a></li>
                    <li><a href="#" className="text-text-muted hover:text-primary transition-colors">LinkedIn</a></li>
                    <li><a href="#" className="text-text-muted hover:text-primary transition-colors">Twitter</a></li>
                </ul>
                <p className="text-text-muted text-sm">
                    Let's Bloom Together 🌷
                </p>
                <p className="text-white/20 text-xs mt-2">
                    © {new Date().getFullYear()} Ana Aguilera. All rights reserved.
                </p>
            </section>
        </footer>
    );
};

export default Footer;
