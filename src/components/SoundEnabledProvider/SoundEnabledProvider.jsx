'use client';
import React from 'react';

export const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  function toggleSound() {
    setSoundEnabled(!soundEnabled);
  }

  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export default SoundEnabledProvider;
