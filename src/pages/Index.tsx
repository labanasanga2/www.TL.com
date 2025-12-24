import { useState, useEffect } from 'react';
import LandingGame from '@/components/LandingGame';
import Snowfall from '@/components/Snowfall';
import FloatingHearts from '@/components/FloatingHearts';
import MusicPlayer from '@/components/MusicPlayer';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import LoveNotes from '@/components/LoveNotes';
import ApologyCorner from '@/components/ApologyCorner';
import ReassuranceSection from '@/components/ReassuranceSection';
import SpecialTime from '@/components/SpecialTime';
import Footer from '@/components/Footer';

const Index = () => {
  const [showGame, setShowGame] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleGameComplete = () => {
    setShowGame(false);
    setTimeout(() => setShowContent(true), 100);
  };

  // Check if user has already completed the game (for navigation back)
  useEffect(() => {
    const hasCompleted = sessionStorage.getItem('gameCompleted');
    if (hasCompleted) {
      setShowGame(false);
      setShowContent(true);
    }
  }, []);

  const markGameComplete = () => {
    sessionStorage.setItem('gameCompleted', 'true');
    handleGameComplete();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Landing Game */}
      {showGame && <LandingGame onComplete={markGameComplete} />}

      {/* Main Site Content */}
      {showContent && (
        <>
          {/* Background Effects */}
          <Snowfall />
          <FloatingHearts />
          
          {/* Music Player */}
          <MusicPlayer />

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main>
            <HeroSection />
            <PhotoGallery />
            <LoveNotes />
            <ApologyCorner />
            <ReassuranceSection />
            <SpecialTime />
          </main>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
