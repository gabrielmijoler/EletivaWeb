export default function init(){
    const nomes =  ["Monica","Cebolinha", "Magali","Cascao"]
    // forma 1
    function rederizarLista(){
        let lista = []
        for (let index = 0; index < nomes.length; index++) {
            const element = nomes[index];
            lista.push(<li key={index}>{element}</li>)
        }
        return lista;
    }

    //forma 2

    function renderlistMap(){
        return nomes.map((element,i) =><li key={i}>{element}</li>) // pega o conteudo e o index (element, i)
    }
    return(
        <>
            <h1>Nomes 1</h1>
            <ol>
                {rederizarLista()}
            </ol>
            <h1>Nomes 2</h1>
            <ol>
                {renderlistMap()}
            </ol>
        </>
    )
}

