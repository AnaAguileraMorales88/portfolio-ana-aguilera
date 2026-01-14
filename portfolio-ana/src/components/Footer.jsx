import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 text-center border-t border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="text-text-muted hover:text-primary transition-colors">GitHub</a>
                    <a href="#" className="text-text-muted hover:text-primary transition-colors">LinkedIn</a>
                    <a href="#" className="text-text-muted hover:text-primary transition-colors">Twitter</a>
                </div>
                <p className="text-text-muted text-sm">
                    Let's Bloom Together 🌷
                </p>
                <p className="text-white/20 text-xs mt-2">
                    © {new Date().getFullYear()} Ana Aguilera. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
