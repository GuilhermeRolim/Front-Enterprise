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
          <h1 className="sobre-title">Quem somos?</h1>
          <p>
            Na <strong>Front Enterprise</strong>, acreditamos que a inovação é a chave para a segurança digital. Somos uma empresa especializada em <strong>soluções de segurança para transações via Pix</strong> e 
            <strong> tecnologias antifraude</strong>, oferecendo ferramentas inteligentes para proteger usuários e empresas no ambiente financeiro digital.
          </p>
          <p>
            Combinamos <strong>tecnologia de ponta</strong>, análise de dados em tempo real e uma equipe apaixonada por 
            cibersegurança para criar sistemas confiáveis e intuitivos. Nossa missão é simples: 
            <strong> tornar o Pix mais seguro para todos</strong>.
          </p>
          <h2 className="sobre-subtitle">Nossa Visão</h2>
          <p>
            Ser referência em soluções de segurança digital, criando um ecossistema mais seguro, 
            transparente e ágil para pagamentos instantâneos.
          </p>

          <h2 className="sobre-subtitle">Nossos Valores</h2>
          <ul>
            <li><strong>Confiança</strong> acima de tudo</li>
            <li><strong>Inovação constante</strong></li>
            <li><strong>Transparência nas relações</strong></li>
            <li><strong>Compromisso com o usuário</strong></li>
          </ul>
          
          <img className={styles.img_sobre} src="/undraw_online-banking_l9sn.svg" alt="Imagem de sobre"/>
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default sobre;
