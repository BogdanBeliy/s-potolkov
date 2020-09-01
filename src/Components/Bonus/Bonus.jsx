import React from 'react'
import s from './Bonus.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import BtnCalc from '../Header/Utp/BtnCalc/BtnCalc'
import svet from '../../assets/header/images/bonus/montana.png'
import karniz from '../../assets/header/images/bonus/karniz.png'





export default class Bonus extends React.Component{
    render(){
        return(
            <Container fluid className={s.bonus} id="bonus">
                <Row>
                    <Col md="12" lg="6" className={s.bonusText}>
                        <h2 className={s.zag}>Отличный бонус</h2>
                        <b>при заказе от 15 кв.м <h2 className={s.inPrice}>мы дарим</h2></b>
                        <h3 className={s.present}>4 светильника "Montana MR 16 Хром" <span className={s.or}>или</span> Потолочный карниз</h3>

                        <BtnCalc/>
                        </Col>
                        <Col md="12" lg="6" className={s.bonusImg}>
                            <img src={svet} alt="1"/>
                            <img src={karniz} alt="1"/>

                        </Col>
                        </Row>
            </Container>
        )
    }
}