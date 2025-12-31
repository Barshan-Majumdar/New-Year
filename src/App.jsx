
import React from 'react';
import LandingStage from './components/LandingStage';
import RevealStage from './components/RevealStage';
import CustomCursor from './components/CustomCursor';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [stage, setStage] = React.useState('landing'); // 'landing' | 'reveal'
  const [name, setName] = React.useState('');

  const handleLaunch = (userName) => {
    setName(userName);
    setStage('reveal');
  };

  const handleReset = () => {
    setName('');
    setStage('landing');
  };

  return (
    <main className="w-full h-screen relative cursor-none">
      <CustomCursor />
      <div className="absolute inset-0 bg-[#050505] -z-10" />

      {/* Stars/Dust overlay could go here */}

      {stage === 'landing' && (
        <LandingStage key="landing" onLaunch={handleLaunch} />
      )}
      {stage === 'reveal' && (
        <RevealStage key="reveal" name={name} onReset={handleReset} />
      )}
    </main>
  );
}

export default App;
