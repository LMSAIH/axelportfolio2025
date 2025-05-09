import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCoffee, FiMusic, FiBookOpen, FiGlobe } from 'react-icons/fi';
import { FaWalking } from "react-icons/fa";

const KnowMe: React.FC = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    // Array of interests/hobbies with icons
    const interests = [
        { icon: <FiCode />, name: "Programming", description: "Coding is a world on its own, a world where I love to live from time to time" },
        { icon: <FiCoffee />, name: "Coffee", description: "I love the quiet environments, coffee shops which are nice and cozy are of special interest to me, let me know about your favourites!" },
        { icon: <FiMusic />, name: "Music", description: "Is there anything better than some Molchat Doma after a long day?" },
        { icon: <FiBookOpen />, name: "Reading", description: "I am particularly keen to Light Novels, recommendations would be appreciated" },
        { icon: <FiGlobe />, name: "Travel", description: "Traveling brought me to Canada, and to many other places, it is something close to my heart" },
        { icon: <FaWalking />, name: "Walking", description: "As I get older, walking around the city feels more like a need rather than a hobby, but you didn't read that from me" }
    ];

    return (
        <section
            id="knowme"
            className="snap-start min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 relative"
            style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 34, 140, 0.1) 0%, transparent 80%)`,
                
            }}
        >

            {/* Subtle grain texture */}
            <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
                }}
            ></div>

            <div className="max-w-7xl mx-auto w-full z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="font-bold text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
                        Know Me
                    </h2>
                    <div className="h-1 w-24 bg-indigo-600 rounded"></div>
                </motion.div>

                {/* Two-column layout for larger screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* About me column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-2xl font-medium mb-6 text-white/90">Who I Am</h3>

                        <div className="space-y-6 text-neutral-300">
                            <p className="leading-relaxed">
                                I'm Axel Velasquez, a passionate software developer and university student with a love for creating impactful projects. I take pride in my ability to guide others and continuously learn. Beyond my studies, I'm actively involved in student clubs, where I enjoy collaborating with peers and helping others grow their skills. In my free time, I love building useful projects—whether personal creations or contributions to open-source software. I thrive on solving complex problems and find great satisfaction in bringing my ideas to life through code.
                            </p>

                            <p className="leading-relaxed">
                                With a background in computer science and more than a year of professional experience, I've developed a keen eye for detail and a commitment to writing clean, maintainable code. I believe technology should be both powerful and accessible, and I strive to create experiences that users truly enjoy. I also like attending hackatons.
                            </p>

                            <p className="leading-relaxed">
                                When I'm not coding, you'll find me walking through the city, reading my favorite light novel series or studying at the library. I also practice martial arts which is something I really enjoy. I hope to stumble upon you at VPL or some local coffee shop, as they are my usual hideouts.
                            </p>

                            <div className="pt-4">
                                <h4 className="text-xl font-medium mb-4 text-white/90">My Philosophy</h4>
                                <p className="italic border-l-4 border-indigo-500 pl-4 py-1">
                                    Solve life one step at a time, only worry about the future you can change today.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Interests & skills column */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-2xl font-medium mb-6 text-white/90"
                        >
                            Interests & Hobbies
                        </motion.h3>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {interests.map((interest, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-neutral-900/80 backdrop-blur-sm rounded-xl p-5 border border-neutral-800 hover:border-indigo-500/50 transition-all duration-300"
                                >
                                    <div className="flex items-center mb-3">
                                        <span className="text-indigo-400 text-xl mr-3">
                                            {interest.icon}
                                        </span>
                                        <h4 className="font-medium text-lg text-white">{interest.name}</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm">{interest.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-10 bg-neutral-900/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-800"
                        >
                            <h4 className="font-medium text-lg text-white mb-4">Currently Learning</h4>
                            <div className="flex flex-wrap gap-2">
                                {["Machine Learning", "C++", "PostgreSQL", "Redis", "French", "German", 'Japanese'].map((item, i) => (
                                    <span key={i} className="text-sm bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-neutral-300 text-lg mb-6">
                        Interested in working together or just want to say hello?
                    </p>
                    <a
                        href="mailto:axel.velascast@gmail.com"
                        aria-label="Email Me"
                        className="inline-block "
                    >
                        <button className="px-8 hover:cursor-pointer py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/50 transition-all hover:-translate-y-1">
                            Get in Touch
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default KnowMe;