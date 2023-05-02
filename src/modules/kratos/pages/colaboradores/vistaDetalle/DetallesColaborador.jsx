import React, { useState, useEffect, useMemo } from "react";
import { Button, Modal } from 'react-bootstrap';
import { DataHabilidades } from './tablaHabilidades/DataHabilidades';
import './detallesColaboradorStyles.css'
import { BsArrowBarLeft } from 'react-icons/bs';
import { ModalHabilidades } from "../../../../../components/ModalHabilidades/ModalHabilidades";
import { DataProyectosColaboradores } from "./tablaProyectosColaborador/DataProyectosColaboradores";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ColaboradoresService } from "../../../../../services/colaboradores.service";
import { EmptyState } from "../../../../../components/emptyState/EmptyState";
import { colaboradoresDetallesView } from "../../../../../adapters/detallesColaborador-detallesView.adapter";


export const DetallesColaborador = () => {
    const { id } = useParams() 

    const navigate = useNavigate()
    const [mostrarModal, setMostrarModal] = useState(false);
    const [colaborador, setColaborador] = useState()

    const cargarDatos = async () => {
        const response = await cargarRespuesta;
        if (!!response?.data) {
            const dataViewDetalles = colaboradoresDetallesView(response.data)
            setColaborador(dataViewDetalles);
        }
        
    }

    const cargarRespuesta = useMemo( async () => {
        return await ColaboradoresService.obtenerPorId(id);
    }, [id])

    useEffect(() => {
        cargarDatos()
    }, [])

    const abrirModal = () => setMostrarModal(true);
    const cerrarModal = () => setMostrarModal(false);

    if (!!!colaborador) {
        return <h4><EmptyState/></h4>
    }

    return (
        <div className='containerDetallesColaborador'>
            <div className='containerTitleDetalles'>
                <Link to="/colaboradores">
                    <button className='btnAgregarCRUD btnAtrasDetalle'><BsArrowBarLeft className="me-2" /> Atrás</button>
                </Link>
                <p className='tituloDetalles'>Detalles colaborador</p>
            </div>
            <div className='containerPrincipalDetalles'>
                <div className='ContainerPrimaryDetalles'>
                    <p className='parrafoDetalle'><strong className='parrafoDetalle'>Nombre:</strong> {colaborador.first_name}</p>
                    <p className='parrafoDetalle'><strong className='parrafoDetalle'>Apellido:</strong> {colaborador.last_name}</p>
                    <p className='parrafoDetalle'><strong className='parrafoDetalle'>Identificación:</strong> {colaborador.identification}</p>
                    <p className='parrafoDetalle'><strong className='parrafoDetalle'>Nivel Escolaridad:</strong> {colaborador.education_level_id}</p>
                    <p className='parrafoDetalle'><strong className='parrafoDetalle'>fecha de nacimiento:</strong> {colaborador.birthdate}</p>
                </div>
                <div className='ContainerSecundaryDetalles'>
                    <p className='parrafoDetalle'><strong className='parrafoDetalle'>Cargo:</strong> {colaborador.occupation_id}</p>
                    <p className='parrafoDetalle'><strong className='parrafoDetalle'>Teléfono o celular:</strong> {colaborador.cellphone_number}</p>
                    <p className='parrafoDetalle'><strong className='parrafoDetalle'>Ciudad:</strong> {colaborador.city_id}</p>
                    <p className='parrafoDetalle'><strong className='parrafoDetalle'>Correo:</strong> {colaborador.email}</p>
                    <p className='parrafoDetalle'><strong className='parrafoDetalle'>Estado:</strong> {colaborador.collaborator_status_id}</p>
                </div>
                <div className='ContainerTertiaryDetalles'>
                    <img className='imgPerfilDetalle' src={colaborador.photo_url} alt="Perfil" />
                </div>
            </div>
            <div className="tablaHabilidadesModal">
                <p className='tituloDetalles habilidades'>Habilidades:</p>
                <Button onClick={abrirModal} variant="primary" className='btnAgregarCRUD btnAsignar' >Asignar</Button>
                <Modal className="containerModal-Colaborador" show={mostrarModal} onHide={cerrarModal} size="lg"
                    aria-labelledby="example-modal-sizes-title-lg">
                    <Modal.Header closeButton>
                        <Modal.Title className="tituloModal">Crear habilidad</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ModalHabilidades />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" className='btnAgregarCRUD'>Crear</Button>
                        <Button variant="secondary" className="btnCerrarCRUD" onClick={cerrarModal}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <DataHabilidades skills={colaborador.skills} />
            </div>
            <div>
                <p className='tituloDetalles proyectos'>Proyectos:</p>
                <DataProyectosColaboradores projects={colaborador.projects} />
            </div>
        </div>
    );
}