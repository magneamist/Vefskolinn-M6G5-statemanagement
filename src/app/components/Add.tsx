// app/components/AdditionComponent.js
"use client";

import { useCalculator } from "../context/CalculatorContext";
import { Plus } from "lucide-react";

export default function Add() {
  const { state } = useCalculator();

  const result = state.baseNumber + state.inputNumber;

  return (
    <div className="bg-white rounded-lg shadow-md relative pt-18 pb-8">
      <div className="flex items-center gap-2 bg-pink-300 absolute right-0 top-0 px-3 py-2 rounded-bl-lg rounded-tr-lg">
        <div className="flex items-center">
          <Plus color="black" />
        </div>
        <h3 className="text-lg text-black">Addition</h3>
      </div>

      <div className="flex gap-3 items-center justify-center w-full mb-2">
        <div className="text-2xl font-mono text-gray-700">
          {state.baseNumber} + {state.inputNumber} =
        </div>
        <div className="text-3xl font-mono font-bold text-black">{result}</div>
      </div>
    </div>
  );
}
