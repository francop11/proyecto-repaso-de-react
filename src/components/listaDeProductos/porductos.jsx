

const ListaDeProductos=({productos})=>{
    return(
        <div>
            
            {
            
            productos.length>0 && 
            productos.map(producto=>{
                return(
                <div  key={producto.titulo}>
                <h1>{producto.titulo}</h1>
                <p>{producto.precio}</p>
            </div>)
            })
            
            
            }
        </div>
    )
}

export default ListaDeProductos