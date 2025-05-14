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
        <Route path='/React_Task1/' element={<Home/>}/>
        <Route path='/React_Task1/about' element={<About/>}/>
        <Route path='/React_Task1/workExamples' element={<WorkExamples/>}/>
        <Route path='/React_Task1/contact' element={<Contact/>}/>
      </Routes>
      
    </div>  
  );
}