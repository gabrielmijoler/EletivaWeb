import Pessoa from "../componentes/Pessoa"

export default function init(){
    return(
        <>
            <h1>Exemplo TypeScript</h1>
            <Pessoa idade={19} nome={'Jorge'} sobrenome={'Sousa'}/> <br/>
            <Pessoa idade={18} nome={'Maria Cascuda'} sexo={'F'} />
        </>
    )
}