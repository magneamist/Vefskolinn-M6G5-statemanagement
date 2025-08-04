// app/page.js (or pages/index.js if using Pages Router)
'use client'; // Add this if using App Router

import { CalculatorProvider } from './context/CalculatorContext';
import NumberInput from './components/NumberInput';
import Add from './components/Add';
import Subtract from './components/Subtract';
import Multiply from './components/Multiply'
import Divide from './components/Divide';

export default function Home() {
  return (
    <CalculatorProvider>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            React Context Calculator
          </h1>
          
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <NumberInput />
          </div>

          {/* Calculator Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Add />
            <Subtract />
            <Multiply />
            <Divide />
          </div>

          {/* Info Section */}
          <div className="mt-8 bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-800 text-center">
              Enter a number above and watch all calculations update instantly using React Context!
            </p>
          </div>
        </div>
      </div>
    </CalculatorProvider>
  );
}