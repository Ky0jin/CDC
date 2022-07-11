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
import logo from './logo.svg'
// estilizacao
import './App.css'; 
// Hook global
import { AuthProvider } from './contexts/auth'
// contexto para o signin
import UseAuth from './hooks/useAuth'
// importando as paginas
import Login from './pages/login/Login'
import Registrar from './pages/registrar/Registrar'
import Home from './pages/home/Home'

const Private = ({ Item }) => {
  const { signed } = UseAuth();
  if (signed > 0) {
    return <Item/>
  } else {
    return <Login/>
  }
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
     },
     {
      label: 'Logout',
      disabled: false,
      comand: () => { const { signout } = UseAuth(); signout() },
      url: '/Login'
     }
    ]
    return (
      <AuthProvider>
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
            <Route exact path="/registrar" element={  <Registrar />}/>
          </Routes>
      </Router>
      </AuthProvider>
    );
  }

}

export default App;

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

function Feed() {
  return (
    <div>
      <h2>Feed</h2>
    </div>
  );
}