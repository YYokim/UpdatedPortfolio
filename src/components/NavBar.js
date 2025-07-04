import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from "../assests/img/lg1.png";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
    <Router>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'}onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#project"className={activeLink === 'project' ? 'active navbar-link': 'navbar-link'}onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
                        <Nav.Link href="#contact"className={activeLink === 'contact' ? 'active navbar-link': 'navbar-link'}onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Router>
    );
}