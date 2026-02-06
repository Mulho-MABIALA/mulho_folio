import { useState, useRef, useEffect } from 'react';
import { useColor } from '../contexts/ColorContext';

const ColorPicker = () => {
  const { colorKey, setColor, palettes } = useColor();
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef(null);

  // Fermer le picker quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const colorEntries = Object.entries(palettes);

  return (
    <div className="relative" ref={pickerRef}>
      {/* Bouton pour ouvrir le picker */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-lg bg-zinc-800/50 hover:bg-zinc-700 border transition-all duration-300"
        style={{
          borderColor: `rgba(var(--accent-rgb), 0.2)`,
        }}
        title="Changer la couleur d'accent"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" fill={palettes[colorKey][400]} stroke="none" />
          <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" strokeLinecap="round" style={{ stroke: palettes[colorKey][400] }} />
        </svg>
      </button>

      {/* Dropdown avec les couleurs */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 p-3 rounded-xl bg-zinc-900/95 backdrop-blur-lg border shadow-2xl z-50"
          style={{
            borderColor: `rgba(var(--accent-rgb), 0.3)`,
            boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 20px rgba(var(--accent-rgb), 0.1)`,
          }}
        >
          <div className="grid grid-cols-4 gap-2">
            {colorEntries.map(([key, palette]) => (
              <button
                key={key}
                onClick={() => {
                  setColor(key);
                  setIsOpen(false);
                }}
                className="group relative w-9 h-9 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: palette[400],
                  boxShadow: colorKey === key
                    ? `0 0 0 3px #000, 0 0 0 5px ${palette[400]}, 0 0 15px ${palette[400]}80`
                    : `0 2px 8px ${palette[400]}40`,
                }}
                title={palette.name}
              >
                {colorKey === key && (
                  <svg className="w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
