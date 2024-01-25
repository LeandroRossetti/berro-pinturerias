import React from 'react'

const CartWidget = () => {
  return (
    <div className='flex m-1'>
        <img className='w-20 cursor-pointer' src="src\assets\carrito.png" alt="Carrito" />
        <strong className='m-4'>Cantidad: 5u</strong>
    </div>
  )
}

export default CartWidget