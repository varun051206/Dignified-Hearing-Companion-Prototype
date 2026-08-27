import React, { useState } from 'react';
import { useHearingCompanion } from '../context/HearingCompanionContext';

export const ModesScreen = () => {
  const { activeMode, setActiveMode } = useHearingCompanion();
  const [showCustomModal, setShowCustomModal] = useState(false);

  const modes = [
    {
      id: 'conversation',
      title: 'Conversation',
      icon: 'forum',
      description: 'Enhances voices while reducing background noise. Ideal for one-on-one or small group settings.',
    },
    {
      id: 'quiet',
      title: 'Quiet',
      icon: 'volume_mute',
      description: 'Provides maximum noise cancellation for focused work or relaxation in silence.',
    },
    {
      id: 'outdoor',
      title: 'Outdoor',
      icon: 'nature',
      description: 'Reduces wind noise and traffic sounds while keeping you aware of your surroundings.',
    },
    {
      id: 'music',
      title: 'Music',
      icon: 'music_note',
      description: 'Delivers full-spectrum audio for a rich, immersive listening experience.',
    },
  ];

  return (
    <div className="flex-grow px-5 md:px-12 py-6 max-w-[1200px] mx-auto w-full md:pl-64">
      <div className="mb-6">
        <h1 className="font-headline-lg text-headline-lg font-semibold text-primary mb-2">
          Listening Modes
        </h1>
        <p className="text-on-surface-variant font-body-md text-body-md">
          Select a mode to optimize your audio experience for your current environment.
        </p>
      </div>

      {/* Modes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modes.map((mode) => {
          const isActive = activeMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => setActiveMode(mode.id)}
              className={`flex items-start text-left p-4 rounded-xl min-h-[96px] w-full transition-all border ${
                isActive
                  ? 'border-l-4 border-l-primary border-t border-r border-b border-primary bg-surface-container-highest shadow-xs'
                  : 'bg-surface border-outline-variant/30 hover:bg-surface-container-low hover:border-outline-variant'
              }`}
            >
              <div className={`mr-4 mt-1 shrink-0 ${isActive ? 'text-primary' : 'text-secondary'}`}>
                <span 
                  className="material-symbols-outlined text-[28px]" 
                  style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {mode.icon}
                </span>
              </div>
              <div className="flex-grow">
                <div className="flex items-center justify-between mb-1">
                  <h3 className={`font-label-lg text-label-lg font-semibold ${isActive ? 'text-primary' : 'text-on-surface'}`}>
                    {mode.title}
                  </h3>
                  {isActive && (
                    <div className="flex items-center bg-primary text-on-primary px-2.5 py-0.5 rounded-full shadow-2xs">
                      <span className="material-symbols-outlined text-[14px] mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                      <span className="font-label-sm text-[11px] uppercase tracking-wider font-bold">Active</span>
                    </div>
                  )}
                </div>
                <p className="text-on-surface-variant text-sm font-body-md leading-relaxed">
                  {mode.description}
                </p>
              </div>
            </button>
          );
        })}

        {/* Custom Mode */}
        <button
          onClick={() => {
            setActiveMode('custom');
            setShowCustomModal(true);
          }}
          className={`flex items-start text-left p-4 rounded-xl min-h-[96px] w-full transition-all border md:col-span-2 ${
            activeMode === 'custom'
              ? 'border-l-4 border-l-primary border-t border-r border-b border-primary bg-surface-container-highest shadow-xs'
              : 'bg-surface border-outline-variant/30 hover:bg-surface-container-low hover:border-outline-variant'
          }`}
        >
          <div className={`mr-4 mt-1 shrink-0 ${activeMode === 'custom' ? 'text-primary' : 'text-secondary'}`}>
            <span className="material-symbols-outlined text-[28px]">tune</span>
          </div>
          <div className="flex-grow flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className={`font-label-lg text-label-lg font-semibold mb-1 ${activeMode === 'custom' ? 'text-primary' : 'text-on-surface'}`}>
                Custom Profile
              </h3>
              <p className="text-on-surface-variant text-sm font-body-md">
                Create and save your personalized audio settings.
              </p>
            </div>
            <div className="mt-3 sm:mt-0">
              <span className="inline-flex items-center justify-center px-4 py-2 rounded-full border-[1.5px] border-primary text-primary font-label-sm text-sm font-semibold hover:bg-surface-container-low transition-colors bg-transparent">
                Edit Settings
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Custom Profile Modal Simulation */}
      {showCustomModal && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4">
          <div className="bg-surface border border-outline-variant rounded-2xl p-6 max-w-md w-full shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-headline-md font-semibold text-primary">Custom EQ Settings</h3>
              <button 
                onClick={() => setShowCustomModal(false)}
                className="text-secondary hover:text-primary text-xl font-bold"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-secondary mb-6">
              Adjust gain frequency bands to personalize your custom mode profile.
            </p>
            <div className="space-y-4 mb-6">
              {['250Hz Bass', '1kHz Vocal Range', '4kHz Speech Clarity', '8kHz High Clarity'].map((freq, i) => (
                <div key={i} className="flex items-center justify-between gap-4">
                  <span className="text-xs font-semibold text-on-surface w-32">{freq}</span>
                  <input type="range" className="flex-1" defaultValue={50} min={0} max={100} />
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowCustomModal(false)}
              className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-container transition-colors"
            >
              Save Custom Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
