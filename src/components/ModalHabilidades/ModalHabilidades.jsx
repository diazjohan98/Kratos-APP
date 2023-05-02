import React from 'react'
import { useState, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import './modalHabilidadesStyles.css'

export const ModalHabilidades = () => {
  return (
    <div className='containerModalHabilidades'>
      <Form className='containerformularyHabilidades'>
        <div className='containerinputPrimaryHabilidades'>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Nombre de la tecnología</Form.Label>
            <Form.Select className='inputSelector inputSeleccionar detalles'>
              <option>...</option>
              <option>React</option>
              <option>Angular</option>
              <option>NodeJS</option>
              <option>.Net</option>
              <option>VS CODE</option>
              <option>VueJS</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Categoria</Form.Label>
            <Form.Select className='inputSelector inputSeleccionar detalles'>
              <option>...</option>
              <option>Tecnologia</option>
              <option>Heramienta</option>
              <option>Plataforma</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div>
          <p className='puntacionTitle'>Puntación por:</p>
        </div>
        <div className='containerinputSecondaryHabilidades'>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Proyectos</Form.Label>
            <Form.Control type="text" className='inputSelector inputSeleccionar detalles' placeholder="Escriba aqui..." />
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Evaluacion técnica</Form.Label>
            <Form.Control type="text" className='inputSelector inputSeleccionar detalles' placeholder="Escriba aqui..." />
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Equipo</Form.Label>
            <Form.Control type="text" className='inputSelector inputSeleccionar detalles' placeholder="Escriba aqui..." />
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Autoconcepto</Form.Label>
            <Form.Control type="text" className='inputSelector inputSeleccionar detalles' placeholder="Escriba aqui..." />
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Ponderado</Form.Label>
            <Form.Control type="text" className='inputSelector inputSeleccionar detalles' placeholder="Escriba aqui..." disabled  />
          </Form.Group>
        </div>
      </Form>
    </div>
  )
}
