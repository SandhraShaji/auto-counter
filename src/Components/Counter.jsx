import React, { useEffect, useState } from 'react'
function Counter() {
    const [counter,setCounter]=useState(0)
    useEffect(()=>{
        const time = setInterval(()=>{
            setCounter((counter)=>counter+1)
        },1000)
        return()=>clearInterval(time)
    })
    function reset(){
        setCounter(0)
    }
  return (
    <div style={{marginBlock:'118.5px'}}>
        <h1 style={{textAlign:'center',fontSize:'80px'}}>{counter}</h1>
        <div style={{textAlign:'center',marginBlock:'70px'}}>
        <button style={{backgroundColor:'orange',marginInline:'10px', padding:'8px',border:'none',borderRadius:'7px',boxShadow:'1px 1px 5px grey'}} onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter