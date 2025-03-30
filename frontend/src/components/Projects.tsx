import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiStar, FiGitBranch, FiRefreshCw, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ExpandableDescription from './ExpandableDescription';
interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string;
    topics: string[];
}

interface DeployedProject {
    name: string;
    description: string;
    image: string;
    technologies: string[];
    liveUrl?: string;
    repoUrl?: string;
    public: boolean;
    live: boolean;
}

const Projects: React.FC = () => {
    const [repos, setRepos] = useState<Repository[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [currentRepoPage, setCurrentRepoPage] = useState(1);
    const [reposPerPage] = useState(6);
    const [totalRepos, setTotalRepos] = useState(0);

    const [currentFeaturedPage, setCurrentFeaturedPage] = useState(1);
    const [projectsPerPage] = useState(3);

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
// Sample deployed projects - add more projects to see pagination in action
const deployedProjects: DeployedProject[] = [

    {
        name: "DevMatrix",
        description: "DevMatrix revolutionizes project development by merging planning, design, and management into a single, AI-powered platform. It generates a complete project outline in under a minute, offering color scheme previews, typography recommendations, user journey maps, tech stack suggestions, and timeline creation based on your specifications. It also provides YAML-formatted API references and live previews of your design choices, making it the ultimate tool for rapid and intelligent project prototyping.",
        image: "/images/devmatrix.webp",
        technologies: ["React", "TypeScript", "TailwindCSS", "OpenAI", "NodeJS", "ExpressJS"],
        liveUrl: "https://project0-jade.vercel.app/",
        repoUrl: "https://github.com/LMSAIH/project0",
        public: true,
        live: true
    },
    {
        name: "Travexia MVP",
        description: "Travexia is an AI-powered platform for discovering last-minute events nearby. It uses geolocation and intelligent filtering to find the best experiences in seconds. With a custom chatbot, Travexia dynamically applies filters based on location, preferences, and event types. The platform offers two dashboards: one for clients to explore events and another for providers to post and manage their listings, streamlining event discovery and management with real-time data.",
        image: "/images/travexia.webp",
        technologies: ["React", "TypeScript", "TailwindCSS", "OpenAI", "NodeJS", "ExpressJS", "Firebase", "Firebase Cloud Functions"],
        liveUrl: "https://www.linkedin.com/posts/axel-gael-velasquez-castaneda-1a4075323_delivered-a-feature-rich-mvp-in-just-2-activity-7311586099108196352-0RTq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFGzicwBIXKkq4v_tCDMB0chTRYMDsJnd-s",
        public: false,
        live: true
    },
    {
        name: "Image2Location",
        description: "Image2Location pinpoints the exact location of an image using AI-powered landmark recognition. It leverages a custom-trained model from PicartaAI to identify famous places with impressive accuracy. The application goes beyond simple geolocation by providing real-time, AI-curated recommendations based on the detected location, offering users valuable insights and contextual information about the place.",
        image: "/images/image2location.webp",
        technologies: ["React", "TypeScript", "TailwindCSS", "OpenAI", "Python", "FastAPI", "PicartaAI", "Supabase"],
        liveUrl: "https://project0-jade.vercel.app/",
        repoUrl: "https://github.com/LMSAIH/Image2Location",
        public: true,
        live: false
    },
    {
        name: "Langara French Club Website",
        description: "The Langara French Club website is a platform for students to connect, share resources, and promote French culture. It features bilingual content, offering seamless translations between French and English. The website serves as a hub for event announcements, language practice resources, and cultural insights, enhancing engagement within the student community.",
        image: "/images/langarafr.webp",
        technologies: ["React", "TypeScript", "Tailwind CSS", "NextJS"],
        liveUrl: "https://langarafr.com/",
        repoUrl: "https://github.com/LMSAIH/langarafrenchclub",
        public: true,
        live: true
    },
    {
        name: "Neosana Landing Page",
        description: "The Neosana landing page introduces the startup's mission, focusing on health and wellness. With a sleek, modern design, it provides essential information about the company's vision, services, and value proposition. The page is fully responsive, ensuring a seamless experience across devices, and serves as the primary entry point for potential clients and partners.",
        image: "/images/neosana.webp",
        technologies: ["React", "TypeScript", "Tailwind CSS", "NextJS"],
        liveUrl: "https://neosana.app",
        public: false,
        live: true
    },
    {
        name: "ProfitSNFT",
        description: "ProfitSNFT is the official website for a yearly event hosted by the Faculty of Economics at the Autonomous University of the State of Mexico. It highlights the event's focus on global economics and leadership, providing detailed information on speakers, schedules, and registration. The website offers a smooth user experience with modern design and AWS-powered reliability.",
        image: "/images/profitsnft.webp",
        technologies: ["HTML", "CSS", "JavaScript", "AOS", "AWS"],
        liveUrl: "https://profitsnft.org",
        repoUrl: "https://github.com/LMSAIH/wwwsnft",
        public: true,
        live: true
    },
    {
        name: "Portfolio Website",
        description: "You're currently exploring it! This portfolio showcases my skills, projects, and experience. It offers a sleek and responsive design, featuring my deployed projects, technical expertise, and links to repositories and live demos. Built with React, TypeScript, and Tailwind CSS, it reflects my focus on clean code, performance, and user-friendly interfaces.",
        image: "/images/portfolio.webp",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        liveUrl: "/",
        repoUrl: "https://github.com/LMSAIH/axelportfolio2025",
        public: true,
        live: true
    },
    {
        name: "LCSC Scheduler",
        description: "LCSC Scheduler is an internal application designed for the Langara Computer Science Club, streamlining event and activity management. It offers an intuitive calendar view, role-based access, and customizable settings. The admin dashboard allows event organizers to view members' weekly availabilities by hourly slots, filter by roles and names, and efficiently coordinate events with clear visual scheduling.",
        image: "",
        technologies: ["React", "TypeScript", "TailwindCSS", "FullCalendar", "Python", "FastAPI", "Supabase", "Docker"],
        liveUrl: "https://project0-jade.vercel.app/",
        repoUrl: "https://github.com/LMSAIH/Image2Location",
        public: true,
        live: false
    },
 

];


    const indexOfLastProject = currentFeaturedPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = deployedProjects.slice(indexOfFirstProject, indexOfLastProject);
    const totalProjectPages = Math.ceil(deployedProjects.length / projectsPerPage);

    const paginateProjects = (pageNumber: number) => {
        setCurrentFeaturedPage(pageNumber);
    };

    const nextProjectPage = () => {
        if (currentFeaturedPage < totalProjectPages) {
            paginateProjects(currentFeaturedPage + 1);
        }
    };

    const prevProjectPage = () => {
        if (currentFeaturedPage > 1) {
            paginateProjects(currentFeaturedPage - 1);
        }
    };

    const fetchRepos = async (page = 1) => {
        try {
            setLoading(true);
            setError(null);

            const perPage = 100;
            const response = await fetch(`https://api.github.com/users/LMSAIH/repos?sort=updated&per_page=${perPage}&page=${page}`);

            if (!response.ok) {
                throw new Error(`Failed to fetch repositories: ${response.status}`);
            }

            const linkHeader = response.headers.get('Link');
            if (linkHeader) {
                const match = linkHeader.match(/page=(\d+)>; rel="last"/);
                if (match) {
                    setTotalRepos(parseInt(match[1]) * perPage);
                }
            }

            const data = await response.json();

            if (Array.isArray(data) && data.length > 0) {
                setRepos(data);
                setTotalRepos(Math.max(data.length, totalRepos));
            } else {
                setRepos([]);
            }

            setLoading(false);
        } catch (err) {
            console.error('Error fetching repos:', err);
            setError(err instanceof Error ? err.message : 'An error occurred fetching repositories');
            setLoading(false);
        }
    };

    // Get current repos
    const indexOfLastRepo = currentRepoPage * reposPerPage;
    const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
    const currentRepos = repos.slice(indexOfFirstRepo, indexOfLastRepo);
    const totalRepoPages = Math.ceil(repos.length / reposPerPage);

    // GitHub repos pagination functions
    const paginateRepos = (pageNumber: number) => {
        // Just update the page without scrolling
        setCurrentRepoPage(pageNumber);
    };

    const nextRepoPage = () => {
        if (currentRepoPage < totalRepoPages) {
            paginateRepos(currentRepoPage + 1);
        }
    };

    const prevRepoPage = () => {
        if (currentRepoPage > 1) {
            paginateRepos(currentRepoPage - 1);
        }
    };

    useEffect(() => {
        fetchRepos();
    }, []);

    return (
        <section
            id="projects"
            className="snap-start min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 relative"
            style={{
                backgroundImage: `radial-gradient(circle at 50% 50%, rgba(59, 34, 140, 0.1) 0%, transparent 80%)`,
            }}
        >
            {/* Background elements */}
            <div className="absolute top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-40 right-20 w-80 h-80 bg-violet-600/20 rounded-full blur-3xl -z-10"></div>

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
                        Projects
                    </h2>
                    <div className="h-1 w-24 bg-indigo-600 rounded"></div>
                </motion.div>

                {/* Deployed Projects Section */}
                <div className="mb-20" id="featured-projects">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-between items-center mb-8"
                    >
                        <h3 className="text-2xl font-medium text-white/90">
                            Featured & Deployed Products
                        </h3>

                        {/* Featured Projects Pagination - Top */}
                        {deployedProjects.length > projectsPerPage && (
                            <div className="flex items-center space-x-2">
                                <span className="text-neutral-400 text-sm">
                                    Page {currentFeaturedPage} of {totalProjectPages}
                                </span>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={prevProjectPage}
                                        disabled={currentFeaturedPage === 1}
                                        className={`p-2 rounded-full ${currentFeaturedPage === 1
                                            ? 'text-neutral-600 cursor-not-allowed'
                                            : 'text-neutral-300 hover:text-white hover:bg-neutral-800'}`}
                                        aria-label="Previous page"
                                    >
                                        <FiChevronLeft size={18} />
                                    </button>
                                    <button
                                        onClick={nextProjectPage}
                                        disabled={currentFeaturedPage === totalProjectPages}
                                        className={`p-2 rounded-full ${currentFeaturedPage === totalProjectPages
                                            ? 'text-neutral-600 cursor-not-allowed'
                                            : 'text-neutral-300 hover:text-white hover:bg-neutral-800'}`}
                                        aria-label="Next page"
                                    >
                                        <FiChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        key={`featured-page-${currentFeaturedPage}`}
                    >
                        {currentProjects.map((project, index) => (
                            <motion.div
                                key={`${project.name}-${index}`}
                                variants={itemVariants}
                                className="bg-neutral-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-neutral-800 hover:border-indigo-500/50 group"
                            >
                             {/* Project image/placeholder */}
<div
    className="h-48 overflow-hidden relative"
    style={{
        background: `linear-gradient(135deg, rgba(99, 73, 195, 0.2) 0%, rgba(33, 20, 80, 0.2) 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}
>
    <div className="absolute inset-0 opacity-20"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
        }}
    ></div>
    
    {project.image ? (
        <img 
            src={project.image} 
            alt={`${project.name} screenshot`}
            className="object-cover w-full h-full absolute inset-0 group-hover:scale-105 transition-transform duration-500"
        />
    ) : (
        <FiCode className="text-indigo-300 text-5xl group-hover:scale-110 transition-transform duration-500" />
    )}
    
    {project.image && (
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent opacity-60"></div>
    )}
</div>
                                <div className="p-6">
                                    <h4 className="text-xl font-medium text-white mb-2">{project.name}</h4>
                                    <div className="mb-4">
                                        {project.description && (
                                            <div className="mb-4">
                                                <ExpandableDescription description={project.description} />
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-5 flex flex-wrap gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex space-x-3 items-center mt-4">
                                        {project.live &&
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-md text-sm shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/50 transition-all hover:-translate-y-1"
                                            >
                                                <FiExternalLink className="mr-1" />
                                                Live Demo
                                            </a>
                                        }
                                        {project.public ?
                                            <a
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center text-neutral-300 hover:text-white px-3 py-1.5 text-sm transition-all hover:-translate-y-1"
                                            >
                                                <FiGithub className="mr-1" />
                                                Source
                                            </a> : <div className="flex items-center text-neutral-300 hover:text-white px-3 py-1.5 text-sm transition-all hover:-translate-y-1"> <FiGithub className="mr-1" /> Not Publicly Available </div>
                                        }
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Featured Projects Pagination - Bottom */}
                    {deployedProjects.length > projectsPerPage && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-center mt-10"
                        >
                            <div className="flex items-center space-x-1 bg-neutral-900/50 backdrop-blur-sm rounded-lg p-1 border border-neutral-800">
                                <button
                                    onClick={prevProjectPage}
                                    disabled={currentFeaturedPage === 1}
                                    className={`p-2 rounded-md ${currentFeaturedPage === 1
                                        ? 'text-neutral-600 cursor-not-allowed'
                                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800'}`}
                                    aria-label="Previous page"
                                >
                                    <FiChevronLeft size={18} />
                                </button>

                                {/* Page numbers */}
                                {Array.from({ length: totalProjectPages }, (_, i) => i + 1)
                                    .map((number) => (
                                        <button
                                            key={number}
                                            onClick={() => paginateProjects(number)}
                                            className={`w-8 h-8 flex items-center justify-center rounded-md ${currentFeaturedPage === number
                                                ? 'bg-indigo-600 text-white'
                                                : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                                                }`}
                                        >
                                            {number}
                                        </button>
                                    ))
                                }

                                <button
                                    onClick={nextProjectPage}
                                    disabled={currentFeaturedPage === totalProjectPages}
                                    className={`p-2 rounded-md ${currentFeaturedPage === totalProjectPages
                                        ? 'text-neutral-600 cursor-not-allowed'
                                        : 'text-neutral-300 hover:text-white hover:bg-neutral-800'}`}
                                    aria-label="Next page"
                                >
                                    <FiChevronRight size={18} />
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>

                {/* GitHub Repositories Section */}
                <div id="github-repos">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-between items-center mb-8"
                    >
                        <h3 className="text-2xl font-medium text-white/90">
                            Public GitHub Repositories
                        </h3>

                        {repos.length > reposPerPage && (
                            <div className="flex items-center space-x-2">
                                <span className="text-neutral-400 text-sm">
                                    Page {currentRepoPage} of {totalRepoPages}
                                </span>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={prevRepoPage}
                                        disabled={currentRepoPage === 1}
                                        className={`p-2 rounded-full ${currentRepoPage === 1
                                            ? 'text-neutral-600 cursor-not-allowed'
                                            : 'text-neutral-300 hover:text-white hover:bg-neutral-800'}`}
                                        aria-label="Previous page"
                                    >
                                        <FiChevronLeft size={18} />
                                    </button>
                                    <button
                                        onClick={nextRepoPage}
                                        disabled={currentRepoPage === totalRepoPages}
                                        className={`p-2 rounded-full ${currentRepoPage === totalRepoPages
                                            ? 'text-neutral-600 cursor-not-allowed'
                                            : 'text-neutral-300 hover:text-white hover:bg-neutral-800'}`}
                                        aria-label="Next page"
                                    >
                                        <FiChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        )}
                    </motion.div>

                    {loading ? (
                        <div className="flex justify-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                        </div>
                    ) : error ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="py-12 text-center bg-neutral-900/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-800"
                        >
                            <p className="text-red-400 mb-4">{error}</p>
                            <button
                                onClick={() => fetchRepos()}
                                className="flex items-center mx-auto px-4 py-2 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 shadow-lg shadow-indigo-900/30 hover:shadow-indigo-900/50 transition-all hover:-translate-y-1"
                            >
                                <FiRefreshCw className="mr-2" /> Retry
                            </button>
                        </motion.div>
                    ) : repos.length === 0 ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="py-12 text-center bg-neutral-900/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-800"
                        >
                            <p className="text-neutral-400">No repositories found. Make sure you have public repositories on GitHub.</p>
                        </motion.div>
                    ) : (
                        <>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                                key={`repo-page-${currentRepoPage}`} // Re-render the grid when page changes
                            >
                                {currentRepos.map((repo) => (
                                    <motion.div
                                        key={repo.id}
                                        variants={itemVariants}
                                        className="bg-neutral-900/80 backdrop-blur-sm rounded-xl p-6 border border-neutral-800 hover:border-indigo-500/30 flex flex-col h-full"
                                    >
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex items-center">
                                                <FiCode className="text-indigo-400 mr-2" />
                                                <h4 className="font-medium text-lg text-white">{repo.name}</h4>
                                            </div>
                                            <a
                                                href={repo.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-neutral-400 hover:text-white transition-colors"
                                            >
                                                <FiGithub size={18} />
                                            </a>
                                        </div>

                                        <p className="text-neutral-400 text-sm mb-4 flex-grow">
                                            {repo.description || "No description available"}
                                        </p>

                                        {repo.topics && repo.topics.length > 0 && (
                                            <div className="mb-4 flex flex-wrap gap-1.5">
                                                {repo.topics.slice(0, 3).map((topic, i) => (
                                                    <span key={i} className="text-xs bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded-full">
                                                        {topic}
                                                    </span>
                                                ))}
                                                {repo.topics.length > 3 && (
                                                    <span className="text-xs text-neutral-500">+{repo.topics.length - 3} more</span>
                                                )}
                                            </div>
                                        )}

                                        <div className="flex items-center text-sm text-neutral-500 mt-auto pt-3 border-t border-neutral-800">
                                            {repo.language && (
                                                <div className="flex items-center mr-4">
                                                    <span className="h-3 w-3 rounded-full mr-1" style={{
                                                        backgroundColor: getLanguageColor(repo.language)
                                                    }}></span>
                                                    <span>{repo.language}</span>
                                                </div>
                                            )}
                                            <div className="flex items-center mr-4">
                                                <FiStar className="mr-1" />
                                                <span>{repo.stargazers_count}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <FiGitBranch className="mr-1" />
                                                <span>{repo.forks_count}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* GitHub Repos Pagination - Bottom */}
                            {repos.length > reposPerPage && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-center mt-10"
                                >
                                    <div className="flex items-center space-x-1 bg-neutral-900/50 backdrop-blur-sm rounded-lg p-1 border border-neutral-800">
                                        <button
                                            onClick={prevRepoPage}
                                            disabled={currentRepoPage === 1}
                                            className={`p-2 rounded-md ${currentRepoPage === 1
                                                ? 'text-neutral-600 cursor-not-allowed'
                                                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'}`}
                                            aria-label="Previous page"
                                        >
                                            <FiChevronLeft size={18} />
                                        </button>

                                        {/* Page numbers */}
                                        {Array.from({ length: totalRepoPages }, (_, i) => i + 1)
                                            // Show limited page numbers with ellipsis
                                            .filter(num =>
                                                num === 1 ||
                                                num === totalRepoPages ||
                                                (num >= currentRepoPage - 1 && num <= currentRepoPage + 1)
                                            )
                                            .map((number, index, array) => {
                                                // Add ellipsis
                                                if (index > 0 && array[index - 1] !== number - 1) {
                                                    return (
                                                        <React.Fragment key={`ellipsis-${number}`}>
                                                            <span className="px-2 py-1 text-neutral-500">...</span>
                                                            <button
                                                                key={number}
                                                                onClick={() => paginateRepos(number)}
                                                                className={`w-8 h-8 flex items-center justify-center rounded-md ${currentRepoPage === number
                                                                    ? 'bg-indigo-600 text-white'
                                                                    : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                                                                    }`}
                                                            >
                                                                {number}
                                                            </button>
                                                        </React.Fragment>
                                                    );
                                                }
                                                return (
                                                    <button
                                                        key={number}
                                                        onClick={() => paginateRepos(number)}
                                                        className={`w-8 h-8 flex items-center justify-center rounded-md ${currentRepoPage === number
                                                            ? 'bg-indigo-600 text-white'
                                                            : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                                                            }`}
                                                    >
                                                        {number}
                                                    </button>
                                                );
                                            })
                                        }

                                        <button
                                            onClick={nextRepoPage}
                                            disabled={currentRepoPage === totalRepoPages}
                                            className={`p-2 rounded-md ${currentRepoPage === totalRepoPages
                                                ? 'text-neutral-600 cursor-not-allowed'
                                                : 'text-neutral-300 hover:text-white hover:bg-neutral-800'}`}
                                            aria-label="Next page"
                                        >
                                            <FiChevronRight size={18} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

const getLanguageColor = (language: string): string => {
    const colors: Record<string, string> = {
        JavaScript: '#f1e05a',
        TypeScript: '#3178c6',
        HTML: '#e34c26',
        CSS: '#563d7c',
        Python: '#3572A5',
        Java: '#b07219',
        Ruby: '#701516',
        PHP: '#4F5D95',
        Go: '#00ADD8',
    };

    return colors[language] || '#6e56cf';
};

export default Projects;