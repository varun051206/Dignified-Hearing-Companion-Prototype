import React from 'react';
import { HearingCompanionProvider, useHearingCompanion } from './context/HearingCompanionContext';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';

import { DashboardScreen } from './screens/DashboardScreen';
import { ControlsScreen } from './screens/ControlsScreen';
import { ModesScreen } from './screens/ModesScreen';
import { SoundscapesScreen } from './screens/SoundscapesScreen';
import { EnvironmentScreen } from './screens/EnvironmentScreen';
import { InsightsScreen } from './screens/InsightsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';

const MainLayout = () => {
  const { currentScreen } = useHearingCompanion();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'dashboard':
        return <DashboardScreen />;
      case 'controls':
        return <ControlsScreen />;
      case 'modes':
        return <ModesScreen />;
      case 'soundscapes':
        return <SoundscapesScreen />;
      case 'environment':
        return <EnvironmentScreen />;
      case 'insights':
        return <InsightsScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'welcome':
        return <WelcomeScreen />;
      default:
        return <DashboardScreen />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-background pb-20 md:pb-0">
      <Header />
      <Sidebar />
      <main className="flex-1 flex flex-col">
        {renderScreen()}
      </main>
      <BottomNav />
    </div>
  );
};

export default function App() {
  return (
    <HearingCompanionProvider>
      <MainLayout />
    </HearingCompanionProvider>
  );
}
