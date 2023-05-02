import React from 'react'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import './listTooltipStyle.css'

export const ListTooltip = ({ list, text, id }) => {

    
    return (
        <>
            <span className='spanTabla' id={id} 
            >
                {text}
            </span>

            <ReactTooltip
                anchorSelect={`#${id}`}
                // id={id}
                // place='bottom'
                // variant='info'
                content={
                    // <div>
                        <ul className='listaTooltips'>
                            {list.map((item) => 
                                <li className='infoItem' key={item}>{item}</li>
                            )}
                        </ul>
                    // </div>
                }
                
            />
        </>
    )
}
