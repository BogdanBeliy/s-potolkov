import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import s from './Utp.module.css'
import BtnCalc from './BtnCalc/BtnCalc'
import ScrollAnimation from 'react-animate-on-scroll'




export default class Utp extends React.Component{
    
    render(){
       
        return(
           <Container fluid className={s.utp}>
               <Row>
                   <Col md="12">
                       <ScrollAnimation animateIn="fadeIn">
        <p className={s.pg}>производство, монтаж и проектирование</p>
            <h1 className={s.mainText}>Натяжных <br/>
            потолков</h1>
            <b className={s.bText}>любой сложности</b>
            <BtnCalc/>
            </ScrollAnimation>
                   </Col>
               </Row>
           </Container>
        )
    }
}