import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Perfil from './components/Perfil/Perfil';
import Faq from './components/Faq/Faq';
import SearchPage from './components/SearchPage/SearchPage';
import DetailAnuncio from './components/DetailAnuncio/DetailAnuncio';
import PerfilPublic from './components/PublicPerfil/PerfilPublic';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import DashBoardAdmin from './components/DashBoardAdmin/DashBoardAdmin';
import Purchases from './components/Purchase/Purchase';
import Sales from './components/Sales/Sales';
import Notifications from './components/NavBar/Notifications';
import About from './components/About/About'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/perfil/:tab" element={<Perfil/>}/>
          <Route path="/preguntas" element={<Faq/>}/>
          <Route path="/admin" element={<DashBoardAdmin/>}/>
          <Route path="/busqueda/:lesson" element={<SearchPage/>}/>
          <Route path='/anuncio/:id' element={<DetailAnuncio/>}/>
          <Route path='/perfilPublico/:id' element={<PerfilPublic/>}/>
          <Route path='/compras' element={<Purchases/>}/>
          <Route path='/sales' element={<Sales/>}/>
          <Route path='*' element={<Home/>}/>
          <Route path='/user' element={<DashBoardAdmin/>}/>
          <Route path='/not' element={<Notifications/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
