import s from './NavbarMenu.module.css'
import React from 'react'
import {Navbar, Nav } from 'react-bootstrap'
import logo from '../../../assets/header/images/logo.svg'
import {Link, animateScroll as scroll} from 'react-scroll'


export default class NavbarMenu extends React.Component {
    render() {
        return (
            <div className={ s.back }>
            <Navbar expand="lg" variant="light">
                <Navbar.Brand href="/"><img src={logo} alt="" srcset=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto menu">
                        <Nav.Link className={ [s.menuLink] }><Link activeClass="active" spy={true} smooth={true} offset={-70}  duration= {300} to="construct">Конструкции</Link></Nav.Link>
                        <Nav.Link className={s.menuLink}><Link activeClass="active" spy={true} smooth={true} offset={-70}  duration= {300} to="bonus">Бонус</Link></Nav.Link>
                        <Nav.Link className={s.menuLink}><Link activeClass="active" spy={true} smooth={true} offset={-120}  duration= {300} to="gallery">Галерея</Link></Nav.Link>
                        <Nav.Link className={s.menuLink}><Link activeClass="active" spy={true} smooth={true} offset={-70}  duration= {300} to="contacts">Контакты</Link> </Nav.Link>
                        <Nav.Link className={s.phone} href="tel:+375291234567">+375291234567</Nav.Link>
                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
            </div>
        )
    }
} 