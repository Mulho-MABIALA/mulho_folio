import { useMemo } from 'react';

// Génère des bulles de verre flottantes en fond, purement décoratives.
// Visibles mais lentes : peu nombreuses et un mouvement doux pour ne pas distraire.
const BUBBLE_COUNT = 10;

const LiquidBubbles = () => {
  const bubbles = useMemo(() => {
    return Array.from({ length: BUBBLE_COUNT }, (_, i) => {
      const size = 18 + Math.round(((i * 37) % 100) / 100 * 40); // 18 - 58px
      const left = ((i * 53 + 7) % 100);
      const duration = 30 + ((i * 5) % 18); // 30 - 48s (lent)
      const delay = -((i * 2.7) % duration);
      const drift = (i % 2 === 0 ? 1 : -1) * (15 + (i * 11) % 40);
      const opacity = 0.16 + ((i * 13) % 26) / 100; // 0.16 - 0.42

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
