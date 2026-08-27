import React from 'react';
import { useHearingCompanion } from '../context/HearingCompanionContext';

export const BottomNav = () => {
  const { currentScreen, setCurrentScreen } = useHearingCompanion();

  // Suppress bottom navbar on onboarding welcome screen
  if (currentScreen === 'welcome') return null;

  const items = [
    { id: 'dashboard', label: 'Home', icon: 'home' },
    { id: 'controls', label: 'Controls', icon: 'tune' },
    { id: 'modes', label: 'Modes', icon: 'hearing' },
    { id: 'soundscapes', label: 'Soundscapes', icon: 'nature_people' },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 w-full flex justify-around items-center px-2 h-16 bg-surface border-t border-outline-variant/30 flat no shadows z-50">
      {items.map((item) => {
        const isActive = currentScreen === item.id || 
          (item.id === 'modes' && (currentScreen === 'environment' || currentScreen === 'insights'));
        
        return (
          <button
            key={item.id}
            onClick={() => setCurrentScreen(item.id)}
            aria-label={item.label}
            className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
              isActive
                ? 'text-primary border-t-4 border-primary pt-1 bg-surface-container-low/40'
                : 'text-secondary pt-2 hover:bg-surface-container-low'
            }`}
          >
            <span
              className="material-symbols-outlined text-[24px]"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              {item.icon}
            </span>
            <span className={`font-label-sm text-[11px] mt-0.5 ${isActive ? 'font-bold' : ''}`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
