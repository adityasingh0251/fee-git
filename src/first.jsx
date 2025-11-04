import React from "react";
import Data from './Data'

const About =(props) =>{
    return (
        <>
            <h1>about page </h1> 
            <h3>{props.name}</h3> 
            <Data/>
        </>
    )
}

export default About