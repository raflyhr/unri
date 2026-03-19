import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import ProgramsSection from './components/ProgramsSection';
import NewsSection from './components/NewsSection';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WelcomeSection />
        <ProgramsSection />
        <NewsSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
