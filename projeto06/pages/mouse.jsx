import { useState } from "react";

export default function init(){

    const [x, setx] = useState(0);
    const [y, sety] = useState(0);

    function movemouse(evt){
        console.log(evt.clientX, evt.clientY)
        setx(evt.clientX)
        sety(evt.clientY)
    }

    return(
        <div style={{height:"100vh", display:"flex", backgroundColor:"black", color:"white", flexDirection:"column", alignItems:'center', justifyContent:'center'}} onMouseMove={movemouse}>
            <span>Mouse x: {x}</span>
            <span>Mouse y: {y}</span>
        </div>
    )
}