import styles from '../styles/linha.module.css'
import Celula from './Celula'


// se a propriedade preto for passada para o componente linha, a primeira celula da linha sera pintada de preto,
// caso contrario a primeira celula deve ser pintada de branco

export default function Linha(props){
    return(
            <div className={styles.lin}>
                    <Celula preto={props.preto}/>
                    <Celula preto={!props.preto}/>
                    <Celula preto={props.preto}/>
                    <Celula preto={!props.preto}/>
                    <Celula preto={props.preto}/>
                    <Celula preto={!props.preto}/>
                    <Celula preto={props.preto}/>
                    <Celula preto={!props.preto}/>
            </div>
        
    )
}