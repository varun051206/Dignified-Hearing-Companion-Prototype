import React from 'react';
import { useHearingCompanion } from '../context/HearingCompanionContext';

export const ControlsScreen = () => {
  const {
    masterVolume,
    setMasterVolume,
    lrBalance,
    setLrBalance,
    speechClarity,
    setSpeechClarity,
    noiseReduction,
    setNoiseReduction,
    resetToDefault,
  } = useHearingCompanion();

  // Helper formatting function for L/R Balance
  const formatBalance = (val) => {
    if (val === 0) return 'Center';
    if (val < 0) return `L ${Math.abs(val)}`;
    return `R ${val}`;
  };

  // Helper formatting function for Speech Clarity
  const formatClarity = (val) => {
    if (val === 100) return 'Max';
    return `${val}%`;
  };

  return (
    <div className="flex-grow px-5 md:px-12 py-6 flex flex-col gap-6 max-w-[1200px] mx-auto w-full md:pl-64">
      {/* Header Section */}
      <div className="flex flex-col gap-1">
        <h1 className="font-headline-lg text-headline-lg font-semibold text-on-surface">
          Hearing Controls
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Adjust your listening experience for maximum clarity and comfort.
        </p>
      </div>

      {/* Controls Cards Grid */}
      <div className="flex flex-col gap-6 max-w-3xl">
        {/* Overall Volume Card */}
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 flex flex-col gap-4 shadow-xs relative">
          <div className="flex justify-between items-center">
            <label 
              htmlFor="volume-slider"
              className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-primary text-xl">volume_up</span>
              Overall Volume
            </label>
            <span className="font-body-lg text-body-lg text-primary font-bold">
              {masterVolume}%
            </span>
          </div>
          <div className="pt-2 pb-1 relative">
            <input
              id="volume-slider"
              aria-label="Overall Volume"
              className="w-full h-8"
              type="range"
              min="0"
              max="100"
              value={masterVolume}
              onChange={(e) => setMasterVolume(Number(e.target.value))}
            />
          </div>
          <div className="flex justify-between text-on-surface-variant font-label-sm text-xs mt-1">
            <span>Soft</span>
            <span>Loud</span>
          </div>
        </div>

        {/* Left/Right Balance Card */}
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 flex flex-col gap-4 shadow-xs">
          <div className="flex justify-between items-center">
            <label 
              htmlFor="balance-slider"
              className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-primary text-xl">sync_alt</span>
              L/R Balance
            </label>
            <span className="font-body-lg text-body-lg text-primary font-bold">
              {formatBalance(lrBalance)}
            </span>
          </div>
          <div className="pt-2 pb-1">
            <input
              id="balance-slider"
              aria-label="Left/Right Balance"
              className="w-full h-8"
              type="range"
              min="-50"
              max="50"
              value={lrBalance}
              onChange={(e) => setLrBalance(Number(e.target.value))}
            />
          </div>
          <div className="flex justify-between text-on-surface-variant font-label-sm text-xs mt-1">
            <span>Left</span>
            <span>Right</span>
          </div>
        </div>

        {/* Speech Clarity Card */}
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 flex flex-col gap-4 shadow-xs">
          <div className="flex justify-between items-center">
            <label 
              htmlFor="clarity-slider"
              className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-primary text-xl">record_voice_over</span>
              Speech Clarity
            </label>
            <span className="font-body-lg text-body-lg text-primary font-bold">
              {formatClarity(speechClarity)}
            </span>
          </div>
          <div className="pt-2 pb-1">
            <input
              id="clarity-slider"
              aria-label="Speech Clarity"
              className="w-full h-8"
              type="range"
              min="0"
              max="100"
              value={speechClarity}
              onChange={(e) => setSpeechClarity(Number(e.target.value))}
            />
          </div>
          <div className="flex justify-between text-on-surface-variant font-label-sm text-xs mt-1">
            <span>Natural</span>
            <span>Enhanced</span>
          </div>
        </div>

        {/* Background Noise Reduction Card */}
        <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 flex flex-col gap-4 shadow-xs">
          <div className="flex justify-between items-center">
            <label 
              htmlFor="noise-slider"
              className="font-label-lg text-label-lg text-on-surface font-semibold flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-primary text-xl">noise_aware</span>
              Noise Reduction
            </label>
            <span className="font-body-lg text-body-lg text-primary font-bold">
              {noiseReduction}%
            </span>
          </div>
          <div className="pt-2 pb-1">
            <input
              id="noise-slider"
              aria-label="Noise Reduction"
              className="w-full h-8"
              type="range"
              min="0"
              max="100"
              value={noiseReduction}
              onChange={(e) => setNoiseReduction(Number(e.target.value))}
            />
          </div>
          <div className="flex justify-between text-on-surface-variant font-label-sm text-xs mt-1">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="mt-4 flex justify-center pb-8 max-w-3xl">
        <button
          onClick={resetToDefault}
          className="flex items-center justify-center gap-2 min-h-[56px] px-8 rounded-full border-2 border-primary-container text-primary-container font-label-lg text-label-lg hover:bg-surface-container-low active:scale-95 transition-all duration-150 w-full max-w-[300px]"
        >
          <span className="material-symbols-outlined">refresh</span>
          Reset to Default
        </button>
      </div>
    </div>
  );
};
