import Linha from "./Linha"

export default function Tabuleiro(props){

    for(let i=0; i<=props; i++){
        dimensao.map(el =>{
            <div key={el.props}>{el.props ? true : false } </div>
        })
    }
    
    return(
        <>
            <Linha preto={true}/>
            <Linha preto={false}/>
            <Linha preto={true}/>
            <Linha preto={false}/>
            <Linha preto={true}/>
            <Linha preto={false}/>
            <Linha preto={true}/>
            <Linha preto={false}/>
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