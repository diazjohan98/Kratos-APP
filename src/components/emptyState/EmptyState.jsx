import React from 'react'
import imgInfo from '../../assets/img/undraw_cancel_re_pkdm.svg'
import './emptyStateStyle.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const EmptyState = () => {
    const navigate = useNavigate()
    const onGoBack = () => {

        navigate(-1);

    }
    return (
        <div className='containerNoInfo'>
            <img className='imgInf' src={imgInfo} alt="Not information" />
            <p className='titleInf'>No hay información</p>
            <Button variant="link" className='BTNtitleInf' onClick={onGoBack}>Regresar</Button>
        </div>
    )
}
