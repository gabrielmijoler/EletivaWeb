import styles from '../styles/celula.module.css'

export default function Celula(props){
    return(
        <>
            <div style={{backgroundColor: props.preto ? 'black':'white'}} 
                className={styles.cel}>
            </div>
        </>
    )
}