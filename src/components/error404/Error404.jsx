import React from 'react'
import img404 from '../../assets/img/undraw_taken_re_yn20.svg'
import './error404Styles.css'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
export const Error404 = () => {

    const navigate = useNavigate()

    return (
        <div className='containerError404'>
            <img src={img404} alt="Error404" className='error404Images' />
            <h2 className='parrafo404'>La página que estás buscando no existe</h2>
            <Link to="/dashboard">
                <Button variant="btn">Regresar</Button>
            </Link>
        </div>
    )
}
