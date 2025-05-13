import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
function Home (){
    return(
        <>
            <Header />
            <section className='container'>
                <div className='apresentacao'>
                <p>
                    Olá, seja bem-vindo <br/>
                    <span> somos a Front-Enterprise</span> <br/>
                    uma empresa de tecnologia <br />
                    focada em soluções financeiras a.
                </p>
                <Link to="/sobre" className='btn btn-red'>
                    Saiba mais sobre nós
                </Link>
                </div>
                <figure>
                <img className='img-home' src="/undraw_mobile-payments_0u42.svg" alt="Imagem de  home" />
                </figure>
            </section>       
            <Footer/>
        </>
    )
}

export default Home
