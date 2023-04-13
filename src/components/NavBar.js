import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/img/logo-native.jpg'
import instagram from '../assets/img/instagram.png'
import whatsapp from '../assets/img/whatsapp.png'
import linkedin from '../assets/img/linkedin.png'
// import logomarca from '../assets/img/logomarca-native.png'

export const NavBar = () => {
    const {activeLink, setActiveLink} = useState('home');
    const {scrolled, seScrolled} = useState(false);

    // useEffect(() => {
    //     const onScroll = () => {
    //         if (window.scrollY > 50) {
    //             seScrolled(true);
    //         } else {
    //             seScrolled(false);
    //         }
    //     }

    //     window.addEventListener("scroll", onScroll);

    //     return () => window.removeEventListener("scroll", onScroll);
    // }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>Quem Somos</Nav.Link>
                        <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Serviços</Nav.Link>
                        <Nav.Link href="#team" className={activeLink === 'team' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('team')}>Equipe</Nav.Link>
                        <Nav.Link href="#budget" className={activeLink === 'budget' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('budget')}>Peça um orçamento</Nav.Link>
                        <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contato</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={instagram} alt=""/></a>
                            <a href="#"><img src={whatsapp} alt=""/></a>
                            <a href="#"><img src={linkedin} alt=""/></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Login</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}