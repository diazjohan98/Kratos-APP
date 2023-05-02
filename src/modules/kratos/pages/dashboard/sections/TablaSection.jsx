import React from 'react';
import { colaboradorTableConfiguration } from '../../../../../adapters/colaborardor-tableData.adapter';
import { InputSelector } from '../../../../../components/ranking/inputSelector/InputSelector';
import SearchPageRanking from '../../../../../components/ranking/searchRanking/SearchPageRanking';
import { Table } from '../../../../../components/ranking/Table/Table';
const urlPrueba = 'https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png';
import './tablaSectionsStyle.css'


const data = [
    {
        url: urlPrueba,
        nombre: 'Alexis',
        cargo: 'Senior Software Developer',
        ciudad: 'Cali',
        score: 100,
        disponibilidad: 'Ocupado',
    },
    {
        url: urlPrueba,
        nombre: 'Leandro',
        cargo: 'Software Architech',
        ciudad: 'Cali',
        score: 99,
        disponibilidad: 'Libre',
    },
    {
        url: urlPrueba,
        nombre: 'Jurgen',
        cargo: 'Senior Solution Analyst',
        ciudad: 'Cali',
        score: 98,
        disponibilidad: 'Libre',
    },
    {
        url: urlPrueba,
        nombre: 'Sebastian',
        cargo: 'Software Developer',
        ciudad: 'Cali',
        score: 97,
        disponibilidad: 'Libre',
    },
];


export const TablaSection = () => {
    return (
        <div>
            {/* <h3>Ranking</h3> */}
            <div className='containerSearchSelector'>
                <SearchPageRanking />
                <InputSelector />

            </div>
            <Table
                data={data}
                configuration={colaboradorTableConfiguration()}
                tableClass={'__table'}
                tableBodyClass={'__table__body'}
                tableHeaderClass={'__table__header'}
            />
        </div>
    )
}
