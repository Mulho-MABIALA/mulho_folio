import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';

const ColorContext = createContext();

// Palettes de couleurs avec les nuances nécessaires
const COLOR_PALETTES = {
  gold: {
    name: 'Gold',
    // Accent principal (équiv. amber-400)
    400: '#fbbf24',
    // Accent secondaire (équiv. amber-500)
    500: '#f59e0b',
    // Accent sombre (équiv. amber-600)
    600: '#d97706',
    // Gradient end (équiv. yellow-500)
    y500: '#eab308',
    // Gradient end dark (équiv. yellow-600)
    y600: '#ca8a04',
    // Texte clair (équiv. amber-200/60)
    light: 'rgba(251, 191, 36, 0.6)',
    // RGB pour les rgba()
    rgb: '251, 191, 36',
    rgb500: '245, 158, 11',
    rgb600: '217, 119, 6',
  },
  blue: {
    name: 'Blue',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    y500: '#1d4ed8',
    y600: '#1e40af',
    light: 'rgba(96, 165, 250, 0.6)',
    rgb: '96, 165, 250',
    rgb500: '59, 130, 246',
    rgb600: '37, 99, 235',
  },
  purple: {
    name: 'Purple',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    y500: '#7c3aed',
    y600: '#6d28d9',
    light: 'rgba(192, 132, 252, 0.6)',
    rgb: '192, 132, 252',
    rgb500: '168, 85, 247',
    rgb600: '147, 51, 234',
  },
  pink: {
    name: 'Pink',
    400: '#f472b6',
    500: '#ec4899',
    600: '#db2777',
    y500: '#be185d',
    y600: '#9d174d',
    light: 'rgba(244, 114, 182, 0.6)',
    rgb: '244, 114, 182',
    rgb500: '236, 72, 153',
    rgb600: '219, 39, 119',
  },
  red: {
    name: 'Red',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    y500: '#b91c1c',
    y600: '#991b1b',
    light: 'rgba(248, 113, 113, 0.6)',
    rgb: '248, 113, 113',
    rgb500: '239, 68, 68',
    rgb600: '220, 38, 38',
  },
  orange: {
    name: 'Orange',
    400: '#fb923c',
    500: '#f97316',
    600: '#ea580c',
    y500: '#c2410c',
    y600: '#9a3412',
    light: 'rgba(251, 146, 60, 0.6)',
    rgb: '251, 146, 60',
    rgb500: '249, 115, 22',
    rgb600: '234, 88, 12',
  },
  green: {
    name: 'Green',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    y500: '#15803d',
    y600: '#166534',
    light: 'rgba(74, 222, 128, 0.6)',
    rgb: '74, 222, 128',
    rgb500: '34, 197, 94',
    rgb600: '22, 163, 74',
  },
  cyan: {
    name: 'Cyan',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    y500: '#0e7490',
    y600: '#155e75',
    light: 'rgba(34, 211, 238, 0.6)',
    rgb: '34, 211, 238',
    rgb500: '6, 182, 212',
    rgb600: '8, 145, 178',
  },
};

const applyColorToCSS = (palette) => {
  const root = document.documentElement;
  root.style.setProperty('--accent-400', palette[400]);
  root.style.setProperty('--accent-500', palette[500]);
  root.style.setProperty('--accent-600', palette[600]);
  root.style.setProperty('--accent-y500', palette.y500);
  root.style.setProperty('--accent-y600', palette.y600);
  root.style.setProperty('--accent-light', palette.light);
  root.style.setProperty('--accent-rgb', palette.rgb);
  root.style.setProperty('--accent-rgb-500', palette.rgb500);
  root.style.setProperty('--accent-rgb-600', palette.rgb600);
};

export const ColorProvider = ({ children }) => {
  const [colorKey, setColorKey] = useState(() => {
    const saved = localStorage.getItem('accentColor');
    return saved && COLOR_PALETTES[saved] ? saved : 'gold';
  });

  const palette = COLOR_PALETTES[colorKey];

  useEffect(() => {
    localStorage.setItem('accentColor', colorKey);
    applyColorToCSS(COLOR_PALETTES[colorKey]);
  }, [colorKey]);

  // Appliquer dès le premier rendu
  useEffect(() => {
    applyColorToCSS(COLOR_PALETTES[colorKey]);
  }, []);

  const setColor = useCallback((key) => {
    if (COLOR_PALETTES[key]) {
      setColorKey(key);
    }
  }, []);

  const value = {
    colorKey,
    palette,
    setColor,
    palettes: COLOR_PALETTES,
  };

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within a ColorProvider');
  }
  return context;
};

export { COLOR_PALETTES };
export default ColorContext;
