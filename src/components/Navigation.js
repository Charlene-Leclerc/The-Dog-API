import React, { useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Navigation = () => {
    const [activeLink, setActiveLink] = useState('home');

    const handleClick = (link) => {
        setActiveLink(link)
        console.log(activeLink)
    }
    return (
        <Navbar collapseOnSelect expand="sm">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Container>
                <div className="brand-box">

                    <Link className='nav-brand' to='home' smooth={true} duration={100}>MY DOG FRIENDLY</Link>
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link onClick={() => handleClick('home')}
                            className={activeLink === 'home' ? 'nav-activ' : 'nav-link'}
                            to='home' smooth={true} duration={100}>Accueil</Link>

                        <Link onClick={() => handleClick('about')}
                            className={activeLink === 'about' ? 'nav-activ' : 'nav-link'}
                            to='about' smooth={true} duration={100}>A Propos</Link>
                        <Link onClick={() => handleClick('dog')}
                            className={activeLink === 'dog' ? 'nav-activ' : 'nav-link'}
                            to='dog' smooth={true} duration={100}>Chiens</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;