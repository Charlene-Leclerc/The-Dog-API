import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="sm">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Container>
                <div className="brand-box">

                    <Navbar.Brand href="/" className='navbar-brand'>MY DOG FRIENDLY</Navbar.Brand>
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/#about">A propos</Nav.Link>
                        <Nav.Link href="/#dog">Chiens</Nav.Link>
                        <Nav.Link href="/#cat">Chats</Nav.Link>
                        <Nav.Link href="/#contact"> Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Navigation;