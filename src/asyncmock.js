const productos = [
    {id: "1", nombre: "Latex exterior interior", precio: 2000, img:"../public/img/latex-antihongos.jpg", stock: 50, idCat:"2"},
    {id: "2", nombre: "Latex exterior interior", precio: 2500 , img:"../public/img/latex-exteriorinterior.jpg", stock: 100, idCat:"2"},
    {id: "3", nombre: "Latex interior", precio: 500 , img:"../public/img/latex-interior-2.jpg", stock: 10, idCat:"3"},
    {id: "4", nombre: "Latex interior", precio: 100 , img:"../public/img/latex-interior.jpg", stock: 4, idCat:"3"},
]


export const getProductos = () => {
    return new Promise( (resolve) =>{
        setTimeout( ()=>{
            resolve(productos);
        }, 2000)
    } )
}

export const getUnProducto = (id) =>{
    return new Promise (resolve => {

        setTimeout ( ()=>{
            const producto = productos.find(prod => prod.id === id)
            resolve(producto)


        },2000)



    })
}


export const getProductosCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        },2000)
    })
}