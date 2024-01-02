import Header from './components/Header/Header';

import Hero from './components/Hero/Hero';
import Tech from './components/Techstack/Tech';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Certificate from './components/Certificate/Certificate';
import Achievement from './components/Achievement/Achievement';
import Proj from './components/Projects/Proj';
import Footer from './components/Footer/Footer';

// import Services from './components/Services/services';

import './App.css';

// import { Routes, Route } from 'react-router-dom';
// import routes from './routes';

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

      <Proj />
      <Footer />

      {/* <Header />
      <main>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          ))}
        </Routes>
      </main>
      <Footer /> */}
    </>
  );
};

export default App;
