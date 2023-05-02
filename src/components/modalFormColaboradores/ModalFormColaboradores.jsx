import { useState, useRef } from 'react'
import Form from 'react-bootstrap/Form'
import './modalFormStyles.css'
import { AiOutlineCamera } from 'react-icons/ai';


export const ModalFormColaboradores = ({ handleChange, colaborador }) => {
  const [fileImage, setFileImage] = useState()
  const [previewImage, setPreviewImage] = useState("https://img.freepik.com/free-icon/user_318-159711.jpg")
  const referencia = useRef();

  const handleImageChange = (event) => {
    const urlPhoto = event.target.value;
    if (!!urlPhoto && urlPhoto.trim().length > 0) {
      setPreviewImage(urlPhoto);
    }

  };


  return (
    <div className='containerModalColaboradores'>
      <Form className='containerformulary'>
        <div className='containerinputPrimary'>
          <Form.Group className="mb-1 containerInputsTitle" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Nombre</Form.Label>
            <Form.Control type="text" name='first_name' onChange={handleChange} className='inputSelector' placeholder="Escriba aqui" />
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Apellido</Form.Label>
            <Form.Control type="text" name='last_name' onChange={handleChange} className='inputSelector' placeholder="Escriba aqui" />
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Tipo de identificación</Form.Label>
            <Form.Select name='identification_type_id' onChange={handleChange} className='inputSelector inputSeleccionar'>
              <option value="0">...</option>
              <option value="1">Cédula de ciudadanía</option>
              <option value="2">Tarjeta extranjera</option>
              <option value="3">Pasaporte</option>
              <option value="4">Cédula de extranjería</option>
              <option value="5">Tipo de documento extranjero</option>
              <option value="6">Sin identificación del exterior u uso definido por la DIAN</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Identificación</Form.Label>
            <Form.Control name='identification' onChange={handleChange} type="text" className='inputSelector' placeholder="Escriba aqui" />
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Nivel de escolaridad</Form.Label>
            <Form.Select name='education_level_id' onChange={handleChange} className='inputSelector inputSeleccionar'>
              <option value="0">...</option>
              <option value="1">Educación primaria</option>
              <option value="2">Educación Secundaria</option>
              <option value="3">Educación Superior</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className=" containerInputs" controlId="exampleForm.ControlInput1">

            <Form.Label className='tituloRegularModal'>Fecha de Inicio</Form.Label>
            <Form.Control name='entry_date' onChange={handleChange} type="date" className='inputSelector formDate' />

            <Form.Label className='tituloRegularModal'>Fecha de finalización</Form.Label>
            <Form.Control name='retirement_date' onChange={handleChange} type="date" className='inputSelector formDate' />

          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Ocupación</Form.Label>
            <Form.Select name='occupation_id' onChange={handleChange} className='inputSelector inputSeleccionar'>
              <option value="0">...</option>
              <option value="1">Senior Software Developer</option>
              <option value="2">Software Architech</option>
              <option value="3">Senior Solution Analyst</option>
              <option value="4">Software Developer</option>
              <option value="5">No aplica</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Área</Form.Label>
            <Form.Select name='organizational_area_id' onChange={handleChange} className='inputSelector inputSeleccionar'>
              <option value="0">...</option>
              <option value="1">Senior  Developer</option>
              <option value="2">Software Developer</option>
              <option value="3">Front Developer</option>
              <option value="4">Junior Developer</option>
              <option value="5">Semillero</option>
            </Form.Select>
          </Form.Group>
        </div>
        <div className='containerinputSecondary'>
          <div className='seleccionarIMG'>
            <div className='containerImgColaboradores' >
              <img className='imgPredeterminada' src={previewImage} alt="avatar" />
              {/* <AiOutlineCamera className='iconoImgCRUD' /> */}
            </div>
          <Form.Group className="mb-4 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Control name="photo_url" onChange={handleChange} type="text" className='inputSelector inputIMG' placeholder="Escriba aqui la URL" />
          </Form.Group>
          </div>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Teléfono o celular</Form.Label>
            <Form.Control name='cellphone_number' onChange={handleChange} type="text" className='inputSelector ' placeholder="Escriba aqui" />
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Ciudad</Form.Label>
            <Form.Select name='city_id' onChange={handleChange} className='inputSelector inputSeleccionar'>
              <option value="0">...</option>
              <option value="1">Tuluá</option>
              <option value="2">Cali</option>
              <option value="3">Popayán</option>
              <option value="4">Medellin</option>
              <option value="5">Jamundi</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Correo electrónico</Form.Label>
            <Form.Control name='email' onChange={handleChange} type="email" className='inputSelector' placeholder="Escriba aqui" />
          </Form.Group>

          <Form.Label className='tituloRegularModal'>Fecha de Nacimiento</Form.Label>
          <Form.Control name='birthdate' onChange={handleChange} type="date" className='inputSelector formDate' />
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Disponibilidad</Form.Label>
            <Form.Select name='availability_type_id' onChange={handleChange} className='inputSelector inputSeleccionar'>
              <option value="0">...</option>
              <option value="1">Libre</option>
              <option value="2">Ocupado</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-1 containerInputs" controlId="exampleForm.ControlInput1">
            <Form.Label className='tituloRegularModal'>Estado</Form.Label>
            <Form.Select name='collaborator_status_id' onChange={handleChange} className='inputSelector inputSeleccionar'>
              <option value="0">...</option>
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
              <option value="3">Suspendido</option>
              <option value="4">Retirado</option>
            </Form.Select>
          </Form.Group>
        </div>
      </Form>
    </div >
  )
}

