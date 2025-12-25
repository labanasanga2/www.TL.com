import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const fortunes = [
  "Our love will grow stronger every single day 💕",
  "Not breaking up till February 30th ✨",
  "Together we can conquer anything 💪❤️",
  "Today 17:38 will be special✨",
  "You're my favorite hello and hardest goodbye 💋",
  "Send Laban money now 😂💸",
  "Send Terence Money  😂💸",
  "T and L have to kiss today 💓",
  "With you, forever isn't long enough ∞",
  "Date nighttttt 💖",
  "Post your babe today⭐",
  "SHOT OCLOCK 🫨",
  "I fall for you more each day 🍂❤️",
  "You're my sunshine on cloudy days ☀️",
  "Together is my favorite place to be 🏠💕",
  "You have to get a bottle today✨",
  "GO ON THAT WALK WITH BABE",
  "Weather for a toast with babe🌟",
  "I'm so lucky you're mine 🍀❤️",
  "You have to cuddle today💭💕",
  "Every love song reminds me of you 🎵",
  "Fets luck👫❤️",
  "Our love is unbreakable 💪💕",
  "ADVENTUTE TIME,,,then shots with bae",
  "SEND A HEARTFELF MESSAGE TO BAE,YOU WILL RECEIVE BACK 💬❤️",
  "You're my happy ending 📖💕",
  "Together we're unstoppable 🚀❤️",
  "SHOT!SHOT!SHOT! 🎶💕",
  "Our bond is eternal 🔗❤️",
  "You make my soul smile 😊💕",
  "We're meant to be, you and me 💑",
  "You're my safe place 🏡❤️",
  "CHUG!!!!!💕",
  "CALL BABE RN tell him you love him❤️",
  "I'm home when I'm with you 🏠💕",
  "You're my once in a lifetime 💫",
  "YOU AND BABE WILL KISS SOON⭐❤️",
  "You're the missing piece I found 🧩💕",
  "Together we create magic ✨❤️",
  "BADDIE BADDIE....? 💖",
  "Our love is a beautiful journey 🛤️💕",
  "You make me better every day 📈❤️",
  "I cherish every moment with you ⏰💕",
  "You're my heart's desire 💓",
  "We're soulmates for life 👻❤️",
  "COCTAIL WITH BABE😊💕",
  "Our love conquers all 🏆❤️",
  "You're my greatest blessing 🙏💕",
  "Together we're invincible 💪❤️",
  "You're the love of my life 💕",
  "Our future is bright together ☀️❤️",
  "You're my partner in everything 🤝💕",
  "I'm grateful for you every day 🙏❤️",
  "You're my happily ever after 👑💕",
  "Our love is pure and true 💎❤️",
  "GO SEE BABE RN👤💕",
  "Together we make perfect sense ✓❤️",
  "You're my North Star 🌟💕",
  "Our love keeps growing stronger 💪❤️",
  "POISON KISS 💕∞",
];

const FortuneCookie = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCracking, setIsCracking] = useState(false);
  const [fortune, setFortune] = useState('');
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number }[]>([]);

  // Get fortune based on day of year (cycles through 60 fortunes)
  const getDailyFortune = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return fortunes[dayOfYear % fortunes.length];
  };

  const handleClick = () => {
    if (isOpen) return;

    setIsCracking(true);

    // Create sparkle effects
    const newSparkles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    }));
    setSparkles(newSparkles);

    // Set fortune after crack animation
    setTimeout(() => {
      setFortune(getDailyFortune());
      setIsOpen(true);
      setIsCracking(false);
    }, 800);
  };

  const resetCookie = () => {
    setIsOpen(false);
    setFortune('');
    setSparkles([]);
  };

  return (
    <div className="relative py-12">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-romantic text-christmas-red mb-2">
          🥠 Daily Fortune Cookie 🥠
        </h3>
        <p className="text-muted-foreground">
          Click the cookie to reveal today's fortune for us!
        </p>
      </div>

      <div className="flex justify-center">
        <div className="relative">
          {/* Sparkle effects */}
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="absolute left-1/2 top-1/2 pointer-events-none"
              style={{
                animation: 'sparkle-burst 0.8s ease-out forwards',
                transform: `translate(${sparkle.x}px, ${sparkle.y}px)`,
              }}
            >
              <Sparkles className="w-6 h-6 text-christmas-gold" />
            </div>
          ))}

          {/* Fortune Cookie */}
          <button
            onClick={handleClick}
            disabled={isOpen}
            className={`relative transition-all duration-300 ${
              !isOpen ? 'cursor-pointer hover:scale-110' : 'cursor-default'
            }`}
          >
            <div className={`relative ${isCracking ? 'animate-cookie-crack' : ''}`}>
              {/* Cookie shape - closed */}
              {!isOpen && (
                <div className="relative">
                  <svg
                    viewBox="0 0 120 80"
                    className="w-40 h-28 drop-shadow-lg"
                  >
                    {/* Cookie body */}
                    <ellipse
                      cx="60"
                      cy="50"
                      rx="55"
                      ry="25"
                      fill="#D4A574"
                      className={isCracking ? 'animate-pulse' : ''}
                    />
                    <ellipse
                      cx="60"
                      cy="45"
                      rx="50"
                      ry="20"
                      fill="#E8C097"
                    />
                    {/* Fold line */}
                    <path
                      d="M 20 50 Q 60 30 100 50"
                      stroke="#C4956A"
                      strokeWidth="2"
                      fill="none"
                    />
                    {/* Crack effect when clicking */}
                    {isCracking && (
                      <path
                        d="M 60 30 L 58 40 L 62 45 L 58 55 L 60 65"
                        stroke="#8B6914"
                        strokeWidth="2"
                        fill="none"
                        className="animate-pulse"
                      />
                    )}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl mt-2">🥠</span>
                  </div>
                </div>
              )}

              {/* Cookie shape - open with fortune */}
              {isOpen && (
                <div className="relative animate-scale-in">
                  {/* Left half */}
                  <div className="absolute -left-8 top-4 transform -rotate-12">
                    <svg viewBox="0 0 60 60" className="w-16 h-16">
                      <path
                        d="M 50 30 Q 30 10 10 30 Q 30 50 50 30"
                        fill="#D4A574"
                      />
                      <path
                        d="M 45 28 Q 28 12 12 28"
                        fill="#E8C097"
                      />
                    </svg>
                  </div>

                  {/* Right half */}
                  <div className="absolute -right-8 top-4 transform rotate-12">
                    <svg viewBox="0 0 60 60" className="w-16 h-16 scale-x-[-1]">
                      <path
                        d="M 50 30 Q 30 10 10 30 Q 30 50 50 30"
                        fill="#D4A574"
                      />
                      <path
                        d="M 45 28 Q 28 12 12 28"
                        fill="#E8C097"
                      />
                    </svg>
                  </div>

                  {/* Fortune paper */}
                  <div className="bg-cream-100 px-6 py-4 rounded-lg shadow-lg border-2 border-christmas-gold/30 max-w-xs mx-auto animate-float">
                    <p className="text-christmas-red font-romantic text-lg text-center leading-relaxed">
                      {fortune}
                    </p>
                    <div className="flex justify-center mt-3">
                      <Heart className="w-5 h-5 text-christmas-red animate-heart-beat" fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </button>

          {/* Reset button */}
          {isOpen && (
            <div className="text-center mt-6 animate-fade-in">
              <button
                onClick={resetCookie}
                className="text-sm text-muted-foreground hover:text-christmas-red transition-colors underline"
              >
                Get a new cookie tomorrow! ✨
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes cookie-crack {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg) scale(1.05); }
          50% { transform: rotate(3deg) scale(1.1); }
          75% { transform: rotate(-2deg) scale(1.05); }
        }
        
        @keyframes sparkle-burst {
          0% { 
            opacity: 1; 
            transform: translate(0, 0) scale(0);
          }
          50% {
            opacity: 1;
            transform: translate(var(--x, 0), var(--y, 0)) scale(1.2);
          }
          100% { 
            opacity: 0; 
            transform: translate(calc(var(--x, 0) * 2), calc(var(--y, 0) * 2)) scale(0);
          }
        }
        
        .animate-cookie-crack {
          animation: cookie-crack 0.8s ease-in-out;
        }
        
        @keyframes scale-in {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default FortuneCookie;
