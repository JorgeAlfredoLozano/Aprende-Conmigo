import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Perfil from './components/Perfil/Perfil';
import Faq from './components/Faq/Faq';
import SearchPage from './components/SearchPage/SearchPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/perfil" element={<Perfil/>}/>
          <Route path="/preguntas" element={<Faq/>}/>
          <Route path="/busqueda" element={<SearchPage/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
