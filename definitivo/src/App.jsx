import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <section className='container'>
        <div className='apresentacao'>
          <p>
            Olá, seja bem-vindo <br/>
            <span> somos a Front-Enterprise</span> <br/>
            <span> uma empresa de tecnologia focada em soluções e para o mercado financeiro.</span>
          </p>
          <button className='btn btn-red'>
            Saiba mais sobre nós
          </button>
        </div>
        <figure>
          <img className='img-home' src="/undraw_mobile-payments_0u42.svg" alt="Imagem de  home" />
        </figure>
      </section>       
      <Footer/>
    </>
  )
}

export default App
