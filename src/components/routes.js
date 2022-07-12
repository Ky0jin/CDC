import { Routes, Route} from "react-router-dom";
// importando as paginas
import Login from '../pages/login/Login'
import Registrar from '../pages/registrar/Registrar'
import Home from '../pages/home/Home'
import Sobre from '../pages/sobre/Sobre'
import Editais from '../pages/editais/Editais'
import Feed from '../pages/feed/Feed'
import Superior from '../pages/superior/Superior'
import Tecnologia from '../pages/tecnologia/Tecnologia'
import Vestibulares from '../pages/vestibulares/Vestibulares'
// contexto para o signin
import UseAuth from '../hooks/useAuth'

const Private = ({ Item }) => {
    const { signed } = UseAuth();
    if (signed > 0) {
      return <Item/>
    } else {
      return <Login/>
    }
  }

function Rotas() {
    return ( 
        <>
             <Routes>
                <Route exact path="/" element={  <Private Item={Home}/> }/>
                <Route exact path="/sobre" element={  <Sobre />}/>
                <Route exact path="/Editais" element={  <Editais />}/>
                <Route exact path="/Feed" element={  <Feed />}/>
                <Route exact path="/Login" element={  <Login />}/>
                <Route exact path="/registrar" element={  <Registrar />}/>
                <Route excat path="/superior" element={ <Superior/> }/>
                <Route excat path="/vestibulares" element= { <Vestibulares />} />
                <Route excat path="/tecnologia" element= { <Tecnologia /> }/>
            </Routes>
        </>
     );
}

export default Rotas;