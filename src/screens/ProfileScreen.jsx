import React from 'react';
import { useHearingCompanion } from '../context/HearingCompanionContext';

export const ProfileScreen = () => {
  const {
    highContrast,
    setHighContrast,
    displayTextSize,
    setDisplayTextSize,
    audioNotifications,
    setAudioNotifications,
    leftBattery,
    rightBattery,
  } = useHearingCompanion();

  return (
    <div className="flex-grow py-6 px-5 md:px-12 max-w-2xl mx-auto w-full md:pl-64">
      <h1 className="font-headline-lg text-headline-lg font-semibold text-primary mb-6">
        Profile &amp; Accessibility
      </h1>

      {/* Profile Section Card */}
      <section className="mb-6 bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-6 shadow-xs">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden border-2 border-outline-variant shrink-0">
            <div className="w-full h-full bg-primary-container text-white flex items-center justify-center font-bold text-2xl">
              AM
            </div>
          </div>
          <div>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface">Alex Mercer</h2>
            <p className="text-secondary font-body-md text-sm">Premium Member</p>
          </div>
        </div>

        <button className="w-full flex items-center justify-between py-3.5 px-4 rounded-lg border border-outline-variant/40 hover:bg-surface-container-low transition-colors focus:ring-2 focus:ring-primary focus:outline-none">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-secondary">manage_accounts</span>
            <span className="font-label-lg text-label-lg font-semibold text-on-surface">Manage Account Details</span>
          </div>
          <span className="material-symbols-outlined text-secondary">chevron_right</span>
        </button>
      </section>

      {/* My Devices Section */}
      <section className="mb-6">
        <h2 className="font-label-lg text-xs font-bold text-secondary uppercase tracking-wider mb-2 ml-2">
          My Devices
        </h2>
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden flex flex-col shadow-xs">
          <button className="w-full flex items-center justify-between py-4 px-6 border-b border-outline-variant/40 hover:bg-surface-container-low transition-colors text-left relative">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">hearing</span>
              </div>
              <div>
                <span className="block font-label-lg font-semibold text-on-surface">Dignified Right</span>
                <span className="block text-xs text-secondary">Connected • {rightBattery}% Battery</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-secondary">chevron_right</span>
            <div className="absolute inset-y-0 left-0 w-1 bg-primary"></div>
          </button>

          <button className="w-full flex items-center justify-between py-4 px-6 hover:bg-surface-container-low transition-colors text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">hearing</span>
              </div>
              <div>
                <span className="block font-label-lg font-semibold text-on-surface">Dignified Left</span>
                <span className="block text-xs text-secondary">Connected • {leftBattery}% Battery</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-secondary">chevron_right</span>
          </button>
        </div>
      </section>

      {/* Accessibility Preferences Section */}
      <section className="mb-8">
        <h2 className="font-label-lg text-xs font-bold text-secondary uppercase tracking-wider mb-2 ml-2">
          Accessibility Preferences
        </h2>
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden flex flex-col shadow-xs">
          {/* Text Size Slider */}
          <div className="w-full flex flex-col py-5 px-6 border-b border-outline-variant/40">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">text_fields</span>
                <span className="font-label-lg font-semibold text-on-surface">Display Text Size</span>
              </div>
              <span className="text-xs font-bold text-primary">{displayTextSize}%</span>
            </div>
            <div className="flex items-center gap-4 px-2">
              <span className="text-sm font-bold text-secondary">A</span>
              <input
                type="range"
                min="100"
                max="130"
                step="5"
                value={displayTextSize}
                onChange={(e) => setDisplayTextSize(Number(e.target.value))}
                className="w-full h-2"
              />
              <span className="text-xl font-bold text-secondary">A</span>
            </div>
          </div>

          {/* High Contrast Mode Switch */}
          <label className="w-full flex items-center justify-between py-4 px-6 border-b border-outline-variant/40 hover:bg-surface-container-low transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">contrast</span>
              <span className="font-label-lg font-semibold text-on-surface">High Contrast Mode</span>
            </div>
            <div 
              onClick={() => setHighContrast(!highContrast)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                highContrast ? 'bg-primary' : 'bg-surface-container-highest'
              }`}
            >
              <div 
                className={`absolute top-1 w-6 h-6 bg-surface rounded-full shadow-sm transition-transform ${
                  highContrast ? 'translate-x-7' : 'translate-x-1'
                }`}
              ></div>
            </div>
          </label>

          {/* Audio Notifications Switch */}
          <label className="w-full flex items-center justify-between py-4 px-6 hover:bg-surface-container-low transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary">notifications_active</span>
              <div>
                <span className="block font-label-lg font-semibold text-on-surface">Audio Notifications</span>
                <span className="block text-xs text-secondary">Alerts for low battery &amp; disconnects</span>
              </div>
            </div>
            <div 
              onClick={() => setAudioNotifications(!audioNotifications)}
              className={`relative w-14 h-8 rounded-full transition-colors ${
                audioNotifications ? 'bg-primary' : 'bg-surface-container-highest'
              }`}
            >
              <div 
                className={`absolute top-1 w-6 h-6 bg-surface rounded-full shadow-sm transition-transform ${
                  audioNotifications ? 'translate-x-7' : 'translate-x-1'
                }`}
              ></div>
            </div>
          </label>
        </div>
      </section>
    </div>
  );
};
