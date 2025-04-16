

const MostrarTareas=({tareas,eliminar})=>{
   
    return(
        <>
        {tareas.map((tarea,index)=>{
             return   <li key={index}> {tarea}  <button onClick={() => eliminar(index)}>eliminar</button></li>
                     
            })}

        </>
    )
}

export default MostrarTareas
