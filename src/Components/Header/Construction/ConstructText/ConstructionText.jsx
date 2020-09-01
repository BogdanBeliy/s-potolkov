import React from 'react'
import { Col } from 'react-bootstrap'
import s from './ConstructionText.module.css'
import arrowLong from '../../../../assets/construct/arrowLong.svg'




export default class ConstructionText extends React.Component {
    render() {
        return (
            <Col lg="6" sm="12" xs="12" className={s.constructTextBlock}>
                <h2 className={s.constructText}>конструкции
                потолков,
                которые мы
                устанавливаем
                <img src={arrowLong} className={s.arrowImg}/>
                </h2>
                
            </Col>
        )
    }
}