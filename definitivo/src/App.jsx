import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <section className='container'>
        <div>
          <p>
            Olá, somos <br/>
            <span> Guilherme Rolim</span> <br/>
            <span> Gustavo Catani</span> <br/>
            <span> Plinio Augusto</span> <br/>
            Estudantes de análise e Desenvolvimento de Sistemas
          </p>
          <button>
            Saiba mais sobre nós
          </button>
        </div>
        <figure>
          <img src="" alt="" />
        </figure>
      </section>       
      <Footer/>
    </>
  )
}

export default App
