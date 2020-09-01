import React, { useState, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from 'react-photo-gallery'
import { photos } from './photos/Photos'
import  s from './LastProjects.module.css'





function LastProjects() {
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
        <Container fluid className={s.lastProjects} id="gallery">
            <h2>Примеры наших <br/> проектов</h2>
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
    )
}



export default LastProjects