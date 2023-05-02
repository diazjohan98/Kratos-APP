import React from 'react'
import Form from 'react-bootstrap/Form'
import './modalTablaTecnologiasStyles.css'

export const ModalTablaTecnologias = () => {
  return (
    <div>
      <Form>
        <div className='containerTablaAdminTecnologias'>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Nombre de la tecnología</Form.Label>
            <Form.Control type="text" className='inputSelector inputSeleccionar tablaTecnologias' placeholder="Escriba aqui..." />
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Categoria</Form.Label>
            <Form.Select className='inputSelector inputSeleccionar tablaTecnologias'>
              <option>...</option>
              <option>Herramienta</option>
              <option>Tecnología</option>
              <option>Plataforma</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Form>
    </div>
  )
}
