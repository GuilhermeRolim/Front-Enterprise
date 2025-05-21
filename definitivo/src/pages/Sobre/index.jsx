import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from '../Sobre/Sobre.module.css';


function sobre() {
  return (
    <>
      <Header />
      <Container>
        <section className="sobre-section">
          <h2 className="sobre-title">Front-Enterprise</h2>
          <img className={styles.img_sobre} src="/undraw_online-banking_l9sn.svg" alt="Imagem de sobre"/>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default sobre;
