import Display from '../componentes/Display'
import { useState } from "react";

export default function init(props){
    const [valor, setValor] = useState(0);


    function soma(){
        setValor(valor+1)
    }
    
    const subtrai = ()=> setValor(valor-1)
    return(
        <div style={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        height:"100vh"
        }}>
            <Display numero={valor}/>
            <div>
                <button onClick={subtrai}>-</button>
                <button onClick={soma}>+</button>
                
                {/* <button onClick={()=>setValor(valor+1)}>+</button> */}
            </div>
            <Display numero={valor}/>
            <div>
                <button onClick={subtrai}>-</button>
                <button onClick={soma}>+</button>
                
                {/* <button onClick={()=>setValor(valor+1)}>+</button> */}
            </div>
        </div>
    )
}