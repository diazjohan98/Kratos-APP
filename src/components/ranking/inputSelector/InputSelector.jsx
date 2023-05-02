import React from 'react'
import Form from 'react-bootstrap/Form';

import './styles/inputSelectorStyles.css'

export const InputSelector = () => {
    return (
        <div className='containerSearch'>
            <Form.Select className="inputSearch">
                <option value="">Buscar por area</option>
                <option value="1">Senior  Developer</option>
                <option value="2">Software Developer</option>
                <option value="3">Front Developer</option>
                <option value="4">Junior Developer</option>
                <option value="5">Semillero</option>
            </Form.Select>
            <br />
            <Form.Select className="inputSearch">
                <option value="">Buscar por tecnología</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="VueJS">VueJS</option>
                <option value="NodeJs">NodeJs</option>
                <option value=".Net">.Net</option>
            </Form.Select>
        </div>
    )
}
