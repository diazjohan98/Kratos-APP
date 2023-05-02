import React from 'react'
import Form from 'react-bootstrap/Form'
import './modalFormStyles.css'
import Select from 'react-select';
import { options } from './modalEquipoOptions';
import { optionsTecnologias } from './modalTecnologiasOptions'

export const ModalForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-1 containerInputsTitle" controlId="exampleForm.ControlInput1">
          <Form.Label className='tituloRegularModal'>Nombre del proyecto</Form.Label>
          <Form.Control type="text" className='inputSelector' placeholder="Escriba aqui" />
        </Form.Group>
        <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlTextarea1">
          <Form.Label className='tituloRegularModal'>Descripción</Form.Label>
          <Form.Control as="textarea" rows={3} className='inputTextArea' placeholder='Escriba aqui' />
        </Form.Group>
        <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
          <div className='containerinputFechas'>
            <div className='fechaInicio'>
              <Form.Label className='tituloRegularModal'>Fecha de Inicio</Form.Label>
              <Form.Control type="date" className='inputSelector' />
            </div>
            <div className='fechaFinal'>
              <Form.Label className='tituloRegularModal'>Fecha de finalización</Form.Label>
              <Form.Control type="date" className='inputSelector' />
            </div>
          </div>
        </Form.Group>
        <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
          <Form.Label className='tituloRegularModal'>Equipo de Trabajo</Form.Label>
          <Select
            defaultValue={[options[2], options[3]]}
            isMulti
            name="equipo"
            options={options}
            className="basic-multi-select inputSelector inputSeleccionarReact"
            // classNamePrefix="select inputSelector inputSeleccionarReact"
          />
        </Form.Group>
        <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
          <Form.Label className='tituloRegularModal'>Tecnologias</Form.Label>
          <Select
            defaultValue={[optionsTecnologias[2], optionsTecnologias[3]]}
            isMulti
            name="equipo"
            options={optionsTecnologias}
            className="basic-multi-select inputSelector inputSeleccionarReact"
            // classNamePrefix="select inputSelector"
          />
        </Form.Group>
        <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
          <Form.Label className='tituloRegularModal'>Estado</Form.Label>
          <Form.Select className='inputSelector inputSeleccionar'>
            <option>...</option>
            <option>En desarrollo</option>
            <option>Cotización</option>
            <option>Anulado</option>
            <option>Terminado</option>
            <option>Garantia</option>
          </Form.Select>
        </Form.Group>
      </Form>
    </div>
  )
}

