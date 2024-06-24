import React, { createContext, useState } from 'react';
import images from '../data/data';

export const MoodContext = createContext();

const defaultMood = images[0].urls
export const MoodProvider = ({ children }) => {
  const [selectedMood, setSelectedMood] = useState(defaultMood);

  return (
    <MoodContext.Provider value={{ selectedMood, setSelectedMood }}>
      {children}
    </MoodContext.Provider>
  );
};