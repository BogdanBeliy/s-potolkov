import React from 'react'
import s from './ConstructNavbar.module.css'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../../assets/header/images/logo.svg'
import {Link, animateScroll as scroll} from 'react-scroll'





export default class ConstructNavbar extends React.Component{
    render(){
        return(
            <Navbar fixed="top" expand="lg" variant="light" bg="light">
                <Navbar.Brand href="/"><img src={logo} alt="" srcset=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto menu">
                        <Nav.Link className={s.menuLink}><Link activeClass="active" spy={true} smooth={true} offset={-70}  duration= {300} to="bonus">Бонус</Link></Nav.Link>
                        <Nav.Link className={s.menuLink}><Link activeClass="active" spy={true} smooth={true} offset={-70}  duration= {300} to="contacts">Контакты</Link> </Nav.Link>
                        <Nav.Link className={s.phone} href="tel:+375291234567">+375291234567</Nav.Link>
                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
        )
    }
}