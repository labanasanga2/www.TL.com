import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { Button } from './ui/button';

// Placeholder images - user will replace with their own photos
const photos = [
  { url: "/photos/photo1.jpg", caption: "Our beautiful moments ❤️" },
  { url: "/photos/photo2.jpg", caption: "Forever and always 💕" },
  { url: "/photos/photo3.jpg", caption: "My favorite person ☃️" },
  { url: "/photos/photo4.jpg", caption: "Love you always 💖" },
];

const PhotoGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section id="gallery" className="py-20 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-romantic-glow opacity-50" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heart className="w-8 h-8 text-christmas-red mx-auto mb-4 animate-heart-beat" />
          <h2 className="text-4xl sm:text-5xl font-elegant text-foreground mb-4">
            Our Moments
          </h2>
          <p className="text-lg font-romantic text-christmas-red">
            Every picture tells our story 📸💕
          </p>
        </div>

        {/* Gallery Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-card">
          {/* Snow overlay */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {Array.from({ length: 15 }).map((_, i) => (
              <div
                key={i}
                className="absolute text-primary-foreground/30 snowflake"
                style={{
                  left: `${Math.random() * 100}%`,
                  fontSize: `${Math.random() * 6 + 4}px`,
                  animationDuration: `${Math.random() * 8 + 6}s`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                ❄
              </div>
            ))}
          </div>

          {/* Photo Display */}
          <div className="relative aspect-[4/3] bg-muted">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-105'
                }`}
              >
                {/* Placeholder for user's photos */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-warm">
                  <div className="text-center">
                    <Heart className="w-16 h-16 text-christmas-red/30 mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">
                      Photo {index + 1}
                    </p>
                    <p className="text-sm text-muted-foreground/70 mt-2">
                      Add your photo to /public{photo.url}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
              <p className="text-primary-foreground text-center font-romantic text-xl">
                {photos[currentIndex].caption}
              </p>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background/80 rounded-full"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 py-4 bg-card">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlay(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-christmas-red w-8' 
                    : 'bg-christmas-red/30 hover:bg-christmas-red/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
