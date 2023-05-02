import React from 'react';
import { CardLabel } from '../../tablaPropyectos/CardLabel/CardLabel';
import { TableTypes } from './tableTypes';
import './tableStyles.css';

export const Table = ({ data, configuration, tableClass, tableBodyClass, tableHeaderClass }) => {

    const {
        cabeceras,
        tipos,
        classCells,
        identificadorFila,
    } = configuration;

    return (
        <div className='tablaDashboard'>

            <table className={tableClass ?? ''}>
                <thead className={tableHeaderClass ?? ''}>
                    <tr>
                        {
                            cabeceras.map(cabecera => (
                                <th className='rankingTableTitle'
                                    key={cabecera[0]}
                                >
                                    {cabecera[1]}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody className={tableBodyClass ?? ''}>
                    {
                        data.map(item => (
                            <tr key={item[identificadorFila]}>
                                {
                                    cabeceras.map((cabecera, index) => {

                                        const cellComponent = getCellComponent({ tipos, item, cabecera, classCells });
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


const getCellComponent = ({ tipos, item, cabecera, classCells }) => {
    let cellComponent;

    if ((tipos?.map(t => t[0]).includes(cabecera[0]))) {
        const tipo = tipos.find(t => t[0] === cabecera[0])[1];


        switch (tipo) {
            case TableTypes.Imagen:
                cellComponent = (
                    <img className='imgTable' src={item[cabecera[0]]} style={{
                        width: 40, height: 40,
                    }}>
                    </img>
                );
                break;

            case TableTypes.CardLabel:
                const tipoContent = tipos.find(t => t[0] == cabecera[0])[2];
                const tipoEquivalencia = tipoContent.find(tc => tc[0] === item[cabecera[0]])[1];
                cellComponent = (
                    <CardLabel texto={item[cabecera[0]]} tipo={tipoEquivalencia} />
                );
                break;

            default:

                cellComponent = (<span
                >
                    {cellComponent = item[cabecera[0]]}
                </span>)
                break;
        }
    }
    else {
        cellComponent = (<span
        >
            {cellComponent = item[cabecera[0]]}
        </span>)
    }

    return cellComponent;
}