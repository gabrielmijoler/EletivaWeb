import Filho from './Filho'

function calcula(cal1,cal2){
    const x = cal1+cal2
    alert(x)
}
export default function init(props){
    return(
        <>
        <h1>Pai</h1>
        <Filho funcao={calcula}/>
        </>
    )
}