import { useState } from "react"

const Counter=()=>{

    //los estado van a hacer estados que van a cambiar de valor
    //se utiliza useefct
    //siempre adentro ahi una variable y una funcion
   //la funcion lleva set y el nombre de la variable
   //para iniciar los estado se los inicia en los paretesis

  const [num,setNum]=useState(0)

    const sumar=()=>{
        if(num<10){
            setNum(num+1)
        }
    }

    const restar =()=>{

        if(num>0){
            setNum(num-1)
        }

        
     //   num>0 ? setNum(num-1) : null
    }


    return(
        <>
        <button onClick={restar}>restar</button>
        <h2>{num}</h2>
        <button  onClick={sumar}>sumar</button>
        
        </>
    )
}

export default Counter