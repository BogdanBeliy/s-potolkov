import React from 'react'
import s from './Construct.module.css'
import { Container, Row } from 'react-bootstrap'
import ConstructionText from './ConstructText/ConstructionText'
import ConstructionCard from './ConstructCard/ConstructionCard'







export default class Construct extends React.Component{
    render(){
        return(
            <Container fluid className={s.construct} id="construct">
                <Row>
                    <ConstructionText/>
                    <ConstructionCard/>
                  
                </Row>
            </Container>
        )
    }
}