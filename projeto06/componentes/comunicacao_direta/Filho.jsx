export default function init(props){
    return(
            <div style={{display:"flex"}}>
                <h2>{props.nome}</h2>
                <h2>{props.sobrenome}</h2>
            </div>
    )
}