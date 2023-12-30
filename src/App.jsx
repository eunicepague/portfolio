import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Tech from './components/Techstack/Tech';
import Achievement from './components/Achievement/Achievement';

import Services from './components/Services/services';
import Proj from './components/Projects/Proj';

import './App.css';
import Certificate from './components/Certificate/Certificate';
import Experience from './components/Experience/Experience';

const App = () => {
  return (
    <>
      <Hero />
      <About />
      <Tech />
      <Experience />

      <Certificate />
      <Achievement />
      {/* <Services /> */}
      {/* <Projects /> */}
      <Proj />
    </>
  );
};

export default App;
