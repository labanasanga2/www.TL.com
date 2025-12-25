import { Shield, Heart, Sparkles, Home } from 'lucide-react';
import { Button } from './ui/button';

const reassuranceMessages = [
  {
    icon: Heart,
    label: "I Choose You",
    message: encodeURIComponent(
      "Hey my love 💕\n\n" +
      "I just wanted to remind you that I choose you. Every single day, " +
      "in every moment, my heart chooses you.\n\n" +
      "Not because I have to, but because I want to. " +
      "You are my favorite choice, my best decision, my forever person.\n\n" +
      "I love you always.TODAY, TOMORROW, FOREVER! 💖"
    ),
  },
  {
    icon: Shield,
    label: "You're Safe With Me",
    message: encodeURIComponent(
      "My dearest 🌟\n\n" +
      "I want you to know that you're safe with me. Your heart, your " +
      "secrets, your fears, your dreams - they're all safe in my hands.\n\n" +
      "I will protect our love with everything I have. " +
      "You can trust me completely. Always.\n\n" +
      "With all my love 💝TODAY, TOMORROW, FOREVER! 💖"
    ),
  },
  {
    icon: Sparkles,
    label: "I'm Not Going Anywhere",
    message: encodeURIComponent(
      "Hey you 💕\n\n" +
      "Just a reminder: I'm not going anywhere. Through the good days " +
      "and the hard days, through the laughter and the tears.\n\n" +
      "You're stuck with me, and I'm so happy about it. " +
      "We're in this together, forever.\n\n" +
      "I love you more than yesterday, less than tomorrow ❤️"
    ),
  },
  {
    icon: Home,
    label: "You're My Home",
    message: encodeURIComponent(
      "My love 🏠💕\n\n" +
      "Home isn't a place for me. It's you. Wherever you are, " +
      "that's where I belong.\n\n" +
      "You are my comfort, my peace, my happy place. " +
      "Thank you for being my home.\n\n" +
      "Forever yours 💖"
    ),
  },
];

const ReassuranceSection = () => {
  const handleReassurance = (message: string) => {
    const phoneNumber = "254798162561"; // User can add phone number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="reassurance" className="py-20 px-6 bg-gradient-warm relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <Heart
            key={i}
            className="absolute text-christmas-red/10 floating-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Shield className="w-10 h-10 text-christmas-green mx-auto mb-4" />
          <h2 className="text-4xl sm:text-5xl font-elegant text-foreground mb-4">
            Reassurance Corner
          </h2>
          <p className="text-lg font-romantic text-christmas-red">
            Send a reminder of your love and commitment 💪💕
          </p>
        </div>

        {/* Reassurance Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {reassuranceMessages.map((item, index) => (
            <Button
              key={index}
              variant="snow"
              size="xl"
              onClick={() => handleReassurance(item.message)}
              className="h-auto py-6 px-8 flex flex-col items-center gap-3 group hover:scale-105 transition-transform duration-300"
            >
              <item.icon className="w-8 h-8 text-christmas-red group-hover:animate-heart-beat" />
              <span className="font-romantic text-xl text-christmas-red">
                {item.label}
              </span>
              <span className="text-xs text-muted-foreground">
                Tap to send via WhatsApp 💌
              </span>
            </Button>
          ))}
        </div>

        {/* Bottom message */}
        <div className="mt-16 text-center">
          <p className="text-lg text-foreground/70 font-light max-w-xl mx-auto">
            Sometimes we all need a little reminder that we're loved, 
            chosen, and safe. Send one whenever you feel like it. 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReassuranceSection;
