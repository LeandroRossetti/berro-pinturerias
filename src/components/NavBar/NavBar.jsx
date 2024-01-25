import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header  className='flex flex-row bg-blue-400 items-center justify-around mb-px border-solid border-2 border-black'>
      <Link to="/">
        <h1 className='text-3xl w-0 '>Home</h1>
      </Link>
      <Link to="/">
      <img src='src\assets\logo.jpg' alt="" className='w-20' />
      </Link>
      <nav >
        <ul>
          <NavLink to="/categoria/2">
            <li className='inline-block m-4 cursor-pointer hover:text-blue-800'>Latex exterior</li>
            </NavLink>
            <NavLink to="/categoria/3">
            <li className='inline-block m-4 cursor-pointer hover:text-blue-800'>Latex interior</li>
            </NavLink>
        </ul>


      </nav>
      <CartWidget />
      
    </header>
  )
}

export default NavBar