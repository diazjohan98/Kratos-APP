import React, { useEffect, useState } from 'react'
import { FaIcons } from 'react-icons/fa';
import './styles/cardStyles.css'

export const Card = ({ name, status, numEmpleados, iconoStatus }) => {
  const [cardColor, setCardColor] = useState('#FFFFFF');

  function updateCardColor() {
    if (status === 'activo') {
      setCardColor('#4cc138');
    } else if (status === 'inactivo') {
      setCardColor('#BFC138');
    } else if (status === 'suspendido') {
      setCardColor('#3890C1');
    } else if (status === 'retirado') {
      setCardColor('#C13838');
    }
  }

  useEffect(() => {
    updateCardColor();
  }, []);

  return (
    <div className="card" style={{ backgroundColor: cardColor }}>
      <p className="titleStatus">{name}</p>
      <h2 className="numEmpleado">{numEmpleados}</h2>
      <p className="dateEmpleado">{status}</p>
      <p className="iconoStatus">{iconoStatus}</p>
    </div>
  );
}

