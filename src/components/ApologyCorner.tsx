import { Heart, MessageCircleHeart } from 'lucide-react';
import { Button } from './ui/button';

const apologyMessages = {
  terence: encodeURIComponent(
    "My dearest Laban 💕\n\n" +
    "I'm reaching out because I want you to know how deeply sorry I am. " +
    "Sometimes I mess up and I know that can hurt you. But please know that " +
    "my love for you is real and unwavering.\n\n" +
    "You mean everything to me and the last thing I ever want to do is " +
    "cause you pain.I'm learning and growing and I promise to always " +
    "try to be better for you, for us.\n\n" +
    "Please forgive me? I love you more than words could ever express. " +
    "You're my heart, my home, my everything.\n\n" +
    "Forever yours,\nTerence 🦋❤️"
  ),
  laban: encodeURIComponent(
    "My love, Terence 💕\n\n" +
    "I'm sorry. From the bottom of my heart, I'm truly sorry. " +
    "You deserve all the love and patience in the world and sometimes " +
    "I fall short of giving you that.\n\n" +
    "I never want to be the reason for your tears or your hurt. " +
    "You are my Christmas miracle, my safe place, my everything. " +
    "And I promise to cherish you better.\n\n" +
    "Can you forgive me? I love you so much it scares me sometimes. " +
    "But it's the most beautiful kind of scared.\n\n" +
    "Always and forever,\nYour Laban 🎄❤️"
  ),
};

const ApologyCorner = () => {
  const handleApology = (person: 'terence' | 'laban') => {
    const phoneNumber = "254798162561"; // User can add phone number
    const message = apologyMessages[person];
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="apology" className="py-20 px-6 relative overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 bg-romantic-glow opacity-30" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <MessageCircleHeart className="w-10 h-10 text-christmas-red mx-auto mb-4" />
          <h2 className="text-4xl sm:text-5xl font-elegant text-foreground mb-4">
            Apology Corner
          </h2>
          <p className="text-lg font-romantic text-christmas-red">
            Because sometimes love means saying sorry 💝
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Click a button to send a heartfelt apology via WhatsApp
          </p>
        </div>

        {/* Apology Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <div className="group">
            <Button
              variant="romantic"
              size="xl"
              onClick={() => handleApology('terence')}
              className="text-lg px-8 py-8 h-auto flex flex-col gap-2 min-w-[250px] group-hover:animate-wiggle"
            >
              <Heart className="w-8 h-8" />
              <span className="font-romantic text-xl">Terence, click here</span>
              <span className="text-sm opacity-80">to apologize 💕</span>
            </Button>
          </div>

          <div className="text-4xl font-romantic text-christmas-red/30">
            or
          </div>

          <div className="group">
            <Button
              variant="romantic"
              size="xl"
              onClick={() => handleApology('laban')}
              className="text-lg px-8 py-8 h-auto flex flex-col gap-2 min-w-[250px] group-hover:animate-wiggle"
            >
              <Heart className="w-8 h-8" />
              <span className="font-romantic text-xl">Laban, click here</span>
              <span className="text-sm opacity-80">to apologize 💕</span>
            </Button>
          </div>
        </div>

        {/* Sweet note */}
        <p className="text-center mt-12 text-muted-foreground font-light italic">
          "Every couple argues, but not every couple knows how to make up with love. We do. 💕"
        </p>
      </div>
    </section>
  );
};

export default ApologyCorner;
