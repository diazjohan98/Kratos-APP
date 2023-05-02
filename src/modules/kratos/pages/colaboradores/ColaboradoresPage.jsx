import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { TablaColaboradoresPage } from './sections/TablaColaboradoresPage';
import '../styles/colaboradoresStyles.css'
import { ModalFormColaboradores } from "../../../../components/modalFormColaboradores/ModalFormColaboradores";
import { ColaboradoresService } from "../../../../services/colaboradores.service";
import { DateFormatUtility } from "../../../../utilities/dateFormat.utility";
import { validarCreacionColaborador, validarFechasColaborador } from "../../../../components/modalFormColaboradores/validacionesColaboradores";

export const ColaboradoresPage = () => {
  const [mostrarModal, setMostrarModal] = useState(false);

  const [nuevoColaborador, setNuevoColaborador] = useState({
    first_name: "",
    last_name: "",
    identification_type_id: 0,
    identification: "",
    education_level_id: 0,
    birthdate: "",
    email: "",
    cellphone_number: "",
    city_id: 0,
    occupation_id: 0,
    entry_date: "",
    retirement_date: "",
    collaborator_status_id: 0,
    availability_type_id: 0,
    organizational_area_id: 0,
    photo_url: "",

  });
  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });

  };
  const handleNuevoColaboradorImageChange = (image) => {
    setNuevoColaborador({ ...nuevoColaborador, photo_url: image });
  };


  const handleCrearColaborador = async () => {
    try {
      const fechasValidas = validarFechasColaborador(nuevoColaborador);
      if (!fechasValidas) {
        throw new Error('Las fechas no son válidas')
      }
      console.log(nuevoColaborador);
      const colaboradorPost = {
        ...nuevoColaborador,
        birthdate: DateFormatUtility.stringFormattedToDate(nuevoColaborador.birthdate),
        entry_date: DateFormatUtility.stringFormattedToDate(nuevoColaborador.entry_date),
        retirement_date: DateFormatUtility.stringFormattedToDate(nuevoColaborador.retirement_date),
      }
      console.log(colaboradorPost);
      await validarCreacionColaborador(colaboradorPost)
      const nuevoColaboradorResponse = await ColaboradoresService.agregarColaborador(colaboradorPost);
      console.log("Nuevo colaborador creado:", nuevoColaboradorResponse);
      cerrarModal();
    } catch (error) {
      console.log("Error al crear el nuevo colaborador:", error);
    }
  };

  return (
    <div className='mainColaboradores'>
      <div>
        <div className='containerTitleProyecto'>
          <p className='titleWelcome lista'>Lista de Colaboradores</p>
          <div className='filterBtn'>
            <InputGroup className="mb-3 inputSearch inputListasFilter">
              <Form.Control
                placeholder="Buscar por colaborador"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className='inputSelector'
              />
              <Button className='btnPrincipalInput' variant="outline-secondary" id="button-addon2">
                Buscar
              </Button>
            </InputGroup>
            <Button onClick={abrirModal} variant="primary" className='btnAgregarCRUD' >Nuevo Colaborador</Button>
            <Modal className="containerModal-Colaborador" show={mostrarModal} onHide={cerrarModal} size="lg"
              aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
                <Modal.Title className="tituloModal">Crear un nuevo colaborador</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <ModalFormColaboradores
                  handleImageChange={handleNuevoColaboradorImageChange}
                  colaborador={nuevoColaborador}
                  handleChange={handleChange} />
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleCrearColaborador} variant="primary" className='btnAgregarCRUD'>Crear</Button>
                <Button variant="secondary" className="btnCerrarCRUD" onClick={cerrarModal}>
                  Cancelar
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div className='containerProyecto'>
          <TablaColaboradoresPage />
        </div>
      </div>
    </div>
  )
}
