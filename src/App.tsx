import { ThemeProvider } from './context/ThemeContext';
import { MusicProvider } from './context/MusicContext';
import { IntroLoader } from './components/IntroLoader/IntroLoader';
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
        <IntroLoader />
        <Navigation />
        <main>
          <Hero />
          <Marquee items={marqueeTools} />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </MusicProvider>
    </ThemeProvider>
  );
}

export default App;
