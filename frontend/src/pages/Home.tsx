import React from 'react';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import KnowMe from '../components/KnowMe';
import Experience from '../components/Experience';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="md:snap-y md:snap-mandatory h-screen w-full overflow-y-auto overflow-x-hidden bg-neutral-950 text-white scroll-smooth">
            <Navbar />
            <Introduction />
            <Projects />
            <KnowMe />
            <Experience />
            <Footer />
        </div>
    );
};

export default Home;