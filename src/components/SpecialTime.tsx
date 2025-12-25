import { Clock, Heart, Send } from 'lucide-react';
import { Button } from './ui/button';

const SpecialTime = () => {
  const handleSendHappy1738 = () => {
    const message = encodeURIComponent("Happy 17:38 ❤️");
    const phoneNumber = "254798162561"; // User can add phone number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-r from-christmas-red/5 via-transparent to-christmas-gold/5" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="glass rounded-3xl p-8 sm:p-12 text-center">
          {/* Clock Display */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-christmas-red/10 to-christmas-gold/10">
              <Clock className="w-10 h-10 text-christmas-red" />
              <span className="text-6xl sm:text-7xl font-elegant text-gradient-love">
                17:38
              </span>
            </div>
          </div>

          {/* Message */}
          <p className="text-xl font-romantic text-foreground mb-4">
            Our special time ⏰
          </p>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Every day at 17:38, take a moment to think of us. 
            This is our time, our ritual, our little secret. 💕
          </p>

          {/* Anniversary */}
          <div className="mb-8 p-4 rounded-xl bg-romance-blush/30 inline-block">
            <p className="text-sm text-muted-foreground mb-1">Together since</p>
            <p className="text-2xl font-elegant text-christmas-red">
              01/08/2025
            </p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Heart className="w-4 h-4 text-christmas-red" fill="currentColor" />
              <span className="text-sm font-romantic text-christmas-red">Forever to go</span>
              <Heart className="w-4 h-4 text-christmas-red" fill="currentColor" />
            </div>
          </div>

          {/* Send Button */}
          <Button
            variant="love"
            size="xl"
            onClick={handleSendHappy1738}
            className="group"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <span>Send Happy 17:38 💕</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialTime;
