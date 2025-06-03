import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './projetos.module.css';

function Projetos(){
    return(
        <>
            <Header /> 
                <Container>
                    <section className="projetos-section"></section>
                    <div className={styles["projetos-container"]}>
                        <div className={styles["projetos-texto"]}>
                        <h1>Projeto Front Enterprise – Proteção Financeira e Justiça</h1>

                            <h2>Apresentação Institucional</h2>
                            <p>
                                A <strong>Front Enterprise</strong> concentra-se na construção de defesas contra fraudes perpetradas por meio do PIX 
                                e na recuperação de fundos para as vítimas. Com o aumento constante dos crimes digitais no Brasil, o objetivo da nossa 
                                organização é fornecer informações, assistência jurídica e orientar as vítimas com medidas eficazes para se protegerem 
                                ou mitigarem danos.
                            </p>

                            <p>
                                Só no Brasil, mais de <strong>4,7 milhões de golpes com PIX</strong> foram registrados em 2024, com prejuízos estimados em 
                                <strong> R$ 6,5 bilhões</strong>. Estima-se que golpes financeiros atinjam mais de <strong>4.600 tentativas por hora</strong> em todo o país. 
                                Esses números demonstram a necessidade urgente de ações para defender e auxiliar os brasileiros em recuperação.
                            </p>

                            <h3>O que oferecemos</h3>
                            <p>Em nosso portal online, oferecemos:</p>
                            <ul>
                                <li><strong>Dicas atualizadas</strong> de segurança digital;</li>
                                <li><strong>Campanhas educativas e preventivas</strong>;</li>
                                <li>
                                <strong>Instruções sobre como registrar:</strong> 
                                boletim de ocorrência, denúncia ao Banco Central e bloqueio de solicitações 
                                por meio do <em>MED (Mecanismo Especial de Devolução)</em>;
                                </li>
                                <li>
                                <strong>Aconselhamento jurídico especializado</strong> para vítimas interessadas em obter ressarcimento 
                                por via judicial ou extrajudicial.
                                </li>
                            </ul>

                            <h3>Nossa Missão</h3>
                            <p>
                                A essência do conhecimento é fornecer proteção e resposta rápida ao público em casos de golpes, e nosso objetivo 
                                é garantir que ninguém precise enfrentar golpes fraudulentos sem apoio. Com a <strong>Front Enterprise</strong>, 
                                <em> você não está sozinho.</em>
                            </p>
                            </div>
                    </div>
                    <img src="undraw_mobile-payments_0u42.svg" alt="Imagem de projetos" className="projetos-image" />
                </Container>
            <Footer />
        </>
    )
}

export default Projetos
