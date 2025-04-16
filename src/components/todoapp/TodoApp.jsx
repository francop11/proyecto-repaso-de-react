import { useState } from "react"
import MostrarTareas from "../mostrarItems/MostrarTareas"
import TodoFormulario from "../todoFormulario/TodoFormulario"

const TodoApp =()=>{

    const [tareas,setTareas]=useState([])

    const [text,setText]=useState("")
     

    function ver(e){
        setText(e.target.value)


    }

    function agregar (){
        if(text.length>0  && text!==" "){
        setTareas([...tareas, text])
        setText("") 
       
    }
   
    }


    function eliminar(index){
   const  lista=tareas.filter((tarea,i)=>i!==index)
    setTareas(lista)}


    return(
        <>
        <TodoFormulario text={text}
           ver={ver}
          agregar={agregar}/>
        <ul>
            <MostrarTareas tareas= {tareas}
            eliminar={eliminar}/>
        </ul>
        
        </>
    )
}


export default TodoApp

