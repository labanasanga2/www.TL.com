import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Heart, Snowflake } from 'lucide-react';

interface LandingGameProps {
  onComplete: () => void;
}

const LandingGame = ({ onComplete }: LandingGameProps) => {
  const [noClicks, setNoClicks] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number }[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const playfulMessages = [
    "You are not allowed to not be my Christmas snowman 😌 Try again!",
    "Nope! That button doesn't work for you 💕",
    "Terence... really? Click YES! ☃️",
    "The NO button is scared of you! 😂❤️",
    "I knew you'd say YES eventually 🥰",
  ];

  const handleNoHover = () => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const maxX = container.width - 150;
      const maxY = container.height - 60;
      setNoButtonPosition({
        x: Math.random() * maxX - maxX / 2,
        y: Math.random() * maxY - maxY / 2,
      });
    }
  };

  const handleNoClick = () => {
    setNoClicks((prev) => prev + 1);
    setShowMessage(true);
    handleNoHover();
    setTimeout(() => setShowMessage(false), 2500);
  };

  const handleYesClick = (e: React.MouseEvent) => {
    setCelebrating(true);
    
    // Create burst effects
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const newBursts = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: rect.left + rect.width / 2 + (Math.random() - 0.5) * 200,
      y: rect.top + rect.height / 2 + (Math.random() - 0.5) * 200,
    }));
    setBursts(newBursts);

    // Start music
    if ((window as any).startBackgroundMusic) {
      (window as any).startBackgroundMusic();
    }

    // Proceed after animation
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-snow overflow-hidden"
    >
      {/* Decorative snowflakes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <Snowflake
            key={i}
            className="absolute text-christmas-red/20 animate-snow-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Burst effects */}
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="fixed pointer-events-none z-50"
          style={{ left: burst.x, top: burst.y }}
        >
          <Heart className="text-christmas-red burst w-8 h-8" />
        </div>
      ))}

      {/* Main content */}
      <div className={`text-center px-6 transition-all duration-500 ${celebrating ? 'scale-110 opacity-0' : 'opacity-100'}`}>
        {/* TL Logo */}
        <div className="mb-8 animate-float">
          <span className="text-6xl font-romantic text-gradient-love">TL</span>
        </div>

        {/* Question */}
        <h1 className="text-3xl sm:text-5xl font-elegant text-foreground mb-4 animate-fade-in">
          Hey Terence…
        </h1>
        <p className="text-xl sm:text-2xl font-romantic text-christmas-red mb-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          would you be my Christmas snowman? ☃️❤️
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative min-h-[120px]">
          <Button
            variant="love"
            size="xl"
            onClick={handleYesClick}
            className="text-xl px-12 animate-scale-in z-10"
            style={{ animationDelay: '0.6s' }}
          >
            YES 💕
          </Button>

          <Button
            variant="outline"
            size="xl"
            onClick={handleNoClick}
            onMouseEnter={handleNoHover}
            className="text-xl px-12 animate-scale-in transition-transform duration-200 relative"
            style={{ 
              animationDelay: '0.8s',
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            }}
          >
            NO
          </Button>
        </div>

        {/* Playful message */}
        {showMessage && (
          <div className="mt-8 p-4 bg-romance-blush rounded-2xl max-w-md mx-auto animate-scale-in">
            <p className="text-christmas-red-dark font-medium">
              {playfulMessages[noClicks % playfulMessages.length]}
            </p>
          </div>
        )}
      </div>

      {/* Celebration overlay */}
      {celebrating && (
        <div className="absolute inset-0 flex items-center justify-center bg-romance-blush/30 backdrop-blur-sm">
          <div className="text-center animate-scale-in">
            <Heart className="w-24 h-24 text-christmas-red mx-auto animate-heart-beat" />
            <p className="text-3xl font-romantic text-christmas-red mt-4">
              I knew it! 💕
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingGame;
