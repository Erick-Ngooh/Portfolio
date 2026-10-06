"use client";

import { portfolioSections } from "../constants/index";
import { useState } from "react";

const NavBox = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <>
            <div className={`nav-box ${isOpen ? "nav-box-open" : "nav-box-closed"}`}>
                {portfolioSections.map((section: { id: string; href: string; label: string }) => (
                    <a
                        key={section.id} href={section.href}
                        className={
                            section.id === "contact"
                                ? "nav-cta" : "nav-link"
                        }
                    >
                        {section.label}
                    </a> 
                ))}
            </div>
        </>
    );
}

const NavTabs = () => {
    return (
        <>
            <div className="nav-tabs">
                {portfolioSections.map((section: { id: string; href: string; label: string }) => (
                    <a key={section.id} href={section.href}>
                        {section.label}
                    </a> 
                ))}
            </div>
        </>
    );
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header>
                <nav>
                    <a href="/">
                        <img id="logo" src="/logo.svg" alt="Logo"/> 
                    </a>
                    <NavTabs />
                    <button type="button" onClick={() => setIsOpen(!isOpen)} className="nav-toggle">
                        <img src="/logo.svg" alt="Logo"/>
                    </button>
                </nav> 
                <NavBox isOpen={isOpen} />
            </header> 
        </>
    );
};

export default NavBar;