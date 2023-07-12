import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Perfil from './components/Perfil/Perfil';
import Faq from './components/Faq/Faq';
import SearchPage from './components/SearchPage/SearchPage';
import Checkout from './components/CheckoutFormStripe/CheckoutFormStripe'
import PublicationUser from './components/PublicationUser/PublicationUser'
import UpdatePubli from './components/UpdatePubli/UpdatePubli';import Details from './components/Detail/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/preguntas" element={<Faq />} />
          <Route path="/busqueda" element={<SearchPage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path='/pago' element={<Checkout/>}/>
          <Route path='/pub' element={<PublicationUser/>} />
          <Route path='/detail/:id' element={<UpdatePubli/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


