const TodoFormulario=({ text, ver, agregar })=>{


    return(
        <>
        <input value={text} onChange={ver} type="text" />
        <button onClick={agregar}>agregar</button>
        </>
    )
}

export default TodoFormulario