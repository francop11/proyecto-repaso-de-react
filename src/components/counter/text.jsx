import { useState } from "react"
//estos hook son funciones de react
import Text2 from "./text2"
const Text=()=>{

    const[mostrar,setMostrar]=useState(false)
  ///forma de meter condicionales solo con operadore ternarios
  //el operador and hace que ese h2 se muestre
    function mostar(){
        setMostrar(!mostrar)
    }
    return(
        <div>
            <button  onClick={mostar}>{mostrar===true ? "ocultar":"mostrar"}</button>
    
           {mostrar==true && <Text2/>  }
        </div>
    )
}


export default Text