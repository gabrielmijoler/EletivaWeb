import listaProdutos from "../data/listaProdutos";

export default function init(){
    
    // function renderList(){
    // return listaProdutos.map((elemet, i)=><li key={elemet.i}>id={elemet.id} {"-"} Nome={elemet.nome} {"-"} Preço={elemet.preco}</li>)
    // }
    function linhas(){
        return listaProdutos.map(produto =>{
            return(
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
            )
        })
    }
    return(
        <>
        <h1>Listas de Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {linhas()}
                </tbody>
            </table>
        </>
    )
}

