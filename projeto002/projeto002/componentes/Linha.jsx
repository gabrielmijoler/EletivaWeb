import styles from '../styles/linha.module.css'
import Celula from './Celula'

//https://github.com/anaves?tab=repositories
// se a propriedade preto for passada para o componente linha, a primeira celula da linha sera pintada de preto,
// caso contrario a primeira celula deve ser pintada de branco

export default function Linha(props){
                let lista =[]
                let aux = props.preto
                for(let i=1; i<=props.dimensao; i++){
                    lista.push(<Celula preto={aux}/>)
                    aux = !aux
                }
        return(
                <div className={styles.lin}>
                        {lista}
                </div>
        )

}