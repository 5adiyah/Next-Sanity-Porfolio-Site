import { Navbar } from "./components/Navbar/navbar";
import { Hero } from "./components/Hero/hero";
import { About } from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Services } from "./components/Services/Services";
import { Contact } from './components/Contact/Contact';

import "./styles/styles.scss";

function App() {

  return (
    <div className="site-wrapper container">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
