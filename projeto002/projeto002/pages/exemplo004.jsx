/* se o css for global deve colocar no arquivo app.js  (Next)*/
import Estilo from "../componentes/Estilo"

export default function Int(){
    return(
        <>
            <Estilo numero={5} esquerda passou></Estilo>
            <Estilo numero={-2} direita />
        </>
    )
}