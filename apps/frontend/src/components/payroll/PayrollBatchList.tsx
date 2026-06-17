import React from 'react';

export function PayrollBatchList(): JSX.Element {
  const batches = [
    { id: '1', date: '2026-06-15', amount: 45000, status: 'Completed' },
    { id: '2', date: '2026-06-30', amount: 48000, status: 'Pending Approval' },
  ];

  return (
    <div className="p-6 border rounded-lg bg-white shadow-sm">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Payroll Batches</h3>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b">
            <th className="py-2">Date</th>
            <th className="py-2">Amount</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {batches.map((batch) => (
            <tr key={batch.id} className="border-b">
              <td className="py-2">{batch.date}</td>
              <td className="py-2">${batch.amount.toLocaleString()} USDC</td>
              <td className="py-2">
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    batch.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {batch.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
