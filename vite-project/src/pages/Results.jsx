import React, { useRef, useState } from 'react';
import { Trash2, UploadCloud, FileText, Printer } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// Realistic election names for dummy data (10 elections)
const electionNames = [
  'Presidential Election',
  'Senate Election',
  'Gubernatorial Election',
  'Mayoral Election',
  'House of Representatives Election',
  'State Assembly Election',
  'County Commissioner Election',
  'School Board Election',
  'Judicial Election',
  'City Council Election',
];

const electionsData = electionNames.map((title, i) => ({
  title,
  candidates: [
    {
      id: i * 2 + 1,
      name: `Candidate A${i + 1}`,
      party: 'Party X',
      votes: Math.floor(Math.random() * 1000 + 500),
      winner: true,
    },
    {
      id: i * 2 + 2,
      name: `Candidate B${i + 1}`,
      party: 'Party Y',
      votes: Math.floor(Math.random() * 800 + 300),
      winner: false,
    },
  ],
}));

export default function ResultsPage() {
  const resultsRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 5;
  const totalPages = Math.ceil(electionsData.length / resultsPerPage);

  const handlePublish = () => {
    alert('Results Published Successfully!');
  };

  const exportToPDF = async () => {
    const canvas = await html2canvas(resultsRef.current);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('election_results.pdf');
  };

  const handlePrint = () => {
    const printContent = resultsRef.current.innerHTML;
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Results</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            table { border-collapse: collapse; width: 100%; margin-bottom: 20px; }
            th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
            th { background-color: #f0f0f0; }
            .profile-placeholder {
              width: 40px;
              height: 40px;
              border-radius: 9999px;
              border: 1px solid #999;
              background-color: #eee;
              display: inline-block;
            }
          </style>
        </head>
        <body>${printContent}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
  };

  const startIndex = (currentPage - 1) * resultsPerPage;
  const paginatedData = electionsData.slice(startIndex, startIndex + resultsPerPage);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
      {/* Title & Subtitle */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Election Results Overview
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          View real-time or finalised results for all ongoing/completed elections
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-end gap-3">
        <button
          onClick={handlePublish}
          className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          <UploadCloud size={18} className="mr-2" /> Publish Results
        </button>
        <button
          onClick={handlePrint}
          className="flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <Printer size={18} className="mr-2" /> Print
        </button>
        <button
          onClick={exportToPDF}
          className="flex items-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          <FileText size={18} className="mr-2" /> Export PDF
        </button>
      </div>

      {/* Results Tables */}
      <div ref={resultsRef} className="space-y-8">
        {paginatedData.map((election, index) => {
          const totalVotes = election.candidates.reduce((sum, c) => sum + c.votes, 0);

          return (
            <div key={index} className="bg-white dark:bg-slate-900 shadow rounded-xl p-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                {election.title}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto text-sm">
                  <thead className="bg-gray-100 dark:bg-slate-800 text-left text-gray-700 dark:text-gray-300">
                    <tr>
                      <th className="px-4 py-2">Profile</th>
                      <th className="px-4 py-2">Candidate Name</th>
                      <th className="px-4 py-2">Party</th>
                      <th className="px-4 py-2">Votes</th>
                      <th className="px-4 py-2">% of Total</th>
                      <th className="px-4 py-2">Status</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                    {election.candidates
                      .sort((a, b) => b.votes - a.votes)
                      .map((candidate) => {
                        const percentage = ((candidate.votes / totalVotes) * 100).toFixed(1);
                        return (
                          <tr key={candidate.id}>
                            <td className="px-4 py-2">
                              <div className="w-10 h-10 rounded-full border border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-700" />
                            </td>
                            <td className="px-4 py-2">{candidate.name}</td>
                            <td className="px-4 py-2">{candidate.party}</td>
                            <td className="px-4 py-2">{candidate.votes}</td>
                            <td className="px-4 py-2">{percentage}%</td>
                            <td className="px-4 py-2">
                              {candidate.winner ? (
                                <span className="text-green-600 font-semibold">✅ Winner</span>
                              ) : (
                                <span className="text-red-500">❌</span>
                              )}
                            </td>
                            <td className="px-4 py-2">
                              <button
                                onClick={() =>
                                  window.confirm(`Are you sure you want to delete ${candidate.name}'s result?`)
                                }
                              >
                                <Trash2 className="w-5 h-5 text-red-600 hover:text-red-800" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 dark:text-white font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
