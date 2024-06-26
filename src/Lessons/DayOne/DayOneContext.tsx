// DayOneContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

type DayOneContextType = {
  dayOneDone: boolean;
  setDayOneDone: (value: boolean) => void;
};

const DayOneContext = createContext<DayOneContextType | undefined>(undefined);

export const DayOneProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dayOneDone, setDayOneDone] = useState(false);

  return (
    <DayOneContext.Provider value={{ dayOneDone, setDayOneDone }}>
      {children}
    </DayOneContext.Provider>
  );
};

export const useDayOne = () => {
  const context = useContext(DayOneContext);
  if (!context) {
    throw new Error('useDayOne must be used within a DayOneProvider');
  }
  return context;
};