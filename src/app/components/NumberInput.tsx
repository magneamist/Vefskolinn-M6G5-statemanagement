// app/components/NumberInput.js
"use client";

import { ChangeEvent } from "react";
import { useCalculator } from "../context/CalculatorContext";

export default function NumberInput() {
  const { state, dispatch, ACTIONS } = useCalculator();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    dispatch({
      type: ACTIONS.SET_INPUT_NUMBER,
      payload: value,
    });
  };

  const handleBaseChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 10;
    dispatch({
      type: ACTIONS.SET_BASE_NUMBER,
      payload: value,
    });
  };

  const handleReset = () => {
    dispatch({ type: ACTIONS.RESET });
  };

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Enter Numbers for Calculation
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Base Number (default: 10)
          </label>
          <input
            type="number"
            value={state.baseNumber}
            onChange={handleBaseChange}
            className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Base number"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Input Number (X)
          </label>
          <input
            type="number"
            value={state.inputNumber}
            onChange={handleInputChange}
            className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a number"
          />
        </div>

        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
