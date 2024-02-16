import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CarritoProvider } from './context/CarritoContext.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<h2> Carrito en breve </h2>} />
        </Routes>
      </CarritoProvider>
    </BrowserRouter>
  </>
)
