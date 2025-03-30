import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Introduction: React.FC = () => {
    const introRef = useRef<HTMLDivElement>(null);

    return (
        <section
            ref={introRef}
            className="snap-start h-screen w-full flex flex-col justify-center relative px-6 md:px-16 lg:px-24 overflow-hidden"
            style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 34, 140, 0.1) 0%, transparent 80%)`,
            }}
            id="introduction"
        >
            {/* Background gradient blur */}
            <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 right-20 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl"></div>

            {/* Subtle grain texture */}
            <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
                }}
            ></div>

            {/* Content */}
            <div className="max-w-6xl mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="text-neutral-400 font-light text-lg md:text-xl tracking-wide mb-1 block">
                        Hello, I'm
                    </span>
                    <h1 className="font-sans font-bold text-7xl md:text-8xl lg:text-9xl tracking-tight mt-2 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
                        Axel Velasquez
                    </h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6"
                >
                    Software Developer
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-neutral-300 text-lg md:text-xl max-w-lg leading-relaxed mb-10"
                >
                    Creating clean, impactful digital experiences with code.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                      <a href="#projects" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/50 transition-all hover:-translate-y-1 cursor-pointer">
                            View Projects
                        </button>
                    </a> 
                    <a href="mailto:axel.velascast@gmail.com" className="w-full sm:w-auto"
                        aria-label="Email Me">
                        <button className="w-full px-8 py-3 bg-transparent border border-neutral-700 hover:border-indigo-500 text-white font-medium rounded-md hover:text-indigo-400 transition-all hover:-translate-y-1 cursor-pointer">
                            Contact Me
                        </button>
                    </a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="flex gap-6 mt-12"
                >
                    <a
                        href="https://github.com/LMSAIH"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub Profile"
                        className="text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
                    >
                        <FiGithub size={22} aria-hidden="true" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/axel-gael-velasquez-castaneda-1a4075323/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn Profile"
                        className="text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
                    >
                        <FiLinkedin size={22} aria-hidden="true" />
                        <span className="sr-only">LinkedIn</span>
                    </a>

                    <a
                        href="mailto:axel.velascast@gmail.com"
                        aria-label="Email Me"
                        className="text-neutral-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-1"
                    >
                        <FiMail size={22} aria-hidden="true" />
                        <span className="sr-only">Email</span>
                    </a>
                </motion.div>
            </div>

        </section>
    );
};

export default Introduction;