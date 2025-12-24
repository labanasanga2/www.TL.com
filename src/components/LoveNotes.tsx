import { Heart, Sparkles } from 'lucide-react';

const notes = [
  {
    title: "To My Snowman",
    content: "Every moment with you feels like Christmas morning. You're my favorite gift, wrapped in love and tied with forever. 🎄❤️",
  },
  {
    title: "My Promise",
    content: "In every snowflake that falls, I see our story. In every star that shines, I see your smile. You are my everything. ✨",
  },
  {
    title: "Forever Yours",
    content: "They say home is where the heart is... and my heart is always with you. You are my safe place, my happy place, my forever place. 🏠💕",
  },
  {
    title: "17:38",
    content: "At 17:38, every single day, my heart beats a little differently. It beats for you. It beats with you. It beats because of you. ⏰❤️",
  },
];

const LoveNotes = () => {
  return (
    <section id="love-notes" className="py-20 px-6 bg-gradient-warm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-christmas-gold/30">
        <Sparkles className="w-12 h-12 sparkle" />
      </div>
      <div className="absolute bottom-10 right-10 text-christmas-gold/30">
        <Sparkles className="w-12 h-12 sparkle" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Sparkles className="w-8 h-8 text-christmas-gold mx-auto mb-4" />
          <h2 className="text-4xl sm:text-5xl font-elegant text-foreground mb-4">
            Love Notes
          </h2>
          <p className="text-lg font-romantic text-christmas-red">
            Little letters from my heart to yours 💌
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notes.map((note, index) => (
            <div
              key={index}
              className="love-note-card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Heart decoration */}
              <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="w-8 h-8 text-christmas-red animate-heart-beat" fill="currentColor" />
              </div>

              <h3 className="text-2xl font-romantic text-christmas-red mb-4">
                {note.title}
              </h3>
              <p className="text-foreground/80 leading-relaxed font-light">
                {note.content}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-christmas-red/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Extra romantic message */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-3xl bg-romance-blush/50 backdrop-blur-sm">
            <p className="text-xl font-romantic text-christmas-red-dark">
              "You're not just my boyfriend, you're my best friend, <br />
              my partner, my everything. I love you, Terence. 💕"
            </p>
            <p className="mt-4 text-foreground/60 font-light">
              — Your Laban ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveNotes;
