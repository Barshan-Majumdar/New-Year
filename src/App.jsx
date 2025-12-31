import React, { useEffect, useRef } from 'react'; // Added useRef and useEffect
import LandingStage from './components/LandingStage';
import RevealStage from './components/RevealStage';
import CustomCursor from './components/CustomCursor';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [stage, setStage] = React.useState('landing'); 
  const [name, setName] = React.useState('');

  // 1. Create refs for the audio objects so they persist across renders
  const launchSound = useRef(new Audio('/launch.mp3'));
  const ambientMusic = useRef(new Audio('/ambient.mp3'));

  const handleLaunch = (userName) => {
    setName(userName);
    
    // 2. Play the launch sound immediately on click
    launchSound.current.volume = 0.5; // Adjust volume 0 to 1
    launchSound.current.play().catch(e => console.log("Audio play failed:", e));

    // 3. Start background music
    ambientMusic.current.loop = true;
    ambientMusic.current.volume = 0.3;
    ambientMusic.current.play().catch(e => console.log("Audio play failed:", e));

    setStage('reveal');
  };

  const handleReset = () => {
    setName('');
    setStage('landing');
    
    // 4. Stop music when resetting
    ambientMusic.current.pause();
    ambientMusic.current.currentTime = 0;
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