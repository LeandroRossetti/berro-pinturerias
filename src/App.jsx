import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemCount from './components/ItemCount/ItemCount.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'





ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  

    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer />} />
      <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
      <Route path='/item/:idItem' element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
  </>
)









/* ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>
  

    <NavBar />
    <ItemListContainer greeting={"Bienvenidos a Berro Pinturerias!"} />
    <ItemDetailContainer />
     <p>pintura roja</p><ItemCount stock={4}/>
    <p>pintura azul</p><ItemCount stock={16}/>
    <p>pintura verde</p><ItemCount stock={9}/>

    </BrowserRouter>
  </>
)
 */