import { useState } from 'react';
import Display from '../componentes/Display'



function gera_valores(qts, numeros=[]){
    //caso base
    qts = parseInt(qts)

    if(numeros.length === qts){
        return numeros.sort((a,b)=> a - b);
    }
    const numero = parseInt(Math.random()*60)+1 // +1 para n gerar o 0
    
    if(!numeros.includes(numero)){ // se o numero n tiver incluido, nao repetir numero
        numeros.push(numero);
    }
    return gera_valores(qts, numeros)
}

export default function init(){
    const [numbers, setNumbers] = useState([])
    const [input, setInput] = useState(0)

    function rendernumeros(e){
        return numbers.map((n, index) =><Display key={index} numero={n}/>)
    }
    return(
        <div style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            height:"100vh",
            backgroundColor:"white"
            }}>
            <div style={{
            display:"flex",
            flexWrap:"wrap",
            justifyContent:"center"
            }}>
                {rendernumeros()}
            </div>
            <input type="number" min={6} max={15} onChange={e => setInput(e.target.value)}/>  
            <button onClick={()=>setNumbers(gera_valores(input))}>Gerar</button>
        </div>
    )
}