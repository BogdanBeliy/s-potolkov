import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from 'react-photo-gallery'
import { photos } from './photos/Photos'
import s from './Dvuhurovnevie.module.css'
import Footer from "../../Footer/Footer";
import CallbackForm from "../../CalbackForm/CallbackForm";
import Garant from "../../Garant/Garant";
import BtnCalc from "../../Header/Utp/BtnCalc/BtnCalc";
import Bonus from "../../Bonus/Bonus";



import ConstructNavbar from "../ConstructNavbar";





export default function DvuhPodsv() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <>
            <Container fluid className={s.lastProjects} id="gallery">
            <ConstructNavbar/>
                <div className={s.textBlock}>
                    <p className={s.pg}>производим, монтируем и проектируем</p>
                    <h2>Двухуровневые потолки с подсветкой</h2>
                    <b className={s.bText}>любой сложности</b>
                    <BtnCalc className={s.btnGalery} />
                </div>
               

                <Row>


                    <Col md="12">
                        <Gallery photos={photos} onClick={openLightbox} />
                        <ModalGateway>
                            {viewerIsOpen ? (
                                <Modal onClose={closeLightbox}>
                                    <Carousel
                                        currentIndex={currentImage}
                                        views={photos.map(x => ({
                                            ...x,
                                            srcset: x.srcSet,
                                            caption: x.title
                                        }))}
                                    />
                                </Modal>
                            ) : null}
                        </ModalGateway>
                    </Col>
                </Row>
            </Container>
            <Bonus/>
            <Garant />
            <CallbackForm />
            <Footer />
        </>
    )
}



