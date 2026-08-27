import React from 'react';
import { useHearingCompanion } from '../context/HearingCompanionContext';

export const EnvironmentScreen = () => {
  const {
    currentDecibels,
    detectedEnvironment,
    appliedSmartSuggestion,
    applySmartSuggestion,
  } = useHearingCompanion();

  return (
    <div className="w-full max-w-3xl px-5 md:px-12 py-6 flex-1 mx-auto md:pl-64">
      <div className="mb-6">
        <h1 className="font-headline-lg text-headline-lg font-semibold text-primary mb-2">
          Environment
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Real-time analysis and recommendations based on your surroundings.
        </p>
      </div>

      {/* Current Environment Hero */}
      <div className="bg-surface-container rounded-xl p-6 mb-6 border border-outline-variant/30 shadow-xs relative overflow-hidden">
        {/* Animated Noise Wave Equalizer Background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center gap-1.5">
          <div className="w-2 h-12 bg-primary rounded-full noise-wave"></div>
          <div className="w-2 h-20 bg-primary rounded-full noise-wave"></div>
          <div className="w-2 h-16 bg-primary rounded-full noise-wave"></div>
          <div className="w-2 h-24 bg-primary rounded-full noise-wave"></div>
          <div className="w-2 h-14 bg-primary rounded-full noise-wave"></div>
          <div className="w-2 h-32 bg-primary rounded-full noise-wave"></div>
          <div className="w-2 h-18 bg-primary rounded-full noise-wave"></div>
          <div className="w-2 h-12 bg-primary rounded-full noise-wave"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center py-4">
          <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-3 shadow-xs">
            <span className="material-symbols-outlined text-4xl">traffic</span>
          </div>
          <h3 className="font-headline-md text-headline-md font-semibold text-primary mb-1">
            {detectedEnvironment}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="font-display-lg text-display-lg text-on-background font-bold">
              {currentDecibels}
            </span>
            <span className="font-label-lg text-label-lg text-on-surface-variant font-semibold">
              dB
            </span>
          </div>
          <p className="font-body-md text-sm text-secondary mt-2">
            Moderate to high background noise detected.
          </p>
        </div>
      </div>

      {/* Smart Recommendation Card */}
      <div className="bg-surface-container-highest rounded-xl p-6 mb-6 border-l-4 border-primary shadow-xs">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary text-on-primary rounded-full flex items-center justify-center shrink-0 shadow-xs">
            <span className="material-symbols-outlined text-2xl">auto_awesome</span>
          </div>
          <div className="flex-1">
            <h4 className="font-label-lg text-label-lg font-semibold text-on-background mb-1">
              Smart Suggestion
            </h4>
            <p className="font-body-md text-sm text-on-surface-variant mb-4">
              Conversation mode recommended for current noise levels to enhance speech clarity.
            </p>
            <button
              onClick={applySmartSuggestion}
              disabled={appliedSmartSuggestion}
              className={`font-label-lg text-sm font-semibold py-3 px-6 rounded-lg min-h-[44px] transition-all ${
                appliedSmartSuggestion
                  ? 'bg-emerald-700 text-white cursor-default'
                  : 'bg-primary text-on-primary hover:bg-surface-tint active:scale-95'
              }`}
            >
              {appliedSmartSuggestion ? 'Suggestion Applied ✓' : 'Apply Now'}
            </button>
          </div>
        </div>
      </div>

      {/* Detail Metrics Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-surface border border-outline-variant/30 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-xs">
          <span className="material-symbols-outlined text-secondary text-2xl mb-2">record_voice_over</span>
          <span className="font-label-sm text-xs text-on-surface-variant mb-1">Speech Detected</span>
          <span className="font-headline-md text-headline-md font-bold text-primary">Yes</span>
        </div>
        <div className="bg-surface border border-outline-variant/30 rounded-lg p-4 flex flex-col items-center justify-center text-center shadow-xs">
          <span className="material-symbols-outlined text-secondary text-2xl mb-2">air</span>
          <span className="font-label-sm text-xs text-on-surface-variant mb-1">Wind Noise</span>
          <span className="font-headline-md text-headline-md font-bold text-primary">Low</span>
        </div>
      </div>
    </div>
  );
};
