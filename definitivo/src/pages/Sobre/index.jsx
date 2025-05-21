import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './Sobre.module.css'

function Sobre() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.sobreSection}>
          {/* Bloco principal com texto + imagem */}
          <div className={styles.sobreContent}>
            {/* Texto à esquerda */}
            <div className={styles.texto}>
              <h2>Quem Somos</h2>
              <p>
                Na <strong>Front Enterprise</strong>, acreditamos que a inovação é a chave para a segurança digital.
                Somos uma empresa especializada em <strong>soluções de segurança para transações via Pix</strong> e
                <strong> tecnologias antifraude</strong>, oferecendo ferramentas inteligentes para proteger usuários e
                empresas no ambiente financeiro digital.
              </p>
              <p>
                Combinamos <strong>tecnologia de ponta</strong>, análise de dados em tempo real e uma equipe apaixonada
                por cibersegurança para criar sistemas confiáveis e intuitivos. Nossa missão é simples: <strong>tornar o Pix mais seguro para todos</strong>.
              </p>
              <h3>Nossa Visão</h3>
              <p>
                Ser referência em soluções de segurança digital, criando um ecossistema mais seguro,
                transparente e ágil para pagamentos instantâneos.
              </p>
              <h3>Nossos Valores</h3>
              <ul>
                <li><strong>Confiança</strong> acima de tudo</li>
                <li><strong>Inovação</strong> constante</li>
                <li><strong>Transparência</strong> nas relações</li>
                <li><strong>Compromisso</strong> com o usuário</li>
              </ul>
            </div>

            {/* Imagem à direita */}
            <div className={styles.imgContainer}>
              <img
                className={styles.imgSobre}
                src="/undraw_online-banking_l9sn.svg"
                alt="Imagem sobre segurança digital"
              />

              {/* Criadores abaixo da imagem */}
              <div className={styles.creditos}>
                <p><strong>Criadores do projeto:</strong></p>
                <p>Gustavo Catani Lazzarini<br />RA: 824121241</p>
                <p>Guilherme Forchito Rolim<br />RA: 82414858</p>
                <p>Plinio Augusto Pizzolitto Benevenuto<br />RA: 82416264</p>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <Footer />
    </>
  )
}

export default Sobre
