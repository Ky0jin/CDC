import React, { Component } from "react";
// Rotas e navegacao
import { BrowserRouter as Router} from "react-router-dom";
import Rotas from './components/routes'
// Menubar e estilizacao
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";                 
import "primeicons/primeicons.css"; 
import {Menubar} from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import Items from './components/menu'
// imagens e conteudo da pagina
import logo from './logo.svg'
// estilizacao
import './App.css'; 
// Hook global
import { AuthProvider } from './contexts/auth'

 
class App extends Component {
  render () {
    return (
      <AuthProvider>
        <Router>
          <Menubar 
          model={Items}
          start={<img className="App-logo" src={logo} alt="logo"></img>}
          end={<InputText placeholder="Search" type="text"/>}/>
          <Rotas />
        </Router>
      </AuthProvider>
    );
  }

}

export default App;
