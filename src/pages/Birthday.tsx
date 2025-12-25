import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Gift, Cake, Sparkles, PartyPopper, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FortuneCookie from '@/components/FortuneCookie';

interface Confetti {
  id: number;
  left: number;
  delay: number;
  color: string;
  size: number;
}

interface Balloon {
  id: number;
  left: number;
  color: string;
  delay: number;
}

// Birthday photos - add your photos to /public/birthday-photos/
const birthdayPhotos = [
  { url: '/photos/tkm1.jpg', caption: 'Happy Birthday! 🎂' },
  { url: '/photos/tkm2.jpg', caption: 'Celebrating You! 🎉' },
  { url: '/photos/tkm5.jpg', caption: 'My Birthday Boy 💕' },
    { url: '/photos/tkm5.jpg', caption: 'My Birthday Boy 💕' },
     { url: '/photos/tkm20.jpg', caption: 'My Birthday Boy 💕' },
];

const Birthday = () => {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [balloons, setBalloons] = useState<Balloon[]>([]);
  const [showMessage, setShowMessage] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const colors = ['#dc2626', '#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6'];

  useEffect(() => {
    // Generate confetti
    const newConfetti: Confetti[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 6,
    }));
    setConfetti(newConfetti);

    // Generate balloons
    const newBalloons: Balloon[] = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: 5 + i * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
    }));
    setBalloons(newBalloons);

    // Show message after animation
    setTimeout(() => setShowMessage(true), 1000);
  }, []);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % birthdayPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + birthdayPhotos.length) % birthdayPhotos.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-romance-blush via-background to-christmas-gold/10 relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="fixed pointer-events-none confetti"
          style={{
            left: `${c.left}%`,
            top: '-20px',
            width: `${c.size}px`,
            height: `${c.size}px`,
            backgroundColor: c.color,
            animationDelay: `${c.delay}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
          }}
        />
      ))}

      {/* Balloons */}
      {balloons.map((b) => (
        <div
          key={b.id}
          className="fixed bottom-0 pointer-events-none balloon"
          style={{
            left: `${b.left}%`,
            animationDelay: `${b.delay}s`,
          }}
        >
          <div
            className="w-12 h-16 rounded-full"
            style={{ backgroundColor: b.color }}
          />
          <div className="w-px h-20 bg-foreground/30 mx-auto" />
        </div>
      ))}

      {/* Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-christmas-gold sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <Button variant="snow" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className={`text-center transition-all duration-1000 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Birthday icons */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <PartyPopper className="w-12 h-12 text-christmas-gold animate-wiggle" />
            <Cake className="w-16 h-16 text-christmas-red animate-float" />
            <PartyPopper className="w-12 h-12 text-christmas-gold animate-wiggle" style={{ animationDelay: '0.5s' }} />
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-7xl font-elegant text-foreground mb-6">
            Happy Birthday,{' '}
            <span className="text-gradient-love">Terence!</span>
          </h1>

          <p className="text-2xl font-romantic text-christmas-red mb-12">
            🎂 A belated but heartfelt celebration 🎂
          </p>

          {/* Birthday card */}
          <div className="max-w-2xl mx-auto glass rounded-3xl p-8 sm:p-12 mb-12">
            <Gift className="w-16 h-16 text-christmas-gold mx-auto mb-6 animate-float" />

            <h2 className="text-3xl font-romantic text-christmas-red mb-6">
              My Dearest Love,
            </h2>

            <div className="text-left space-y-4 text-foreground/80 leading-relaxed">
              <p>
                I know I missed your birthday, and I'm so sorry. But I want you to know that
                every day with you feels like a celebration, and I'm grateful for every moment.
              </p>
              <p>
                This year, you've been my rock, my joy, my everything. You've made me laugh
                when I wanted to cry, held me when I needed comfort, and loved me when I
                didn't feel lovable.
              </p>
              <p>
                So here's my belated birthday wish for you: May this new year of your life
                be filled with all the love, happiness, and magic you deserve. And may I be
                lucky enough to be by your side for all of it.
              </p>
              <p className="text-christmas-red font-romantic text-xl pt-4">
                Happy Birthday, my love. Today, tomorrow, and always. 🎂💕
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">With all my love,</p>
              <p className="text-2xl font-romantic text-christmas-red mt-2">
                Your Laban 💕
              </p>
            </div>
          </div>

          {/* Birthday Photo Gallery */}
          <div className="max-w-lg mx-auto mb-12">
            <h3 className="text-2xl font-romantic text-christmas-red mb-6">
              📸 Birthday Memories 📸
            </h3>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-card p-2">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img
                  src={birthdayPhotos[currentPhotoIndex].url}
                  alt={birthdayPhotos[currentPhotoIndex].caption}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Show placeholder if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                {/* Placeholder shown if image fails */}
                <div className="hidden absolute inset-0 bg-gradient-warm flex items-center justify-center">
                  <div className="text-center p-8">
                    <Gift className="w-16 h-16 text-christmas-red/30 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">
                      Birthday Photo {currentPhotoIndex + 1}
                    </p>
                    <p className="text-sm text-muted-foreground/70 mt-2">
                      Add photo to /public/birthday-photos/photo{currentPhotoIndex + 1}.jpg
                    </p>
                  </div>
                </div>

                {/* Navigation arrows */}
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-all shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6 text-christmas-red" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-2 transition-all shadow-lg"
                >
                  <ChevronRight className="w-6 h-6 text-christmas-red" />
                </button>
              </div>

              {/* Caption */}
              <p className="text-center mt-4 font-romantic text-lg text-christmas-red">
                {birthdayPhotos[currentPhotoIndex].caption}
              </p>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-3 pb-2">
                {birthdayPhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPhotoIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentPhotoIndex
                        ? 'bg-christmas-red w-6'
                        : 'bg-christmas-red/30 hover:bg-christmas-red/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Fortune Cookie Section */}
          <div className="max-w-2xl mx-auto glass rounded-3xl p-8 sm:p-12 mb-12">
            <FortuneCookie />
          </div>

          {/* Bottom message */}
          <div className="mt-16 flex items-center justify-center gap-3">
            <Heart className="w-6 h-6 text-christmas-red animate-heart-beat" fill="currentColor" />
            <span className="font-romantic text-xl text-christmas-red">
              Here's to many more birthdays together
            </span>
            <Heart className="w-6 h-6 text-christmas-red animate-heart-beat" fill="currentColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
