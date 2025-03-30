import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

interface NavItem {
    name: string;
    href: string;
}

const Footer: React.FC = () => {
    // Same navigation items as in Navbar for consistency
    const navItems: NavItem[] = [
        { name: "Home", href: "#introduction" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#knowme" },
        { name: "Experience", href: "#experience" },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer
            id="contact"
            className="snap-start min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 relative bg-neutral-900/30 backdrop-blur-sm"
        >
            <div className="max-w-7xl mx-auto w-full">
                {/* Footer top section with navigation and contact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {/* Brand and description */}
                    <div>
                        <div className="flex items-center mb-4">
                            <div className="bg-indigo-600 rounded-lg h-8 w-8 flex items-center justify-center mr-2">
                                <span className="text-white font-medium text-lg">A</span>
                            </div>
                            <span className="text-white font-medium text-xl">Axel Velasquez</span>
                        </div>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            Software developer passionate about creating elegant solutions to complex problems, focusing on web development and user experience design.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/LMSAIH"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub Profile"
                                className="text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
                            >
                                <FiGithub size={18} aria-hidden="true" />
                                <span className="sr-only">GitHub</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/axel-gael-velasquez-castaneda-1a4075323/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn Profile"
                                className="text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
                            >
                                <FiLinkedin size={18} aria-hidden="true" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="mailto:axel.velascast@gmail.com"
                                aria-label="Email Me"
                                className="text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
                            >
                                <FiMail size={18} aria-hidden="true" />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </div>

                    {/* Navigation links */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Site Links</h3>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-neutral-400 hover:text-indigo-400 transition-colors text-sm"
                                        aria-label={`Navigate to ${item.name}`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="mailto:axel.velascast@gmail.com"
                                    className="text-neutral-400 hover:text-indigo-400 transition-colors text-sm"
                                    aria-label="Contact me by email"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Get in touch */}
                    <div>
                        <h3 className="text-white font-medium mb-4">Get In Touch</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            Have a project in mind or just want to chat? Feel free to reach out and I'll get back to you as soon as possible.
                        </p>
                        <a
                            href="mailto:axel.velascast@gmail.com"
                            className="inline-block px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm transition-all hover:-translate-y-1 shadow-lg shadow-indigo-900/30"
                            aria-label="Email me"
                        >
                            Say Hello
                        </a>
                    </div>
                </div>

                {/* Background elements */}
                <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
                <div className="absolute bottom-20 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl -z-10"></div>

                {/* Footer bottom section with copyright */}
                <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
                    <p>© {currentYear} Axel Velasquez. All rights reserved.</p>
                    <div className="flex items-center mt-4 md:mt-0">
                        <span>Built with</span>
                        <FiHeart className="mx-1 text-indigo-500" aria-hidden="true" />
                        <span>in Vancouver, BC.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;