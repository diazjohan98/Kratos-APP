import React, { useState } from "react";
import '../styles/proyectosPagesStyle.css'
// import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { TablaProyectoPage } from './sections/TablaProyectoPage';
// import { Modal } from '../../../../components/modal/Modal';
import { Button, Modal } from 'react-bootstrap';
import { ModalForm } from "../../../../components/modalForm/ModalForm";



export const ProyectosPage = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <div className='mainProyectos'>
      <div>
        <div className='containerTitleProyecto'>
          <p className='titleWelcome lista'>Lista de proyectos</p>
          <div className='filterBtn'>
            <InputGroup className="mb-3 inputSearch inputListasFilter">
              <Form.Control
                placeholder="Buscar por proyecto"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className='inputSelector'
              />
              <Button className='btnPrincipalInput' variant="outline-secondary" id="button-addon2">
                Buscar
              </Button>
            </InputGroup>
            <Button onClick={abrirModal} variant="primary" className='btnAgregarCRUD' >Nuevo proyecto</Button>
            <Modal show={mostrarModal} onHide={cerrarModal}>
              <Modal.Header closeButton>
                <Modal.Title className="tituloModal">Crear un nuevo proyecto</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ModalForm />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" className='btnAgregarCRUD'>Crear</Button>
                <Button variant="secondary" className="btnCerrarCRUD" onClick={cerrarModal}>
                  Cancelar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className='containerProyecto'>
          <TablaProyectoPage />
        </div>
      </div>
    </div>
  )
}
