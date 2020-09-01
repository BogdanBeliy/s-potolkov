import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import s from './HowWeWork.module.css'




export default class HowWeWork extends React.Component{
    render(){
        return(
            <Container fluid className={s.howWeWork}>
                <h2 className={s.howWeWorkText}>как мы работаем</h2>
                <Row>
                    <Col md="6" sm="12" className={s.item}>
                        <span>1</span>
                        <p>Связываетесь с нами по телефону, через соц. сети или заполняете заявку на сайте, для уточнения деталей работы</p>
                    </Col>
                    <Col md="6" sm="12" className={s.item}>
                        <span>2</span>
                        <p>Замер. В оговоренное время к Вам выезжает дизайнер-замерщик, что бы снять точные размеры вашего потолка, со всеми нюансами</p>
                    </Col>
                    <Col md="6" sm="12" className={s.item}>
                        <span>3</span>
                        <p>Изготовление Вашего потолка с учетом всех нюансов помещения, в течении 3-х дней со дня подписания договора.</p>
                    </Col>
                    <Col md="6" sm="12" className={s.item}>
                        <span>4</span>
                        <p>Монтируем потолок, не ранее 2-го дня, с даты подписания договора. Монтаж занимает не менее 2-х часов.</p>
                    </Col>
                    
                </Row>
            </Container>
        )
    }
}