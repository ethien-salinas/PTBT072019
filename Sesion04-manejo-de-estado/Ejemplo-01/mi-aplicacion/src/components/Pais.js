import React from 'react'

const Pais = props => {

  const { imagen, nombre } = props.pais

  return (
    <div>
      <img src={imagen} alt={nombre} />
      <p>{nombre}</p>
    </div>
  );
}

export default Pais