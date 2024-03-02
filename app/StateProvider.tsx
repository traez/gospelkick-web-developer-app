/*
The StateProvider 
*/
"use client";
import { createContext, useState, useEffect, ReactNode } from "react";

export const StateContext = createContext<StateContextType | undefined>(
  undefined
);

interface StateContextType {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleBack: () => void;
}

interface StateProviderProps {
  children: ReactNode;
}

export default function StateProvider({ children }: StateProviderProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleBack = () => {
    setCurrentStep((prevStep) => Math.max(0, prevStep - 1));
  };

  return (
    <StateContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        handleBack,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
