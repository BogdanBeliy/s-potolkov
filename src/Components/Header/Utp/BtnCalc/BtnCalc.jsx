import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap'
import s from './BtnCalc.module.css'
import Forma from '../../../CalbackForm/Forma/Forma';





function BtnCalc(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
     <div className={s.btnCalcBlock}>
        <Button className={s.btnCalc} onClick={handleShow}>
          Узнать стоимость
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Заполните форму</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Forma/>
          </Modal.Body>
          
        </Modal>
        </div>
    );
  }
  


export default BtnCalc