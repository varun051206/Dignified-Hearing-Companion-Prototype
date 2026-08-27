import React, { createContext, useContext, useState } from 'react';

const HearingCompanionContext = createContext();

export const HearingCompanionProvider = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  
  // Audio Controls State
  const [masterVolume, setMasterVolume] = useState(65);
  const [isMuted, setIsMuted] = useState(false);
  const [lrBalance, setLrBalance] = useState(0); // -50 (Left) to +50 (Right), 0 is Center
  const [speechClarity, setSpeechClarity] = useState(100); // 0 to 100
  const [noiseReduction, setNoiseReduction] = useState(60); // 0 to 100 %

  // Modes State
  const [activeMode, setActiveMode] = useState('conversation'); // 'conversation', 'quiet', 'outdoor', 'music', 'custom'

  // Soundscapes State
  const [activeSoundscape, setActiveSoundscape] = useState('rain'); // 'rain', 'nature', 'focus', 'cafe', 'calm', null
  const [soundscapeIntensity, setSoundscapeIntensity] = useState(50);
  const [isPlayingSoundscape, setIsPlayingSoundscape] = useState(true);

  // Smart Environment State
  const [appliedSmartSuggestion, setAppliedSmartSuggestion] = useState(false);
  const [currentDecibels] = useState(72);
  const [detectedEnvironment] = useState('Busy Street');

  // Accessibility & Profile State
  const [highContrast, setHighContrast] = useState(false);
  const [displayTextSize, setDisplayTextSize] = useState(100); // 100% to 150%
  const [audioNotifications, setAudioNotifications] = useState(true);

  // Device Battery & Status
  const [leftBattery] = useState(85);
  const [rightBattery] = useState(82);
  const [devicesConnected] = useState(true);

  // Reset controls helper
  const resetToDefault = () => {
    setMasterVolume(75);
    setLrBalance(0);
    setSpeechClarity(100);
    setNoiseReduction(60);
    setIsMuted(false);
  };

  const toggleSoundscape = (id) => {
    if (activeSoundscape === id && isPlayingSoundscape) {
      setIsPlayingSoundscape(false);
    } else {
      setActiveSoundscape(id);
      setIsPlayingSoundscape(true);
    }
  };

  const applySmartSuggestion = () => {
    setActiveMode('conversation');
    setNoiseReduction(80);
    setSpeechClarity(100);
    setAppliedSmartSuggestion(true);
  };

  return (
    <HearingCompanionContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        masterVolume,
        setMasterVolume,
        isMuted,
        setIsMuted,
        lrBalance,
        setLrBalance,
        speechClarity,
        setSpeechClarity,
        noiseReduction,
        setNoiseReduction,
        activeMode,
        setActiveMode,
        activeSoundscape,
        setActiveSoundscape,
        soundscapeIntensity,
        setSoundscapeIntensity,
        isPlayingSoundscape,
        setIsPlayingSoundscape,
        toggleSoundscape,
        appliedSmartSuggestion,
        applySmartSuggestion,
        currentDecibels,
        detectedEnvironment,
        highContrast,
        setHighContrast,
        displayTextSize,
        setDisplayTextSize,
        audioNotifications,
        setAudioNotifications,
        leftBattery,
        rightBattery,
        devicesConnected,
        resetToDefault,
      }}
    >
      <div className={highContrast ? 'high-contrast min-h-screen' : 'min-h-screen'} style={{ fontSize: `${displayTextSize}%` }}>
        {children}
      </div>
    </HearingCompanionContext.Provider>
  );
};

export const useHearingCompanion = () => useContext(HearingCompanionContext);
