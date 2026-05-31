import { Helmet } from 'react-helmet-async';
import { useTheme } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/app.css';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Helmet>
        <html lang="en" data-theme={theme} />
      </Helmet>
      <Header theme={theme} toggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
