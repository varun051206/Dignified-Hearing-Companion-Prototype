import React from 'react';
import { useHearingCompanion } from '../context/HearingCompanionContext';

export const DashboardScreen = () => {
  const {
    masterVolume,
    setMasterVolume,
    activeMode,
    setCurrentScreen,
    leftBattery,
    rightBattery,
    devicesConnected,
    activeSoundscape,
    toggleSoundscape,
    appliedSmartSuggestion,
    applySmartSuggestion,
  } = useHearingCompanion();

  const handleDecreaseVolume = () => {
    setMasterVolume((prev) => Math.max(0, prev - 5));
  };

  const handleIncreaseVolume = () => {
    setMasterVolume((prev) => Math.min(100, prev + 5));
  };

  const getModeLabel = (mode) => {
    switch (mode) {
      case 'conversation': return 'Conversation';
      case 'quiet': return 'Quiet';
      case 'outdoor': return 'Outdoor';
      case 'music': return 'Music';
      case 'custom': return 'Custom EQ';
      default: return 'Conversation';
    }
  };

  return (
    <div className="flex-1 w-full max-w-[1200px] mx-auto px-5 md:px-12 py-6 space-y-6 md:pl-64">
      {/* Status Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="font-display-lg text-display-lg text-on-surface font-bold">Good Morning</h1>
          <p className="font-body-lg text-body-lg text-secondary mt-1 flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full inline-block ${devicesConnected ? 'bg-primary animate-pulse' : 'bg-outline'}`}></span>
            {devicesConnected ? 'Devices Connected' : 'Connecting Devices...'}
          </p>
        </div>

        {/* Battery Status Cards */}
        <div className="flex gap-4">
          <div className="flex items-center gap-3 bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 min-w-[120px]">
            <span className="material-symbols-outlined text-primary text-2xl">hearing</span>
            <div>
              <span className="block font-label-sm text-xs text-secondary uppercase tracking-wider">Left</span>
              <span className="block font-headline-md text-headline-md font-bold text-primary">{leftBattery}%</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 min-w-[120px]">
            <span className="material-symbols-outlined text-primary text-2xl">hearing</span>
            <div>
              <span className="block font-label-sm text-xs text-secondary uppercase tracking-wider">Right</span>
              <span className="block font-headline-md text-headline-md font-bold text-primary">{rightBattery}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Master Volume & Current Mode */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Master Volume Section */}
        <section className="md:col-span-8 bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 flex flex-col justify-center min-h-[200px] shadow-xs">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-lg text-headline-lg font-semibold text-primary">Master Volume</h2>
            <span className="font-headline-md text-headline-md font-bold px-4 py-2 rounded-lg bg-primary-container text-on-primary-container">
              {masterVolume}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              aria-label="Decrease volume"
              onClick={handleDecreaseVolume}
              className="w-[56px] h-[56px] shrink-0 flex items-center justify-center rounded-full border border-outline-variant text-secondary hover:bg-surface-container-low transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span className="material-symbols-outlined">volume_down</span>
            </button>
            <div className="flex-1 relative h-12 flex items-center">
              <input
                aria-label="Master Volume"
                className="w-full"
                max="100"
                min="0"
                type="range"
                value={masterVolume}
                onChange={(e) => setMasterVolume(Number(e.target.value))}
              />
            </div>
            <button
              aria-label="Increase volume"
              onClick={handleIncreaseVolume}
              className="w-[56px] h-[56px] shrink-0 flex items-center justify-center rounded-full border border-outline-variant text-secondary hover:bg-surface-container-low transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span className="material-symbols-outlined">volume_up</span>
            </button>
          </div>
        </section>

        {/* Current Active Mode Section */}
        <section className="md:col-span-4 bg-primary-container text-on-primary-container rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[200px] border-2 border-primary shadow-xs">
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>
          <div className="relative z-10 flex justify-between items-start">
            <h2 className="font-label-lg text-label-lg opacity-90">Current Mode</h2>
            <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              forum
            </span>
          </div>
          <div className="relative z-10 mt-auto">
            <h3 className="font-display-lg text-display-lg text-white font-bold mb-1">
              {getModeLabel(activeMode)}
            </h3>
            <p className="font-body-md text-sm text-white/90 mb-4">
              Focusing on voices directly in front of you.
            </p>
            <button
              onClick={() => setCurrentScreen('modes')}
              className="font-label-sm text-xs uppercase tracking-wider text-white border border-white/40 rounded-lg px-4 py-2 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              Change Mode
            </button>
          </div>
        </section>
      </div>

      {/* Recommendations & Quick Soundscapes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Smart Recommendations */}
        <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
              <h2 className="font-headline-md text-headline-md font-semibold text-primary">Suggested Setting</h2>
            </div>
            <button
              onClick={() => setCurrentScreen('environment')}
              className="font-label-sm text-xs text-primary hover:underline"
            >
              Scanner
            </button>
          </div>
          
          <div className="bg-surface-container-low rounded-xl p-4 flex items-center justify-between border border-transparent hover:border-outline-variant/50 transition-all group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-primary shadow-xs">
                <span className="material-symbols-outlined text-2xl">restaurant</span>
              </div>
              <div>
                <h3 className="font-label-lg text-label-lg font-semibold text-on-surface">Restaurant Filter</h3>
                <p className="font-body-md text-sm text-secondary">
                  {appliedSmartSuggestion ? 'Filter Active (72 dB detected)' : 'High background noise detected.'}
                </p>
              </div>
            </div>
            <button
              aria-label="Apply setting"
              onClick={applySmartSuggestion}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                appliedSmartSuggestion
                  ? 'bg-emerald-600 text-white'
                  : 'bg-primary-container text-white hover:scale-105'
              }`}
              title={appliedSmartSuggestion ? 'Filter Applied' : 'Click to apply'}
            >
              <span className="material-symbols-outlined text-xl">
                {appliedSmartSuggestion ? 'done' : 'check'}
              </span>
            </button>
          </div>
        </section>

        {/* Quick Soundscapes */}
        <section className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 shadow-xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-2xl">nature</span>
              <h2 className="font-headline-md text-headline-md font-semibold text-primary">Soundscapes</h2>
            </div>
            <button
              onClick={() => setCurrentScreen('soundscapes')}
              className="font-label-sm text-xs text-primary hover:underline"
            >
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => toggleSoundscape('rain')}
              className={`flex flex-col items-center justify-center gap-2 rounded-xl p-4 border transition-all ${
                activeSoundscape === 'rain'
                  ? 'bg-primary-container/10 border-primary text-primary font-semibold'
                  : 'bg-surface-container-low border-transparent hover:border-primary/30 text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-3xl">water_drop</span>
              <span className="font-label-sm text-sm">Rainfall</span>
            </button>
            <button
              onClick={() => toggleSoundscape('calm')}
              className={`flex flex-col items-center justify-center gap-2 rounded-xl p-4 border transition-all ${
                activeSoundscape === 'calm'
                  ? 'bg-primary-container/10 border-primary text-primary font-semibold'
                  : 'bg-surface-container-low border-transparent hover:border-primary/30 text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined text-3xl">waves</span>
              <span className="font-label-sm text-sm">Ocean Waves</span>
            </button>
          </div>
        </section>
      </div>

      {/* Quick Navigation Cards to Insights & Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <div 
          onClick={() => setCurrentScreen('controls')}
          className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-surface-container-high transition-all"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">tune</span>
            <div>
              <h4 className="font-label-lg font-semibold text-on-surface">Hearing Fine-Tuning</h4>
              <p className="text-xs text-secondary">Balance, Speech Clarity & Noise Reduction</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-secondary">chevron_right</span>
        </div>

        <div 
          onClick={() => setCurrentScreen('insights')}
          className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-4 flex items-center justify-between cursor-pointer hover:bg-surface-container-high transition-all"
        >
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">analytics</span>
            <div>
              <h4 className="font-label-lg font-semibold text-on-surface">Listening Insights</h4>
              <p className="text-xs text-secondary">Daily Wear Time: 12.4 hrs average</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-secondary">chevron_right</span>
        </div>
      </div>
    </div>
  );
};
