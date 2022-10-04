import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants"

interface PessoasProps{
    nome: string,
    idade: number,
    sexo?: string,
    sobrenome?: string
}

export default function Pessoa(props: PessoasProps){
    return(
        <>
            <div>Nome : {props.nome} {props.sobrenome}</div>
            <div>Idade: {props.idade}</div>
            <div>Sexo: {props.sexo ?? "Sexo não informado"}</div>
        </>
    )

}