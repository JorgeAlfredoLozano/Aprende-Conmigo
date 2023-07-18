import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Perfil from './components/Perfil/Perfil';
import Faq from './components/Faq/Faq';
import SearchPage from './components/SearchPage/SearchPage';
import Checkout from './components/CheckoutForm/CheckoutForm'
import PublicationUser from './components/PublicationUser/PublicationUser'
import UpdatePubli from './components/UpdatePubli/UpdatePubli';
import DetailAnuncio from './components/DetailAnuncio/DetailAnuncio';
import Messages from './components/Messages/Messages';
import PerfilPublic from './components/PublicPerfil/PerfilPublic';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/perfil/:tab" element={<Perfil/>}/>
          <Route path="/preguntas" element={<Faq/>}/>
          <Route path="/busqueda" element={<SearchPage/>}/>
          <Route path='/pago/:id' element={<Checkout/>}/>
          <Route path='/anuncios' element={<PublicationUser/>}/>
          <Route path='/detail/:id' element={<UpdatePubli/>}/>
          <Route path='/anuncio/:id' element={<DetailAnuncio/>}/>
          <Route path='/messages' element={<Messages/>}/>
          <Route path='/perfilPublico/:id' element={<PerfilPublic/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
