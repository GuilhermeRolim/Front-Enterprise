import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import './projetos.modules.css';

function Projetos(){
    return(
        <>
            <Header /> 
                <Container>
                    <section className="projetos-section"></section>
                    <h2>Projetos</h2>
                    <img src="undraw_mobile-payments_0u42.svg" alt="Imagem de projetos" className="projetos-image" />
                </Container>
            <Footer />
        </>
    )
}

export default Projetos
