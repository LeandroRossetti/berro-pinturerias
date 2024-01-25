import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({id,nombre,precio,img,stock}) => {
  return (
    <div className="bg-blue-300 rounded-lg w-60 p-2 m-4 flex flex-col">
        <img className='w-64 h-56' src={img} alt={nombre} />
        <h3>Nombre: {nombre}</h3>
        <p>ID: {id}</p>
        <p>Precio: ${precio}</p>
        <strong>Cantidad disponible: {stock}</strong>
        <Link className="p-2 bg-sky-500 hover:bg-sky-700 hover:text-white text-center font-bold " to={`/item/${id}`}> Ver Detalles</Link>
{/*         <button className="p-2 bg-blue-400 hover:bg-blue-600 text-yellow-200">Ver detalles</button>
 */}    </div>
  )
}

export default Item