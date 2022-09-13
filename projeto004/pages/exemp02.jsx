import listaProdutos from "../data/listaProdutos";

export default function init(){
    
    function renderList(){
    return listaProdutos.map((elemet, i)=><li key={elemet.i}>id={elemet.id} {"-"} Nome={elemet.nome} {"-"} Preço={elemet.preco}</li>)
    }

    return(
        <>
        <h1>Produtos</h1>
            <ol>
                {renderList()}
            </ol>
        </>
    )
}

