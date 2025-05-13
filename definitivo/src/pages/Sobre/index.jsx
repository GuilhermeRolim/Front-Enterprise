import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'

function Sobre(){
   
    return(
        <>
            <Header /> 
                <Container> 
                    <section>
                    <h2>Sobre</h2>
                    <img src='undraw_online-banking_l9sn.svg' alt='Imagem de sobre' />
                    </section>
                </Container>
                
            <Footer />
        </>
    )
}

export default Sobre
