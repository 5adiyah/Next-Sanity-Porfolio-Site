import React, { useState } from 'react';
import hamburger from '../../assets/hamburger.png';
import logo from '../../assets/logo.png';
import closeBtn from '../../assets/close-btn.png';

export const Navbar = () => {
    const [openMenu, setMenuState] = useState(false);

    const toggleMenu = () => {
        setMenuState((prevState) => !prevState);
    };

    return (
        <nav className="navigation" aria-label="Main Navigation">
            {/* Logo */}
            <div className="logo">
                <img src={logo} alt="Portfolio Site Logo" />
            </div>

            {/* Menu Button */}
            <button
                className="menu-btn"
                onClick={toggleMenu}
                aria-expanded={openMenu}
                aria-controls="main-menu"
                aria-label={openMenu ? "Close menu" : "Open menu"}
            >
                <img
                    src={openMenu ? closeBtn : hamburger}
                    alt=""
                    aria-hidden="true"
                />
            </button>

            {/* Menu Items */}
            <ul
                id="main-menu"
                className={`menu-items ${openMenu ? 'showMenu' : ''}`}
                role="menu"
                aria-hidden={!openMenu}
                tabIndex={openMenu ? 0 : -1}
            >
                <li role="menuitem">
                    <a href="#about" onClick={toggleMenu}>About</a>
                </li>
                <li role="menuitem">
                    <a href="#portfolio" onClick={toggleMenu}>Portfolio</a>
                </li>
                <li role="menuitem">
                    <a href="#contact" onClick={toggleMenu}>Contact</a>
                </li>
            </ul>
        </nav>
    );
};
