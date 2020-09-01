import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import s from './Garant.module.css'
import {faArrowRight, faCogs, faClock, faRuler, faRulerCombined, faPencilRuler, faSwatchbook} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'





export default class Garant extends React.Component{
    render(){
        return(
            <Container fluid className={s.garant}>
                <h2 className={s.garantText}>Нас уже выбрали <b className={s.num}>22 310</b> <br/> жильцов столицы</h2>
                <Row>
                    
                    <Col lg="4" md="6" className={s.garantCard}>
                        <FontAwesomeIcon icon={faCogs}/>
                        <p>Собственное производство</p>
                    </Col>
                    <Col lg="4" md="6" className={s.garantCard}>
                        <FontAwesomeIcon icon={faPencilRuler}/>
                        <p>Беслпатный замер и консультация</p>
                    </Col>
                    <Col lg="4" md="6" className={s.garantCard}>
                        <FontAwesomeIcon icon={faClock}/>
                        <p>Монтаж до 3-х часов</p>
                    </Col>
                    <Col lg="4" md="6" className={s.garantCard}>
                        <FontAwesomeIcon icon={faSwatchbook}/>
                        <p>Более 180 фактур в наличии</p>
                    </Col>
                    <Col lg="4" md="6" className={s.garantCard}>
                        <FontAwesomeIcon icon={faCogs}/>
                        <p>Любая сложность потолков</p>
                    </Col>
                    <Col lg="4" md="6" className={s.garantCard}>
                        <FontAwesomeIcon icon={faCogs}/>
                        <p>Более 600 000 кв.м потолков установлено</p>
                    </Col>
                </Row>
            </Container>
        )
    }

}