import React, { useState } from 'react';

export function FXCalculator(): JSX.Element {
  const [usdAmount, setUsdAmount] = useState<number>(1);
  const rate = 1500;

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm flex flex-col gap-4">
      <h3 className="text-lg font-semibold text-gray-800">FX Calculator</h3>
      <div className="flex flex-col gap-2">
        <label htmlFor="usd">USD Amount</label>
        <input
          id="usd"
          type="number"
          value={usdAmount}
          onChange={(e) => setUsdAmount(Number(e.target.value))}
          className="p-2 border rounded"
        />
      </div>
      <div className="text-sm text-gray-600">
        Exchange Rate: <span className="font-semibold">1 USD = {rate} NGN</span>
      </div>
      <div className="p-3 bg-gray-50 rounded">
        <p className="text-xs text-gray-500">Estimated Nigerian Naira</p>
        <p className="text-xl font-bold text-gray-800">{(usdAmount * rate).toLocaleString()} NGN</p>
      </div>
    </div>
  );
}
