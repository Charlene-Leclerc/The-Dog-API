import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const BackNav = () => {
    return (


        <Navbar collapseOnSelect expand="sm">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Container>
                <div className="brand-box">
                    <Link className='nav-brand' to='/' smooth={true} duration={100}>MY DOG FRIENDLY</Link>
                </div>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Link to='/' > <FontAwesomeIcon icon={faRightFromBracket} style={{ color: "#ffffff", }} /></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
};

export default BackNav;