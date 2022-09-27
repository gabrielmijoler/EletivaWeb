export default function init(props){
    return(
        <>
            <h1>Filho</h1>
            {/* <input id="n1" onChange={props=>console.log(props.id)}/>
            <input id="n2"  onChange={props=>console.log(props.id)}/> */}
            <button onClick={()=>props.funcao(4,6)}>Somar</button>
        </>
    )
}