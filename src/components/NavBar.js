import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assests/img/lg1.png";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "skills", "project", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const current = document.getElementById(sections[i]);
        const next = document.getElementById(sections[i + 1]);

        if (current) {
          const currentTop = current.offsetTop;
          const nextTop = next ? next.offsetTop : Number.MAX_VALUE;

          if (scrollPos >= currentTop && scrollPos < nextTop) {
            if (activeLink !== sections[i]) {
              setActiveLink(sections[i]);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // trigger once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, [activeLink]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Router>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand onClick={() => scrollToSection("home")}>
            <img src={logo} alt="Logo" style={{ cursor: "pointer" }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                onClick={() => scrollToSection("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                className={activeLink === "project" ? "active navbar-link" : "navbar-link"}
                onClick={() => scrollToSection("project")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                className={activeLink === "contact" ? "active navbar-link" : "navbar-link"}
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
