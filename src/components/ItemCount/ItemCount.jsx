import { useState } from "react";


const ItemCount = ({stock}) => {

    const [ contador, setContador] = useState(1)

    const incrementar = () => {
        if (contador < stock){
            setContador(contador + 1);
        }

    }

    const decrementar = () => {
        if (contador > 1){
            setContador(contador - 1);
        }

    }
    
  return (
    <div>
        <button onClick={incrementar} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-12"> + </button>
        <p className=""> {contador} </p>
        <button onClick={decrementar} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-12"> - </button>
    </div>
  )
}

export default ItemCount