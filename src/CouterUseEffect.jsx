import React,{useEffect,useState} from 'react'

const CouterUseEffect =()=>{
    const [count,setCount]= useState(0);
    useEffect(()=>{
        console.log(`you clicked ${count} times`)
    })
    return(
        <>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>increment</button>
        </>
    )
}