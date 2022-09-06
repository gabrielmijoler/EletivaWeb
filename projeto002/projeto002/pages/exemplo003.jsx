/* se o css for global deve colocar no arquivo app.js  (Next)*/
import styles from '../styles/exemplo003.module.css'

export default function Int(){
    return(
        <>
            <h1 className={styles.vermelho}> 
                #VERMELHO
            </h1>
            <h2 id={styles.cinza}>#CINZA</h2>
        </>
    )
}