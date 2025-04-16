
import { useState ,useEffect} from "react"
const Text2=()=>{

    const [text,setText]=useState("")


  const mostrarTexto=(e)=>{
    setText(e.target.value)
  }
  //recibe dos parametros una funcion y el otro una array
  //estso se ecjecuta solo cuando se llama no cuando se actualiza
  useEffect(()=>{console.log("componente montado")
    return()=>{
        console.log("componente desmontado")
    }
  },[])

useEffect(()=>{
    console.log("texto modifiacdo")
},[text])

    return(
        <div>
            <input type="text" onChange={mostrarTexto} />
            <p>{text}</p>
        </div>
    )
}


export default Text2