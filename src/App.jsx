import Landing from './components/Hero/Landing';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Tech from './components/Techstack/Tech';
import Achievement from './components/Achievement/Achievement';

import Services from './components/Services/services';
import Proj from './components/Projects/Proj';

import Cute from './components/Hero/Cute';
import './App.css';
import Experience from './components/About/Experience';

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Tech />
      <Experience />
      <Achievement />
      {/* <Services /> */}
      {/* <Projects /> */}
      <Proj />
    </>
  );
};

export default App;
