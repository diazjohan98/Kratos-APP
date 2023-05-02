import React, { useState } from 'react';
import { CardLabel } from '../CardLabel/CardLabel';
import { TableTypes } from './tableTypes';
import { CardLabelTypes } from '../CardLabel/cardLabelTypes';
import './tableStyles.css';
import { BiEditAlt } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { Button, Modal, Tooltip } from 'react-bootstrap';
import { ListTooltip } from '../../listTooltip/ListTooltip';


export const TableProyectos = ({ data, configuration, tableClass, tableBodyClass, tableHeaderClass }) => {

    const {
        cabeceras,
        tipos,
        classCells,
        identificadorFila,
    } = configuration;

    return (
        <div className='tablaProyectos'>

            <table className={tableClass ?? ''}>
                <thead className={tableHeaderClass ?? ''}>
                    <tr >
                        {
                            cabeceras.map(cabecera => (
                                <th
                                    key={cabecera[0]}
                                >
                                    {cabecera[1]}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody  className={tableBodyClass ?? ''}>
                    {
                        data.map(item => (
                            <tr key={item[identificadorFila]}>
                                {
                                    cabeceras.map((cabecera, index) => {

                                        const cellComponent = getCellComponent({ tipos, item, cabecera, classCells, identificadorFila });
                                        const classContent = classCells?.find(cc => cc[0] === cabecera[0]);
                                        const cellClass = !!classContent ? classContent[1] : '';

                                        return (
                                            <td
                                                key={index}
                                                className={cellClass}
                                            >
                                                {cellComponent}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}


const getCellComponent = ({ tipos, item, cabecera, classCells, identificadorFila }) => {
    let cellComponent;

    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirModal = () => setMostrarModal(true);
    const cerrarModal = () => setMostrarModal(false);

    if ((tipos?.map(t => t[0]).includes(cabecera[0]))) {
        const tipo = tipos.find(t => t[0] === cabecera[0])[1];


        switch (tipo) {

            case TableTypes.CardLabel:
                const tipoContent = tipos.find(t => t[0] == cabecera[0])[2];
                const labelType = tipoContent?.find(tc => tc[0] === item[cabecera[0]]);
                const tipoEquivalencia = !!labelType && labelType.length >= 2 && labelType[1] ? labelType[1] : CardLabelTypes.Cancelled;
                cellComponent = (
                    <CardLabel texto={item[cabecera[0]]} tipo={tipoEquivalencia} />
                );
                break;
            case TableTypes.TooltipList:
                // const tooltipContent = tipos.find(t => t[0] == cabecera[0]);
                // const tooltip = tipoContent?.find(tc => tc[0] === item[cabecera[0]]);
            
                cellComponent = (
                    <ListTooltip 
                        list={item[cabecera[0]]}
                        id={`tlp-${cabecera[0]}-${item[identificadorFila]}`}
                        text={`Ver mas(${item[cabecera[0]].length})`}
                    /> 
                );
                break;

            case TableTypes.ActionButtons:
                const buttonContent = tipos.find(t => t[0] == cabecera[0]);
                const tipoContentAction = buttonContent[2];
                const llave = buttonContent[3];
                const valorLlave = item[llave];

                cellComponent = (
                    <div className='d-flex justify-content-center containerBotonesCrud'>
                        <button className='btn btn-info btnCrud' onClick={() => tipoContentAction.fnEditar(valorLlave)}>
                            <BiEditAlt />
                        </button>
                        <button className='btn btn-danger btnCrud' onClick={abrirModal}>
                            <RiDeleteBin5Line />
                        </button>
                        <Modal show={mostrarModal} onHide={cerrarModal}>
                            <Modal.Header closeButton>
                                <Modal.Title className='titleModalEliminar'>¿Deseas eliminar el proyecto?</Modal.Title>
                            </Modal.Header>
                            <Modal.Footer className='btnEliminar'>
                                <Button  className='btnAgregarCRUD btn-Eliminar' variant="primary" onClick={cerrarModal}>
                                    Si
                                </Button>
                                <Button className="btnCerrarCRUD btn-Eliminar" variant="secondary" onClick={cerrarModal}>
                                    No
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>)
                break;
            default:

               

                cellComponent = (<span className='spanTablaProyectos'
                >
                    {cellComponent = item[cabecera[0]]}
                </span>)
                break;
        }
    }
    else {
        cellComponent = (<span className='spanTablaProyectos'
        >
            {cellComponent = item[cabecera[0]]}
        </span>)
    }

    return cellComponent;
}