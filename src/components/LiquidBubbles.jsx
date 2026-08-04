import { useMemo } from 'react';

// Génère des bulles de verre flottantes en fond, purement décoratives.
const BUBBLE_COUNT = 16;

const LiquidBubbles = () => {
  const bubbles = useMemo(() => {
    return Array.from({ length: BUBBLE_COUNT }, (_, i) => {
      const size = 14 + Math.round(((i * 37) % 100) / 100 * 46); // 14 - 60px
      const left = ((i * 53 + 7) % 100);
      const duration = 16 + ((i * 5) % 14); // 16 - 30s
      const delay = -((i * 2.7) % duration);
      const drift = (i % 2 === 0 ? 1 : -1) * (20 + (i * 11) % 60);
      const opacity = 0.25 + ((i * 13) % 40) / 100;

      return {
        id: i,
        style: {
          '--bubble-size': `${size}px`,
          '--bubble-left': `${left}%`,
          '--bubble-duration': `${duration}s`,
          '--bubble-delay': `${delay}s`,
          '--bubble-drift': `${drift}px`,
          '--bubble-opacity': opacity,
        },
      };
    });
  }, []);

  return (
    <div className="liquid-bubbles" aria-hidden="true">
      {bubbles.map((b) => (
        <span key={b.id} className="bubble" style={b.style} />
      ))}
    </div>
  );
};

export default LiquidBubbles;
