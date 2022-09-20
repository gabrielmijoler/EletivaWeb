import Tabuleiro from "../componentes/Tabuleiro"
export default function init(){
    return(
        <div>
            <Tabuleiro dimensao={2}/>
            <h1>Outro Tabuleiro</h1>
            <Tabuleiro />
        </div>
    )    
}
