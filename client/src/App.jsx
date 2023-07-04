import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import FormAnuncio from './components/formAnuncio/formAnuncio';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/form" element={<FormAnuncio/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
