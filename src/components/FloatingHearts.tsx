import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingHearts = ({ count = 15 }: { count?: number }) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts: Heart[] = [];
    for (let i = 0; i < count; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 16 + 12,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 5,
      });
    }
    setHearts(newHearts);
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute floating-heart text-christmas-red/40"
          style={{
            left: `${heart.left}%`,
            bottom: `${Math.random() * 40}%`,
            fontSize: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
