import { useState } from 'react';
import { Heart, Menu, X, Gift } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Gallery', href: '#gallery' },
    { label: 'Love Notes', href: '#love-notes' },
    { label: 'Apology', href: '#apology' },
    { label: 'Reassurance', href: '#reassurance' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            <span className="text-2xl font-romantic text-gradient-love">TL</span>
            <Heart className="w-4 h-4 text-christmas-red group-hover:animate-heart-beat" fill="currentColor" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-christmas-red transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
            <Link to="/birthday">
              <Button variant="gold" size="sm" className="gap-2">
                <Gift className="w-4 h-4" />
                Birthday Surprise
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground/80 hover:text-christmas-red transition-colors font-medium py-2 text-left"
                >
                  {item.label}
                </button>
              ))}
              <Link to="/birthday" onClick={() => setIsOpen(false)}>
                <Button variant="gold" size="sm" className="gap-2 w-full mt-2">
                  <Gift className="w-4 h-4" />
                  Birthday Surprise
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
