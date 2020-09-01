import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAd, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faViber, faTelegram, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import s from './CallBack.module.css'
import Forma from './Forma/Forma'





export default class CallbackForm extends React.Component {
    render() {
        return (
            <Container fluid className={s.callBack} id="contacts">
                <Row>
                    <Col className={s.contact} md="12" lg="6">
                        <h2 className={s.callBackText}>Присылайте ваши проекты </h2>
                        <h4 className={s.callBackH4}>На электронную почту:</h4>
                        <a className={s.itemLink} href="#">example@mail.ru</a><br />
                        <h4 className={s.callBackH4}>В социальные сети и мессенджеры:</h4>
                        <b className={s.icons}>
                            <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
                            <a href="#"><FontAwesomeIcon icon={faViber} /></a>
                        </b>
                        <h4 className={s.callBackH4}>На номер телефона:</h4>
                        <a className={s.itemLink} href="tel:+375297777777"><FontAwesomeIcon icon={faPhone}/>   +375297777777</a>
                    </Col>
                    <Col className={s.forma} md="12" lg="6">
                    <h3>Бесплатная <br/> консультация</h3>
                      <Forma/>
                    </Col>
                </Row>
            </Container>
        )
    }
}