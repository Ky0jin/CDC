import vestibular from '../../images/Enem.jpg'
import superior from '../../images/superio.jpg'
import tecnico from '../../images/tec.jpeg'
// imagens e conteudo da pagina
import logo from '../../logo.svg'
const Home = () => {
    return (
      <div>
        <main className="App">
                <h1>
                  Categorias
                </h1>
              <div className="images">
                <a href="/vestibulares"><img src={vestibular} alt="vestibulares"></img></a>
                <a href="/superior"><img src={superior} alt="superior"></img></a>
                <a href="/tecnologia"><img src={tecnico} alt="tecnologia"></img></a>
              </div>
          </main>
          <footer>
          <a href="./">
             <img className="App-logo" src={logo} alt="logo"></img>
            </a>
            <div>
              <a href="./"><h3>SOBRE</h3></a>
            </div>
            <div>
              <h3>Email:dabm@discente.ifpe.edu.br</h3>
            </div>
            <div>
              <h3>Politica de privacidade</h3>
            </div>
          </footer>
      </div>
    );
  }
export default Home;