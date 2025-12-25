import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { Button } from './ui/button';

// Placeholder URLs - user will replace with their own audio files
const songs = [
  { name: "Photograph - Ed Sheeran", url: "/music/photograph.mp3" },
  { name: "White Ferrari - Frank Ocean", url: "/music/white-ferrari.mp3" },
];

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (audioRef.current && hasInteracted) {
      audioRef.current.volume = 0.4;
      if (isPlaying) {
        audioRef.current.play().catch(console.log);
      }
    }
  }, [isPlaying, currentSongIndex, hasInteracted]);

  const handleSongEnd = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  const togglePlay = () => {
    setHasInteracted(true);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.log);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const startMusic = () => {
    setHasInteracted(true);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(console.log);
    }
  };

  // Expose startMusic to window for the landing page
  useEffect(() => {
    (window as any).startBackgroundMusic = startMusic;
    return () => {
      delete (window as any).startBackgroundMusic;
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={currentSong.url}
        onEnded={handleSongEnd}
        loop={songs.length === 1}
      />
      
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className="glass rounded-full px-4 py-2 text-sm text-foreground/80 hidden sm:block">
          <span className="flex items-center gap-2">
            <Music className="w-4 h-4 text-christmas-red" />
            <span className="font-romantic">{currentSong.name}</span>
          </span>
        </div>
        
        <Button
          variant="snow"
          size="icon"
          onClick={togglePlay}
          className="rounded-full w-12 h-12 shadow-lg"
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5" />
          )}
        </Button>
      </div>
    </>
  );
};

export default MusicPlayer;
