"use client";

import { useState } from "react";
import { portfolioSections } from "../constants/index";

type NavBoxProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NavBox = ({ isOpen, onClose }: NavBoxProps) => {
  return (
    <div
      id="mobile-navigation"
      aria-hidden={!isOpen}
      className={`nav-box ${
        isOpen ? "nav-box-open" : "nav-box-closed"
      }`}
    >
      {portfolioSections.map((section, index) => (
        <a
          key={section.id}
          href={section.href}
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          className={
            section.id === "contact"
              ? "nav-item nav-cta"
              : "nav-item nav-link"
          }
          style={{transitionDelay: `${index * 80}ms`}}
        >
          {section.label}
        </a>
      ))}
    </div>
  );
};

const NavTabs = () => {
  return (
    <div className="nav-tabs">
      {portfolioSections.map((section) => (
        <a
          key={section.id}
          href={section.href}
        >
          {section.label}
        </a>
      ))}
    </div>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav>
        <a href="/" aria-label="Accueil">
          <img
            id="logo"
            src="/logo.svg"
            alt="Logo"
          />
        </a>

        <NavTabs />

        <button
          type="button"
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label={
            isOpen
              ? "Fermer le menu"
              : "Ouvrir le menu"
          }
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <img
            src="/logo.svg"
            alt=""
          />
        </button>
      </nav>

      <NavBox
        isOpen={isOpen}
        onClose={closeMenu}
      />
    </header>
  );
};

export default NavBar;