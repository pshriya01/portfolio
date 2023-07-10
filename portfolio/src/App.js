import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import Contact from './Components/Contact';
import { About } from './Components/About';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;