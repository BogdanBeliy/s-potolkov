import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import s from './Footer.module.css'
import { NavLink } from 'react-router-dom'
import {animateScroll} from 'react-scroll'




export default class Footer extends React.Component{
    render(){
        return(
            <Container className="footer" fluid>
                <Row>
                    <Col md="12">
                        <hr/>
                        
                        <div className={s.linkFooter}>
                            <NavLink onClick={animateScroll.scrollToTop} to="/dvuhurovnevie" className={s.item}>Двухуровненвые</NavLink>
                            <NavLink onClick={animateScroll.scrollToTop} to="/odnourovnevie" className={s.item}>Одноуровневые</NavLink>
                            <NavLink onClick={animateScroll.scrollToTop} to="/dvuhurovnevie-s-podsvetkoi" className={s.item}>Двухуровненвые с подсветкой</NavLink>
                            <NavLink onClick={animateScroll.scrollToTop} to="/paraschie-linii" className={s.item}>Парящие линии</NavLink>
                            <NavLink onClick={animateScroll.scrollToTop} to="/paraschii-potolok" className={s.item}>Парящие потолоки</NavLink>
                        </div>
                        <hr/>
                        <p>© Все права защищены</p>
                    </Col>
                </Row>
            </Container>
        )
    }
} 