import React, { Component } from "react";
// Rotas e navegacao
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// Menubar e estilizacao
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";                 
import "primeicons/primeicons.css"; 
import {Menubar} from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
// imagens e conteudo da pagina
import vestibular from './images/Enem.jpg'
import superior from './images/superio.jpg'
import tecnico from './images/tec.jpeg'
import logo from './logo.svg'
// estilizacao
import './App.css'; 

const Private = ({ Item }) => {
  const signed = false;

  return signed > 0 ? <Item /> : <Login />;
}
class App extends Component {
  render () {
    const items = [
      {
        label:'Home',
        icon:'pi pi-fw pi-home',
        url: '/'
     },
     {
        id: "Sobre",
        label:'Sobre',
        icon:'pi pi-align-justify',
        url: '/Sobre'
        
     },
     {
       label:'Editais',
       icon:'pi pi-book',
       url: '/Editais'
     },
     {
       label:'Feed',
       icon:'pi pi-hashtag',
       url: '/Feed'
     },
     {
       label:'Login',
       icon:'pi pi-fw pi-user',
       url: '/Login'
     }
    ]
    return (
      <Router>
          <Menubar 
          model={items}
          start={<img className="App-logo" src={logo} alt="logo"></img>}
          end={<InputText placeholder="Search" type="text"/>}/>
  
          <Routes>
            <Route exact path="/" element={  <Private Item={Home}/> }/>
            <Route exact path="/sobre" element={  <Sobre />}/>
            <Route exact path="/Editais" element={  <Editais />}/>
            <Route exact path="/Feed" element={  <Feed />}/>
            <Route exact path="/Login" element={  <Login />}/>
          </Routes>
      </Router>
    );
  }

}

export default App;

function Home() {
  return (
    <div>
      <main className="App">
              <h1>
                Categorias
              </h1>
            <div className="images">
              <a href="./"><img src={vestibular} alt="vestibulares"></img></a>
              <a href="./"><img src={superior} alt="superior"></img></a>
              <a href="./"><img src={tecnico} alt="tecnologia"></img></a>
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

function Sobre() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Editais() {
  return (
    <div>
      <h2>Editais</h2>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
    </div>
  );
}

function Feed() {
  return (
    <div>
      <h2>Feed</h2>
    </div>
  );
}