import styles from '../styles/linha.module.css'
import Celula from './Celula'

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