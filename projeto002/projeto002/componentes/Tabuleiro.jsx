import Linha from "./Linha"

export default function Tabuleiro(props){
    let lista = []
    let dim = 8
    let aux = true
    if(props.dimensao){dim=props.dimensao}
    for(let i=1; i<=dim; i++){
        lista.push(<Linha preto={aux} dimensao={dim}/>)
        aux = !aux // quando chegar aqui vai mudar o valor pelo for, a cada pássada, aux vira true depois aux vira false assim pro diante
    }
    return(
        <>
            {lista}
        </>
    )    
}
