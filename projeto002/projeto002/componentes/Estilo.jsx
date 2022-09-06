export default function Estilo(props){
    return(
        <>
            <h1 style={{color: props.numero>=0 ? 'blue':'red', backgroundColor:props.passou>=0 ? 'white': "#abc" , textAlign: props.direita ? 'right': 'left'}}>
                Texto: {props.numero}
            </h1>
            <h2 className={props.numero>=0 ? 'verde' : 'cinza'}>
                Valor condicional: {props.numero}
            </h2>
        </>
    )
}