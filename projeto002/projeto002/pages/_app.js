import '../styles/globals.css'
import '../styles/exemplo001.css'

/* se o css for global deve colocar no arquivo app.js  */

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
