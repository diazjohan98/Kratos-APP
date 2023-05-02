import React, { useState } from 'react'
import { DataTablaTecnologias } from './sections/tecnologias/DataTablaTecnologias'
import './Styles/tablaTecnologiaStyles.css'
import { Button, Modal } from 'react-bootstrap';
import { ModalTablaTecnologias } from '../../../../../components/modalTablaTecnologias/ModalTablaTecnologias';

export const TablaTecnologias = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <div className='containerTitleTablaTecnologia'>
      <p className='titleWelcome lista'>Lista de tecnologías</p>
      <div className='filterBtnTablaAdmin'>
        <Button onClick={abrirModal} variant="primary" className='btnAgregarCRUD' >Nueva tecnología</Button>
        <Modal className="containerModal-Colaborador" show={mostrarModal} onHide={cerrarModal} size="lg"
          aria-labelledby="example-modal-sizes-title-lg">
          <Modal.Header closeButton>
            <Modal.Title className="tituloModal">Crear un nuevo colaborador</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalTablaTecnologias />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" className='btnAgregarCRUD'>Crear</Button>
            <Button variant="secondary" className="btnCerrarCRUD" onClick={cerrarModal}>
              Cancelar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <DataTablaTecnologias />
    </div>
  )
}
