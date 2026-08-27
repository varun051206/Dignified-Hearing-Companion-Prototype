import React, { useState } from 'react';
import { useHearingCompanion } from '../context/HearingCompanionContext';

export const WelcomeScreen = () => {
  const { setCurrentScreen } = useHearingCompanion();
  const [connecting, setConnecting] = useState(false);

  const handleConnectDevice = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setCurrentScreen('dashboard');
    }, 1200);
  };

  return (
    <main className="flex-grow flex flex-col justify-center items-center px-5 py-8 md:px-12 min-h-[calc(100vh-56px)] max-w-md mx-auto w-full">
      <div className="w-full flex flex-col items-center text-center space-y-6">
        {/* Abstract Audio Wave Illustration */}
        <div aria-hidden="true" className="w-64 h-64 rounded-full flex items-center justify-center relative overflow-hidden mb-2 bg-surface-container shadow-inner">
          <div className="absolute inset-0 flex items-center justify-center gap-1.5 opacity-70">
            <div className="w-1.5 h-8 bg-primary-fixed rounded-full animate-pulse"></div>
            <div className="w-1.5 h-16 bg-primary-fixed rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.2s]"></div>
            <div className="w-1.5 h-24 bg-primary-container rounded-full animate-[pulse_1.8s_ease-in-out_infinite_0.4s]"></div>
            <div className="w-1.5 h-12 bg-primary-fixed rounded-full animate-[pulse_1.4s_ease-in-out_infinite_0.1s]"></div>
            <div className="w-1.5 h-20 bg-primary-container rounded-full animate-[pulse_1.6s_ease-in-out_infinite_0.3s]"></div>
            <div className="w-1.5 h-10 bg-primary-fixed rounded-full animate-[pulse_1.3s_ease-in-out_infinite_0.5s]"></div>
            <div className="w-1.5 h-14 bg-primary-fixed rounded-full animate-[pulse_1.7s_ease-in-out_infinite_0.2s]"></div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="space-y-2 w-full">
          <h1 className="font-display-lg text-display-lg font-bold text-primary">
            Rediscover the World of Sound
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[300px] mx-auto md:max-w-full leading-relaxed">
            Experience clarity like never before with your intelligent hearing companion. Seamlessly connect and personalize your soundscape.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-4 mt-6">
          <button
            onClick={handleConnectDevice}
            disabled={connecting}
            className="w-full h-14 bg-primary-container text-white font-label-lg text-label-lg font-semibold rounded-full flex items-center justify-center hover:bg-[#3f5367] transition-all active:scale-95 shadow-xs focus:outline-none focus:ring-4 focus:ring-primary-fixed"
          >
            {connecting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Pairing Devices...
              </span>
            ) : (
              'Connect Device'
            )}
          </button>
          
          <button
            onClick={() => setCurrentScreen('dashboard')}
            className="w-full h-14 bg-transparent border-2 border-primary-container text-primary-container font-label-lg text-label-lg font-semibold rounded-full flex items-center justify-center hover:bg-surface-container-low transition-all active:scale-95 focus:outline-none focus:ring-4 focus:ring-primary-fixed"
          >
            Explore App
          </button>
        </div>
      </div>
    </main>
  );
};
