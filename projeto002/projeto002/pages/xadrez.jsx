import Tabuleiro from "../componentes/Tabuleiro"
export default function init(){
    return(
        <div>
            <Tabuleiro />
            <h1>Outro Tabuleiro</h1>
            <Tabuleiro dimensao={12}/>
        </div>
    )    
}
