import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-to-t from-christmas-red/10 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        {/* TL Logo */}
        <div className="mb-6">
          <span className="text-5xl font-romantic text-gradient-love">
            TL
          </span>
        </div>

        {/* Message */}
        <p className="text-lg font-romantic text-christmas-red mb-2">
          Made with all my love
        </p>
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <Heart className="w-4 h-4 text-christmas-red animate-heart-beat" fill="currentColor" />
          <span>Terence & Laban</span>
          <Heart className="w-4 h-4 text-christmas-red animate-heart-beat" fill="currentColor" />
        </div>

        {/* Special details */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span>📅 01/08/2024</span>
          <span>⏰ 17:38</span>
          <span>🎄 Christmas 2024</span>
          <span>❤️ Forever</span>
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-xs text-muted-foreground/60">
          This website is a love letter, a promise, and a warm hug wrapped in code. 💕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
