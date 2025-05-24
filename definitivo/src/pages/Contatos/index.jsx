import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './contatos.module.css'

function contatos() {
  return (
    <>
      <Header />
        <Container>
          {/* Container com imagem e texto por cima */}
          <div className={styles.imageWithText}>
              <img
                className={styles.imgContato}
                src="undraw_profile_d7qw (1).svg"
                alt="Imagem sobre contatos"
              />
              <div className={styles.overlayText}>
                <h2>Contatos</h2>
                <div className={styles.contactContainer}>
                  <div className={styles.column}>
                    <h3>Guilherme Forchito Rolim</h3>
                    <p>Email pessoal: rolimguilherme14@gmail.com</p>
                    <p>Email corporativo: 82414858@ulife.com.br</p>
                    <a href="https://www.linkedin.com/in/guilherme-forchito-rolim">LinkedIn</a>
                  </div>
                  <div className={styles.column}>
                    <h3>Gustavo Catani Lazzarini</h3>
                    <p>Email pessoal: guga.catani@hotmail.com </p>
                    <p>Email: 82411214@ulife.com.br</p>
                    <a href="https://www.linkedin.com/in/gustavo-catani-412a63284">LinkedIn</a>
                  </div>
                  <div className={styles.column}>
                    <h3>Plínio Augusto Pizzolitto Benevenuto</h3>
                    <p>Email pessoal: palittobene06@gmail.com</p>
                    <p>Email: 82416264@ulife.com.br</p>
                    <a href="https://www.linkedin.com/in/plinio-augusto-302a37367">LinkedIn</a>
                  </div>
              </div>
            </div>
          </div>
        </Container>
      <Footer />
    </>
  )
}

export default contatos

