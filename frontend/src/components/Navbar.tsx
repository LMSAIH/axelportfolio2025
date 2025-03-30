import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiCode } from 'react-icons/fi';

interface NavItem {
    name: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('introduction');

    // Navigation items
    const navItems: NavItem[] = [
        { name: "Home", href: "#introduction" },
        { name: "Projects", href: "#projects" },
        { name: "About", href: "#knowme" },
        { name: "Experience", href: "#experience" },

    ];

    useEffect(() => {
        // Handle scroll appearance change
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px",
            threshold: 0
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.getAttribute('id');
                    if (sectionId) {
                        setActiveSection(sectionId);
                    }
                }
            });
        }, observerOptions);

        // Observe all sections
        document.querySelectorAll('section[id]').forEach(section => {
            sectionObserver.observe(section);
        });

        window.addEventListener('scroll', handleScroll);

        console.log(activeSection);

        return () => {
            // Clean up
            window.removeEventListener('scroll', handleScroll);
            sectionObserver.disconnect();
        };

    }, [activeSection]);

    return (
        <>
            {/* Desktop Navbar */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-4 transition-all duration-300 ${isScrolled ? 'bg-neutral-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-end">

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                aria-label={"Navigate to " + item.name}
                                className={`text-sm transition-colors duration-300 ${activeSection === item.href.substring(1)
                                        ? 'text-indigo-400 font-medium'
                                        : 'text-neutral-300 hover:text-white'
                                    }`}
                            >
                                {item.name}
                                {/* Active indicator dot */}
                                {activeSection === item.href.substring(1) && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="h-1 w-full bg-indigo-400 rounded-full mt-1"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                )}
                            </a>
                        ))}
                        <a
                            href="mailto:axel.velascast@gmail.com"
                            aria-label="Email Me"
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm transition-all hover:-translate-y-1 shadow-lg shadow-indigo-900/30"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-neutral-200 hover:text-white"
                        onClick={() => setIsMenuOpen(true)}
                        aria-label="Open menu"
                    >
                        <FiMenu size={24} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.2 }}
                className={`fixed inset-0 bg-neutral-900/95 backdrop-blur-md z-50 md:hidden ${isMenuOpen ? 'block' : 'hidden'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header with close button */}
                    <div className="flex items-center justify-between px-6 py-4">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-neutral-200 hover:text-white"
                            aria-label="Close menu"
                        >
                            <FiX size={24} />
                        </button>
                    </div>

                    {/* Mobile Nav Links */}
                    <div className="flex flex-col px-6 py-8 space-y-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                aria-label={"Navigate to " + item.name}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-xl transition-colors duration-300 relative ${activeSection === item.href.substring(1)
                                        ? 'text-indigo-400 font-medium'
                                        : 'text-neutral-300 hover:text-white'
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="mailto:axel.velascast@gmail.com"
                            aria-label="Email Me"
                            className="text-white hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2 w-full text-center bg-indigo-600 mt-5 "
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Navbar;