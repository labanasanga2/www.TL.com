import { Heart, Snowflake, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToGallery = () => {
    const element = document.querySelector('#gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-romantic-glow opacity-40" />
      
      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <Snowflake
            key={i}
            className="absolute text-christmas-red/20 animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              fontSize: `${20 + i * 5}px`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10 max-w-3xl mx-auto">
        {/* TL Logo */}
        <div className="mb-8 animate-scale-in">
          <span className="text-8xl sm:text-9xl font-romantic text-gradient-love text-glow">
            TL
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl font-elegant text-foreground mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Merry Christmas,{' '}
          <span className="text-christmas-red">My Love</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl sm:text-2xl font-romantic text-christmas-red mb-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          ☃️ To my favorite snowman ☃️
        </p>

        {/* Message */}
        <p className="text-lg text-foreground/70 max-w-xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          This website is my gift to you — a little corner of the internet 
          that's just for us, filled with love, memories, and a whole lot of Christmas magic. 🎄💕
        </p>

        {/* Hearts decoration */}
        <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Heart className="w-6 h-6 text-christmas-red animate-heart-beat" fill="currentColor" />
          <span className="text-sm text-muted-foreground font-romantic">Scroll to explore our love story</span>
          <Heart className="w-6 h-6 text-christmas-red animate-heart-beat" fill="currentColor" style={{ animationDelay: '0.3s' }} />
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToGallery}
          className="animate-bounce text-christmas-red hover:text-christmas-red-light transition-colors"
        >
          <ChevronDown className="w-10 h-10" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
