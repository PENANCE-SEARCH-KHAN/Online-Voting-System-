import React from 'react';

const Voters = () => {
  const sampleVoters = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Voter ${i + 1}`,
    email: `voter${i + 1}@example.com`,
    status: i % 2 === 0 ? 'Voted' : 'Not Voted',
  }));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Voters List</h1>

      <div className="overflow-auto rounded-lg shadow bg-white dark:bg-slate-800">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
          <thead className="bg-gray-100 dark:bg-slate-700">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-slate-300">Name</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-slate-300">Email</th>
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-600 dark:text-slate-300">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
            {sampleVoters.map((voter) => (
              <tr key={voter.id}>
                <td className="px-4 py-2 text-gray-800 dark:text-white">{voter.name}</td>
                <td className="px-4 py-2 text-gray-800 dark:text-white">{voter.email}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    voter.status === 'Voted' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                  }`}>
                    {voter.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Voters;
