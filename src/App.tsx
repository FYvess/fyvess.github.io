import { ThemeProvider } from './context/ThemeContext';
import { MusicProvider } from './context/MusicContext';
import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Marquee } from './components/Marquee/Marquee';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Chatbot } from './components/Chatbot/Chatbot';
import { marqueeTools } from './data/content';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <MusicProvider>
        <Navigation />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Marquee items={marqueeTools} />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </MusicProvider>
    </ThemeProvider>
  );
}

export default App;
