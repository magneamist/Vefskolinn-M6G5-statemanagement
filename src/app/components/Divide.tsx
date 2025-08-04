"use client";

import { useCalculator } from "@/app/context/CalculatorContext";
import { Divide as DivideIcon } from "lucide-react";

export default function Divide() {
  const { state } = useCalculator();

  const result =
    state.inputNumber === 0
      ? "Not defined"
      : parseFloat((state.baseNumber / state.inputNumber).toFixed(3));

  return (
    <div className="flex flex-col gap-2">
      <span>Component D</span>
      <div className="bg-white rounded-lg shadow-md relative pt-18 pb-8">
        <div className="flex items-center gap-2 bg-green-300 absolute right-0 top-0 px-3 py-2 rounded-bl-lg rounded-tr-lg">
          <div className="flex items-center">
            <DivideIcon color="black" />
          </div>
          <h3 className="text-lg text-black">Divide</h3>
        </div>

        <div className="flex gap-3 items-center justify-center w-full mb-2">
          <div className="text-2xl font-mono text-gray-700">
            {state.baseNumber} / {state.inputNumber} =
          </div>
          <div className="text-3xl font-mono font-bold text-black">
            {result}
          </div>
        </div>
      </div>
    </div>
  );
}
