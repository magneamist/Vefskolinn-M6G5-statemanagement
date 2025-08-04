"use client";

import { ChangeEvent } from "react";
import { useCalculator } from "@/app/context/CalculatorContext";

export default function NumberInput() {
  const { state, dispatch, ACTIONS } = useCalculator();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({
      type: ACTIONS.SET_INPUT_NUMBER,
      payload: value,
    });
  };

  const handleBaseChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({
      type: ACTIONS.SET_BASE_NUMBER,
      payload: value,
    });
  };

  const handleReset = () => {
    dispatch({ type: ACTIONS.RESET });
  };

  return (
    <div className="">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Enter Numbers for Calculation
      </h2>

      <div className="flex items-end justify-between">
        <div className="flex gap-8">
          <div>
            <label className="block text-lg font-medium mb-2">
              Base Number
            </label>
            <input
              type="number"
              value={state.baseNumber}
              onChange={handleBaseChange}
              className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Base nr."
            />
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">
              Input Number
            </label>
            <input
              type="number"
              value={state.inputNumber}
              onChange={handleInputChange}
              className="w-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="input nr."
            />
          </div>
        </div>
        <button
          onClick={handleReset}
          className="h-fit py-3 px-6 text-lg bg-red-400 rounded-md hover:bg-red-500 duration-300"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
