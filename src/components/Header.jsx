import React from 'react';
import { useHearingCompanion } from '../context/HearingCompanionContext';

export const Header = () => {
  const { currentScreen, setCurrentScreen, leftBattery, rightBattery } = useHearingCompanion();

  // If on welcome screen, render minimal onboarding header as in Stitch Design Screen 8
  if (currentScreen === 'welcome') {
    return (
      <header className="flex justify-between items-center w-full px-5 h-14 bg-surface md:px-12 sticky top-0 z-50 border-b border-outline-variant/20">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl" data-icon="signal_cellular_alt">
            signal_cellular_alt
          </span>
        </div>
        <button 
          onClick={() => setCurrentScreen('dashboard')} 
          className="font-headline-md text-headline-md font-semibold text-primary focus:outline-none hover:opacity-80 transition-opacity"
        >
          Dignified
        </button>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl" data-icon="battery_horiz_075">
            battery_horiz_075
          </span>
        </div>
      </header>
    );
  }

  return (
    <header className="bg-surface text-primary docked full-width top-0 flat no shadows flex justify-between items-center w-full px-5 h-14 md:hidden sticky top-0 z-40 border-b border-outline-variant/20">
      <button 
        aria-label="Signal Strength"
        onClick={() => setCurrentScreen('welcome')}
        className="w-[44px] h-[44px] flex items-center justify-center text-primary rounded-full hover:bg-surface-container-low active:scale-95 transition-all"
        title="View Welcome & Setup"
      >
        <span className="material-symbols-outlined" data-icon="signal_cellular_alt">
          signal_cellular_alt
        </span>
      </button>
      <button 
        onClick={() => setCurrentScreen('dashboard')}
        className="font-headline-md text-headline-md font-semibold text-primary cursor-pointer hover:opacity-90"
      >
        Dignified
      </button>
      <button 
        aria-label="Battery Status"
        onClick={() => setCurrentScreen('profile')}
        className="w-[44px] h-[44px] flex items-center justify-center text-primary rounded-full hover:bg-surface-container-low active:scale-95 transition-all"
        title={`Left: ${leftBattery}%, Right: ${rightBattery}%`}
      >
        <span className="material-symbols-outlined" data-icon="battery_horiz_075">
          battery_horiz_075
        </span>
      </button>
    </header>
  );
};
