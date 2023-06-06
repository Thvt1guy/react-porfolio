// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
