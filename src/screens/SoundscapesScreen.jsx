import React from 'react';
import { useHearingCompanion } from '../context/HearingCompanionContext';

export const SoundscapesScreen = () => {
  const {
    activeSoundscape,
    setActiveSoundscape,
    soundscapeIntensity,
    setSoundscapeIntensity,
    isPlayingSoundscape,
    setIsPlayingSoundscape,
  } = useHearingCompanion();

  const soundscapes = [
    {
      id: 'rain',
      title: 'Rain',
      icon: 'rainy',
      description: 'Gentle showers to wash away distraction.',
    },
    {
      id: 'nature',
      title: 'Nature',
      icon: 'forest',
      description: 'A quiet forest with soft rustling leaves.',
    },
    {
      id: 'focus',
      title: 'Focus',
      icon: 'headphones',
      description: 'Low frequency hum for deep concentration.',
    },
    {
      id: 'cafe',
      title: 'Café',
      icon: 'local_cafe',
      description: 'Ambient chatter and clinking cups.',
    },
    {
      id: 'calm',
      title: 'Calm',
      icon: 'waves',
      description: 'Rhythmic ocean waves on a quiet shore.',
    },
  ];

  const handleSelectSoundscape = (id) => {
    if (activeSoundscape === id) {
      setIsPlayingSoundscape(!isPlayingSoundscape);
    } else {
      setActiveSoundscape(id);
      setIsPlayingSoundscape(true);
    }
  };

  const getIntensityLabel = (val) => {
    if (val < 33) return 'Soft';
    if (val < 67) return 'Medium';
    return 'High';
  };

  return (
    <div className="flex-1 mt-2 mb-16 md:mb-0 px-5 md:px-12 py-6 max-w-7xl mx-auto w-full flex flex-col gap-6 md:pl-64">
      <header className="flex flex-col gap-1">
        <h1 className="font-headline-lg text-headline-lg font-semibold text-on-surface">
          Soundscapes
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Select an ambient environment to enhance focus or relaxation.
        </p>
      </header>

      {/* Soundscape Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {soundscapes.map((scape) => {
          const isActive = activeSoundscape === scape.id && isPlayingSoundscape;
          
          if (isActive) {
            return (
              <div
                key={scape.id}
                onClick={() => handleSelectSoundscape(scape.id)}
                className="flex flex-col items-start p-4 bg-surface-container-highest border-l-4 border-primary rounded-lg text-left transition-all hover:bg-surface-container-high relative shadow-[0_4px_12px_rgba(74,98,120,0.08)] cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none opacity-50"></div>
                <div className="flex justify-between w-full items-center mb-2 relative z-10">
                  <div className="p-2 bg-surface-container rounded-full text-primary">
                    <span className="material-symbols-outlined">{scape.icon}</span>
                  </div>
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                </div>
                <h3 className="font-label-lg text-label-lg font-semibold text-on-surface mb-1 relative z-10">
                  {scape.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant relative z-10">
                  {scape.description}
                </p>

                {/* Active Slider Container */}
                <div 
                  className="w-full mt-4 pt-3 border-t border-outline-variant/30 relative z-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-label-sm text-xs text-on-surface-variant">Intensity</span>
                    <span className="font-label-sm text-xs text-primary font-semibold">
                      {getIntensityLabel(soundscapeIntensity)} ({soundscapeIntensity}%)
                    </span>
                  </div>
                  <input
                    aria-label={`${scape.title} intensity slider`}
                    className="w-full h-2"
                    max="100"
                    min="0"
                    type="range"
                    value={soundscapeIntensity}
                    onChange={(e) => setSoundscapeIntensity(Number(e.target.value))}
                  />
                </div>
              </div>
            );
          }

          return (
            <button
              key={scape.id}
              onClick={() => handleSelectSoundscape(scape.id)}
              className="flex flex-col items-start p-4 bg-surface-container-lowest border border-outline-variant/40 rounded-lg text-left transition-all hover:bg-surface-container-low focus:outline-none focus:ring-2 focus:ring-primary/50 group"
            >
              <div className="flex justify-between w-full items-center mb-2">
                <div className="p-2 bg-surface-variant rounded-full text-on-surface-variant group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">{scape.icon}</span>
                </div>
              </div>
              <h3 className="font-label-lg text-label-lg font-semibold text-on-surface mb-1">
                {scape.title}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant">
                {scape.description}
              </p>
            </button>
          );
        })}

        {/* Ambient Display Card */}
        <div className="hidden md:flex flex-col items-center justify-center p-4 bg-surface-dim/30 border border-dashed border-outline-variant rounded-lg text-center opacity-70">
          <span className="material-symbols-outlined text-on-surface-variant text-4xl mb-2">graphic_eq</span>
          <p className="font-label-sm text-xs text-on-surface-variant">
            {isPlayingSoundscape 
              ? `Playing ${soundscapes.find(s => s.id === activeSoundscape)?.title || 'Soundscape'}`
              : 'Select a soundscape to customize'}
          </p>
        </div>
      </div>
    </div>
  );
};
