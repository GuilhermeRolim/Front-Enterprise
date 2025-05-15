import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import './sobre.modules.css';


function sobre() {
  return (
    <>
      <Header />
      <Container>
        <section className="sobre-section">
          <h2 className="sobre-title">AQUI FICA O TEXTO</h2>
          <img src="undraw_online-banking_l9sn.svg" alt="Imagem de sobre" className="sobre-image" />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default sobre;
