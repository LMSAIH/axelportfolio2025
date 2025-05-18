import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight } from 'react-icons/fi';

interface WorkExperience {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

const Experience: React.FC = () => {
    // Sample work experience data - replace with your own
    const experiences: WorkExperience[] = [
        {
            title: "Research Assistant | Web Developer",
            company: "Langara College Applied Research Centre",
            location: "Vancouver, BC",
            period: "Jan 2025 - Present",
            description: "Supporting faculty-led research projects by developing web applications. Collaborating with multidisciplinary research team to design and implement digital solutions that enhance data collection, analysis, and presentation of research findings.",
            achievements: [

            ],
            technologies: ["React", "TypeScript", "AWS", "Docker", "Tailwind CSS"]
        },
        {
            title: "Software Developer",
            company: "Langara Computer Science Club",
            location: "Vancouver, BC",
            period: "Jan 2025 - Present",
            description: "Leading the development, deployment, and maintenance of the Langara CPSC club's website and internal tools. Mentoring club members and other developers, while collaborating with students to build a platform for sharing resources and fostering learning.",
            achievements: [
                "Collaborated with a dedicated team of developers in maintaining the club's CI/CD pipelines that serve over 1700 members across the 4 deployed services we offer, ensuring the highest level of security compliance and asset management",
                "Lead Developer for internal scheduling software initiative, guiding a team from concept to deployment and successfully integrating the solution into our services, reducing planning time by 70%",
                "Developed and delivered didactic materials to mentor 50+ attendees at weekly events, effectively teaching fundamentals and best practices, simplifying complex problems and providing clear solutions"
            ],
            technologies: ["React", "TypeScript", "Node.js", "AWS", "Docker", "ExpressJS", "Python", "MongoDB", "Supabase", "FastAPI"]
        },
        {
            title: "Head of IT",
            company: "Langara French Club",
            location: "Vancouver, BC",
            period: "Nov 2024 - Present",
            description: "Responsible for the development and maintenance of the Langara French Club's website and internal tools. Collaborating with club members to enhance existing tools and creating new ones to improve the club's operations.",
            achievements: [
                "Provided IT support to club executives and members, troubleshooting email services and applications, achieving 100% satisfaction in the latest member survey",
                "Directed and launched the club's website using Next.js, TypeScript, and Tailwind CSS, enhancing user experience and expanding the club's visibility to five platforms",
                "Oversaw club communication channels and data management, providing technical support and troubleshooting for nearly 100 executives and members across different operating systems",
                "Launched email campaigns and automations to promote club events, achieving a 50% increase in attendance and engagement",
            ],
            technologies: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Mailchimp", "Google Workspace", "Discord"]
        },
        {
            title: "Call Center Associate",
            company: "ResultsCX",
            location: "Remote",
            period: "Jun 2023 - Dec 2023",
            description: "Provided exceptional customer support in a fast-paced, remote call center environment. Delivered clear and effective solutions by managing complex drivers and communicating efficiently with customers. Consistently maintained high-quality standards by adhering to strict protocols and resolving issues with a 100% first-call resolution rate. Demonstrated strong time management and problem-solving skills, excelling in high-stress situations while ensuring customer satisfaction.",
            achievements: [
                "Top performer with a 100% satisfaction rate across 600+ calls, consistently exceeding performance targets and providing exemplary customer support",
                "Managed complex drivers and used strong communication skills to deliver clear and effective customer solutions, which contributed to a 100% first-call resolution rate",
                "Excelled in high-stress situations with strong time management skills, consistently achieving a 99.5% QA assessment score"
            ],
            technologies: ["Citrix Workspace", "Google Workspace", "Microsoft Office"]
        }
    ];

    // Animation variants


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
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

    return (
        <section
            id="experience"
            className="snap-start min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 relative"
            style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 34, 140, 0.1) 0%, transparent 80%)`,
            }}
        >
            {/* Background elements */}
            <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 right-0 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl -z-10"></div>

            {/* Subtle grain texture */}
            <div
                className="absolute inset-0 opacity-[0.15] pointer-events-none -z-10"
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
                        Experience & Education
                    </h2>
                    <div className="h-1 w-24 bg-indigo-600 rounded"></div>
                </motion.div>


                {/* Education section - can be expanded into its own component if needed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className='pb-20'
                >
                    <h3 className="text-2xl font-medium mb-6 text-white/90">Education</h3>

                    <div className="bg-neutral-900/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                        <div className="mb-3">
                            <h4 className="text-xl font-medium text-white">Associate of Science in Computer Science</h4>
                            <p className="text-indigo-400 font-medium">Langara College</p>
                        </div>
                        <div className="flex items-center text-neutral-400 mb-4">
                            <FiCalendar className="mr-2 text-indigo-400" />
                            <span>2024 - 2025</span>
                        </div>
                        <p className="text-neutral-300">
                            Currently on the Dean's Honour Roll with a 4.0 GPA. Specializing in modern web development frameworks, data structures, and cloud-based architecture. Participating in the Computer Science Club and contributing to open-source projects while maintaining academic excellence.
                        </p>
                    </div>
                </motion.div>

                {/* Timeline of experiences */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="relative pl-8 border-l-2 border-neutral-800 mb-16"
                >
                    {experiences.map((job, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`mb-16 relative ${index === experiences.length - 1 ? "" : "pb-8"}`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute -left-[41px] w-5 h-5 bg-indigo-600 rounded-full border-4 border-neutral-950"></div>

                            {/* Job header */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-medium text-white mb-1">{job.title}</h3>
                                <div className="flex flex-col md:flex-row md:items-center text-neutral-300 mb-2">
                                    <div className="flex items-center">
                                        <FiBriefcase className="mr-2 text-indigo-400" />
                                        <span className="font-medium">{job.company}</span>
                                    </div>
                                    <span className="hidden md:block md:mx-3 text-neutral-600">•</span>
                                    <div className="flex items-center mt-1 md:mt-0">
                                        <FiMapPin className="mr-2 text-indigo-400" />
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                                <div className="flex items-center text-neutral-400">
                                    <FiCalendar className="mr-2 text-indigo-400" />
                                    <span>{job.period}</span>
                                </div>
                            </div>

                            {/* Job content */}
                            <div className="bg-neutral-900/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-800">
                                <p className="text-neutral-300 mb-6 leading-relaxed">{job.description}</p>

                                <h4 className="text-lg font-medium text-white mb-3">Key Achievements</h4>
                                <ul className="mb-6 space-y-2">
                                    {job.achievements.map((achievement, i) => (
                                        <li key={i} className="flex text-neutral-300">
                                            <FiChevronRight className="text-indigo-400 mt-1 mr-2 flex-shrink-0" />
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {job.technologies.map((tech, i) => (
                                        <span key={i} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Experience;