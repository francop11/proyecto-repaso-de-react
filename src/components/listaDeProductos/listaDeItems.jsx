import { useEffect, useState } from "react"
import pedirProductos from "./PedirProductos"
import ListaDeProductos from "./porductos"

const ListaDeItems=()=>{

  //para que se muestren los productos debemos usar un estado

const[productos,setProductos]=useState([])
//aca incluiremos promesas en react
//las promesas llevan dos parametros resolve y reject



//utilizaremos el useefct para que esto se llame una sola vez y no se comvierta en loop infinito
useEffect(()=>{
    pedirProductos()
.then((res)=>{
    setProductos(res)
    console.log(productos)
})

},[])





//el operador and nos permite que nos muestre algo segun la condicion ,sino no se muestra

    return(
        <div>

            <ListaDeProductos productos={productos}/>
        </div>
    )
}

export default ListaDeItems