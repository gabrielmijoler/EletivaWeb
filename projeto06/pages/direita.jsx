import Pai from '../componentes/comunicacao_direta/Pai'
export default function init(props){
    return(
        <>
        <h1>Teste Pai</h1>
        <Pai />
        <h2>_______________________________________________</h2>
        <Pai nome="Cebolinha" sobrenome="Souza" />
        </>
    )
}