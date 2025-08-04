'use client';

import { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  inputNumber: 1,
  baseNumber: 10
};

// Action types
const ACTIONS = {
  SET_INPUT_NUMBER: 'SET_INPUT_NUMBER',
  SET_BASE_NUMBER: 'SET_BASE_NUMBER',
  RESET: 'RESET'
};

// Reducer function
function calculatorReducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_INPUT_NUMBER:
      return {
        ...state,
        inputNumber: action.payload
      };
    case ACTIONS.SET_BASE_NUMBER:
      return {
        ...state,
        baseNumber: action.payload
      };
    case ACTIONS.RESET:
      return initialState;
    default:
      return state;
  }
}

// Create context
const CalculatorContext = createContext();

// Provider component
export function CalculatorProvider({ children }) {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const value = {
    state,
    dispatch,
    ACTIONS
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
}

// Custom hook to use the context
export function useCalculator() {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must be used within a CalculatorProvider');
  }
  return context;
}