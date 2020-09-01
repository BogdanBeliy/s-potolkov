import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { YMaps, Map } from 'react-yandex-maps'
import s from './MapBlock.module.css'





export default class MapBlock extends React.Component {
    render() {
        return (
            <Container fluid className={s.map}>
                <h2>бесплатный выезд <br /> дизайнера-замерщика</h2>
                <p>за пределами синей зоны, выезд дизайнера-замерщика оговаривается в индивидуальном порядке</p>
                <Row>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae4b5bde8e1d9c32102e69e414dd687b5b1cd4fb28ecae5e69cb466d55a17a9ec&amp;source=constructor" width="100%" height="609" frameborder="0"></iframe>
                </Row>
            </Container>
        )
    }
}






