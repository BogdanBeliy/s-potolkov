import React, { Component,useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dvux from '../../../../assets/header/images/dvux.jpg'
import odnourov from '../../../../assets/header/images/odnourov.jpg'
import dvuxPodsv from '../../../../assets/header/images/dvux_podsv.jpg'
import parline from '../../../../assets/header/images/par_line.jpg'
import paryaschiy from '../../../../assets/header/images/paryaschiy.jpg'
import s from './ConstructCard.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import Carousel, { PagingDots } from 'nuka-carousel'
import {animateScroll} from 'react-scroll'





export default class ConstructionCard extends Component {
    render() {
        return (

            <>

                <Col lg="6" md="12" sm="12" xs="12">
                    <NavLink onClick={animateScroll.scrollToTop} to="/odnourovnevie" className={[s.card]}>
                        <img src={odnourov} alt="" />
                        <h3>одноуровневые <FontAwesomeIcon icon={faArrowRight} /></h3>
                    </NavLink>
                </Col>
                
                
                <Col sm="12" md="12" sm="12"  lg="6" className="m-auto constructCard">
                    <NavLink onClick={animateScroll.scrollToTop} to="/dvuhurovnevie" className={[s.card]}>
                        <img src={dvux} alt="" />
                        <h3>двухуровневые <FontAwesomeIcon icon={faArrowRight} /></h3>
                    </NavLink>
                </Col>
                <Col sm="12" md="12" sm="12"  lg="6" className="m-auto constructCard">
                    <NavLink onClick={animateScroll.scrollToTop} to="/dvuhurovnevie-s-podsvetkoi" className={[s.card]}>
                        <img src={dvuxPodsv} alt="" />
                        <h3>двухуровневые с подсветкой <FontAwesomeIcon icon={faArrowRight} /></h3>
                    </NavLink>
                </Col>
                <Col sm="12" md="12" sm="12"  lg="6" className="m-auto constructCard">
                    <NavLink onClick={animateScroll.scrollToTop} to="/paraschie-linii" className={[s.card]}>
                        <img src={parline} alt="" />
                        <h3>парящие линии <FontAwesomeIcon icon={faArrowRight} /></h3>
                    </NavLink>
                </Col>
                <Col sm="12" md="12" sm="12" lg="6" className="m-auto constructCard">
                    <NavLink onClick={animateScroll.scrollToTop} to="/paraschii-potolok" className={[s.card]}>
                        <img src={paryaschiy} alt="" />
                        <h3>парящий потолок <FontAwesomeIcon icon={faArrowRight} /></h3>
                    </NavLink>
                </Col>
               




            </>

        )
    }
}