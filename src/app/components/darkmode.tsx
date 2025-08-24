'use client'

import { useState, useEffect } from "react";
import NavBar from "./Navbar";
import AboutSection from "./About";
import HeroSection from "./Hero";
import ContactSection from "./Contact";
import ProjectsSection from "./Project";
import Footer from "./Footer";





export default function Darkmode() {
    const [darkMode, setDarkMode] = useState(false);


    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };


    useEffect(function setupdarkmode() {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);
    return (
        <div>




            <div className={darkMode ? 'dark' : ''}>
                <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors">
                    <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <HeroSection />
                    <AboutSection />
                    <ProjectsSection />
                    <ContactSection />
                    <Footer />
                </div>
            </div>



        </div>
    )
}


