// src/pages/VotePage.jsx
import React, { useState } from "react";

/**
 * Example elections data (replace with API data in real app)
 */
const electionsData = [
  {
    id: 1,
    name: "Presidential Election",
    description: "Choose the next president.",
    candidates: [
      { id: 1, name: "Alice Johnson", party: "Unity Party", image: "https://i.pravatar.cc/80?img=10" },
      { id: 2, name: "Bob Smith", party: "Progressive Party", image: "https://i.pravatar.cc/80?img=12" },
      { id: 5, name: "Eva Martin", party: "Green Party", image: "https://i.pravatar.cc/80?img=14" },
    ],
  },
  {
    id: 2,
    name: "Senatorial Election",
    description: "Select your senator.",
    candidates: [
      { id: 3, name: "Carol White", party: "Freedom Party", image: "https://i.pravatar.cc/80?img=22" },
      { id: 4, name: "David Brown", party: "Justice Party", image: "https://i.pravatar.cc/80?img=25" },
    ],
  },
];

export default function VotePage() {
  // electionId -> candidateId
  const [selectedVotes, setSelectedVotes] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // toggle selection; allow changing before final submission
  const handleSelect = (electionId, candidateId) => {
    if (submitted) return; // no changes allowed after final submission

    setSelectedVotes((prev) => {
      // If the same candidate clicked again -> deselect (toggle off)
      if (prev[electionId] === candidateId) {
        const copy = { ...prev };
        delete copy[electionId];
        return copy;
      }
      // otherwise set/replace selection for that election
      return { ...prev, [electionId]: candidateId };
    });
  };

  // open confirmation modal (only if every election has a selection)
  const openConfirm = () => {
    if (Object.keys(selectedVotes).length !== electionsData.length) {
      alert("Please select exactly one candidate for every election before submitting.");
      return;
    }
    setShowConfirm(true);
  };

  // final submit (replace with API call)
  const confirmSubmit = () => {
    // Example: send selectedVotes to backend here
    console.log("Submitting votes:", selectedVotes);
    setSubmitted(true);
    setShowConfirm(false);
  };

  const cancelConfirm = () => setShowConfirm(false);

  // helper to find candidate object
  const findCandidate = (electionId, candidateId) => {
    const election = electionsData.find((e) => e.id === electionId);
    if (!election) return null;
    return election.candidates.find((c) => c.id === candidateId) || null;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">🗳 Cast Your Vote</h1>
            <p className="text-gray-600 mt-1">Select one candidate per election. You can change your selection until you confirm.</p>
          </div>

          <div className="text-right">
            <div className="text-sm text-gray-500">Elections</div>
            <div className="mt-1 text-lg font-semibold text-gray-800">
              {electionsData.length} total • {Object.keys(selectedVotes).length} selected
            </div>
          </div>
        </div>

        {/* Each election rendered as a table */}
        {electionsData.map((election) => {
          const selectedCandidateId = selectedVotes[election.id];
          return (
            <section key={election.id} className="mb-8 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">{election.name}</h2>
                    {election.description && <p className="text-sm opacity-90 mt-1">{election.description}</p>}
                  </div>

                  <div className="text-sm">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        selectedCandidateId ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {selectedCandidateId ? "Chosen" : "Please choose"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="text-left text-sm text-gray-600 border-b">
                      <th className="py-3 pl-3">Photo</th>
                      <th className="py-3 pl-3">Candidate</th>
                      <th className="py-3 pl-3">Party</th>
                      <th className="py-3 pr-3 text-center">Vote</th>
                    </tr>
                  </thead>

                  <tbody>
                    {election.candidates.map((candidate) => {
                      const isSelected = selectedCandidateId === candidate.id;
                      return (
                        <tr
                          key={candidate.id}
                          className={`transition hover:bg-gray-50 ${isSelected ? "bg-green-50" : ""}`}
                        >
                          <td className="py-4 pl-3 w-24">
                            <img
                              src={candidate.image}
                              alt={candidate.name}
                              className="w-14 h-14 rounded-full border object-cover"
                            />
                          </td>
                          <td className="py-4 pl-3">
                            <div className="font-medium text-gray-800">{candidate.name}</div>
                            <div className="text-sm text-gray-500">Candidate ID: {candidate.id}</div>
                          </td>
                          <td className="py-4 pl-3 text-gray-600">{candidate.party}</td>

                          <td className="py-4 pr-3 text-center">
                            <button
                              type="button"
                              onClick={() => handleSelect(election.id, candidate.id)}
                              disabled={submitted}
                              className={`inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold focus:outline-none transition
                                ${submitted ? "bg-gray-300 text-gray-600 cursor-not-allowed" : isSelected ? "bg-green-600 text-white hover:bg-green-700" : "bg-blue-600 text-white hover:bg-blue-700"}
                              `}
                            >
                              {submitted ? "Voted" : isSelected ? "Selected" : "Select"}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {/* small note */}
                <div className="mt-4 text-xs text-gray-500">
                  Tip: You may change your selection here until you press <strong>Submit Votes</strong>.
                </div>
              </div>
            </section>
          );
        })}

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <button
            type="button"
            onClick={openConfirm}
            disabled={submitted}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition ${
              submitted ? "bg-gray-300 cursor-not-allowed text-gray-600" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            Confirm & Submit
          </button>

          <button
            type="button"
            onClick={() => setSelectedVotes({})}
            disabled={submitted}
            className={`px-4 py-2 rounded-lg border ${
              submitted ? "border-gray-200 text-gray-400 cursor-not-allowed" : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            Clear Selections
          </button>

          {submitted && (
            <div className="ml-4 p-3 rounded bg-green-50 text-green-700 font-medium">
              ✅ Votes submitted — thank you!
            </div>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black opacity-40"
            onClick={() => setShowConfirm(false)}
          />

          <div className="relative max-w-2xl w-full bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Confirm Your Votes</h3>
              <p className="text-sm text-gray-600 mb-4">
                Review your selections below. After you confirm, votes cannot be changed.
              </p>

              <div className="space-y-3">
                {electionsData.map((election) => {
                  const candidateId = selectedVotes[election.id];
                  const candidate = findCandidate(election.id, candidateId);
                  return (
                    <div key={election.id} className="flex items-center justify-between border rounded p-3">
                      <div>
                        <div className="text-sm text-gray-500">{election.name}</div>
                        {candidate ? (
                          <div className="flex items-center space-x-3 mt-1">
                            <img src={candidate.image} alt={candidate.name} className="w-10 h-10 rounded-full" />
                            <div>
                              <div className="font-medium">{candidate.name}</div>
                              <div className="text-xs text-gray-500">{candidate.party}</div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-sm text-gray-500 italic mt-1">No selection</div>
                        )}
                      </div>
                      <div className="text-sm text-gray-700">{candidate ? "Selected" : "Not selected"}</div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex justify-end items-center space-x-3">
                <button
                  onClick={cancelConfirm}
                  className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmSubmit}
                  className="px-5 py-2 rounded-md bg-green-600 text-white font-semibold hover:bg-green-700"
                >
                  Confirm & Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export { VotePage as VoteCast };
