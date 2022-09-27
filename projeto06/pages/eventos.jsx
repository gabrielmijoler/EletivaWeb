function acao1(){
    alert('acao1')
}
export default function init(){
    function acao2(){
        alert('acao2')
    }
    function acao5(evt){
        console.log(evt)
        alert(evt)
    }
    return(
        <>
            <button onClick={acao1}>Click 1</button>
            <button onClick={acao2}>Click 2</button>

            <button onClick={function(){
                alert('acao3')
            }}>Click 3</button>

            {/* arrow function  */}
            <button onClick={ ()=> alert('acao4')}>Click 4</button>

            <button onClick={acao5}>Click 5</button>

            {/* evt possui paraments dentro dele da propria api */}
            <button onClick={evt=>acao5(evt.altKey ? 'my name' : 'nada')}>Click 5 v2</button>

            <div>
                <input type="text" onChange={evt=>console.log(evt.target.value)} />
            </div>
        </>
    )
}