
// import './App.css';
import About from './components/About';
import Events from './components/Events';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Screened from './components/Screened';
import { ReactDOM } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Events' element={<Events/>} />
      <Route path='//Movies' element={<Screened/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
