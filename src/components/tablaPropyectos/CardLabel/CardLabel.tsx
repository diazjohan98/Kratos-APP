import React from 'react';
import { CardLabelTypes } from './cardLabelTypes';
import './cardLabelStyles.css';

const getStyleClass = (tipo) => {
    switch (tipo) {
        case CardLabelTypes.Active:
            return '__card__style__active';
        case CardLabelTypes.Blue:
            return '__card__style__blue';
        case CardLabelTypes.Cancelled:
            return '__card__style__cancelled';
        case CardLabelTypes.Danger:
            return '__card__style__danger';
        case CardLabelTypes.Green:
            return '__card__style__green';
        case CardLabelTypes.Inactive:
            return '__card__style__inactive';
        case CardLabelTypes.Red:
            return '__card__style__red';
        case CardLabelTypes.Success:
            return '__card__style__success';
        case CardLabelTypes.Warning:
            return '__card__style__warning';
        case CardLabelTypes.Yellow:
            return '__card__style__yellow';

        default:
            return '__card__style__inactive';
    }
}


export const CardLabel = ({ texto, tipo }) => {

    const styleClass = `__card__style ${getStyleClass(tipo)}`;
    return (
        <div
            className={styleClass}
        >
            <span className='__card__style__span'
            >
                {texto}
            </span>
        </div>
    )
}
