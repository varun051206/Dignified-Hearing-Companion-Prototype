import React from 'react';
import { useHearingCompanion } from '../context/HearingCompanionContext';

export const Sidebar = () => {
  const { currentScreen, setCurrentScreen } = useHearingCompanion();

  // Hide sidebar on welcome screen or if full-bleed layout is active
  if (currentScreen === 'welcome') return null;

  const navItems = [
    { id: 'dashboard', label: 'Home', icon: 'home' },
    { id: 'controls', label: 'Controls', icon: 'tune' },
    { id: 'modes', label: 'Modes', icon: 'hearing' },
    { id: 'soundscapes', label: 'Soundscapes', icon: 'nature_people' },
    { id: 'environment', label: 'Environment', icon: 'traffic' },
    { id: 'insights', label: 'Insights', icon: 'analytics' },
    { id: 'profile', label: 'Profile', icon: 'person' },
  ];

  return (
    <aside className="hidden md:flex flex-col fixed top-0 left-0 w-64 h-screen bg-surface border-r border-outline-variant/30 z-50 p-6">
      <div className="mb-8 flex items-center justify-between">
        <span 
          onClick={() => setCurrentScreen('dashboard')} 
          className="font-headline-md text-headline-md font-semibold text-primary cursor-pointer hover:opacity-90 transition-opacity"
        >
          Dignified
        </span>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto pr-1">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentScreen(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg font-label-lg text-label-lg transition-colors text-left ${
                isActive
                  ? 'bg-primary-container text-on-primary-container font-semibold shadow-xs'
                  : 'text-on-surface-variant hover:bg-surface-container-low hover:text-primary'
              }`}
            >
              <span 
                className="material-symbols-outlined text-[24px]"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="pt-4 border-t border-outline-variant/30 mt-auto">
        <button
          onClick={() => setCurrentScreen('welcome')}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-secondary text-sm hover:bg-surface-container-low transition-colors"
        >
          <span className="material-symbols-outlined text-lg">info</span>
          <span>Welcome & Setup</span>
        </button>
      </div>
    </aside>
  );
};
