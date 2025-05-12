import './App.scss'
import Header from './Header';
import Home from './pages/Home';
import About from './pages/About';
import WorkExamples from './pages/WorkExamples';
import Contact from './pages/Contact';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
export default function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/workExamples' element={<WorkExamples/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </div>  
  );
}