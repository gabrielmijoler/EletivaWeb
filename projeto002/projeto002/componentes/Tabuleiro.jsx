import Linha from "./Linha"

export default function Tabuleiro(props){
    for(let i=0; i<=props; i++){
        props.push(el,i =>{
        <Linha key={el.i}>{el.preto} {!el.preto}</Linha>
        })
    }
    
    return(
        <>
            <Linha preto={props.preto}/>
            <Linha preto={!props.preto}/>
            <Linha preto={props.preto}/>
            <Linha preto={!props.preto}/>
            <Linha preto={props.preto}/>
            <Linha preto={!props.preto}/>
            <Linha preto={props.preto}/>
            <Linha preto={!props.preto}/>
        </>
    )    
}
{/* <Linha preto/>
            <Linha />
            <Linha preto/>
            <Linha />
            <Linha preto/>
            <Linha />
            <Linha preto/>
            <Linha /> */}