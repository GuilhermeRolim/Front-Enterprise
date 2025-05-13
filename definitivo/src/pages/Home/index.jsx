import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import styles from './Home.module.css'

function Home (){
    return(
        <>
            <Header />
            <Container>
                 <section className={styles.home}>
                    <div className={styles.apresentacao}>
                    <p>
                        Olá, seja bem-vindo <br/>
                        <span> somos a Front-Enterprise</span> <br/>
                        uma empresa de tecnologia <br />
                        focada em soluções financeiras a.
                    </p>
                    <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
                        Saiba mais sobre nós
                    </Link>
                    </div>
                    <figure>
                    <img className={styles.img_home} src="/undraw_mobile-payments_0u42.svg" alt="Imagem de  home" />
                    </figure>
            </section>     
            </Container>
            <Footer/>
        </>
    )
}

export default Home
 