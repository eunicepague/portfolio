import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Proj from './components/Projects/Proj';
import Footer from './components/Footer/Footer';

const routes = [
  {
    path: '/',
    element: <Hero />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/project',
    element: <Proj />,
  },
  {
    path: '/contact',
    element: <Footer />,
  },
];

export default routes;
