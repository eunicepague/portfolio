import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Tech from './components/Techstack/Tech';
import Achievement from './components/Achievement/Achievement';

// import Services from './components/Services/services';
import Proj from './components/Projects/Proj';

import './App.css';
import Certificate from './components/Certificate/Certificate';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Tech />
      <About />

      <Experience />

      <Certificate />
      <Achievement />
      {/* <Services /> */}
      {/* <Projects /> */}
      <Proj />
      <Footer />
    </>
  );
};

export default App;
