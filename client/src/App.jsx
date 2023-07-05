import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/searchPage" element={<SearchPage/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
