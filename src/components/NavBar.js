import './NavBar.css'
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import ContactLink from './ContactLink';

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <header className='nav-header'>
                GarraGigante
            </header>
            <ul className='nav-items'>
                <li><ScrollLink to="about" smooth={true} duration={500} offset={-50}>Sobre nós</ScrollLink></li>
                <li><ScrollLink to="media" smooth={true} duration={500} offset={-50}>Na mídia</ScrollLink></li>
                <li><ScrollLink to="garra" smooth={true} duration={500} offset={-50}>A GarraGigante</ScrollLink></li>
                <li><ScrollLink to="services" smooth={true} duration={500} offset={-50}>Servicos</ScrollLink></li>
                <li><ScrollLink to="contact" smooth={true} duration={500} offset={-50}>Contato</ScrollLink></li>
            </ul>
            <ContactLink text="Contrate já!" />
        </nav>
    )
}

export default NavBar