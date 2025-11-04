import React from "react";

const timer =()=>{
    const[seconds,setSeconds]= useState(0)

    useEffect(()=>{
        const interval= serInterval()(=>{
            setSeconds((prev)=>(prev+1));
        },1000);
        
    })
}
