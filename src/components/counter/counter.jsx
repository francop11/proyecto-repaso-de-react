import { useState } from "react"

const Counter=()=>{

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
  }



    return(
        <>
        <button  onClick={sumar}> sumar</button>
        <p>{num}</p>
        <button  onClick={restar}>restar</button>
        </>
    )
}


export default Counter