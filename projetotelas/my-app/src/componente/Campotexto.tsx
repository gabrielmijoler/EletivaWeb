
interface CamptextProps{
    label: string,
    valor: any,
    tipo?: 'text' | 'email' | 'password',
    // ValorAlterou: (novoValor:any) => void
}

export default function init(props: CamptextProps){
    return(
        <div className="flex flex-col mt-4">
            <label>{props.label}</label>
            <input type={props.tipo ?? "text"} className="rounded-lg bg-gray-200 border focus:bg-white focus:outline-none focus:border-blue-500 px-5 py-1 "></input>
        </div>
    )
}
