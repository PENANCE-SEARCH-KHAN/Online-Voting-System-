import React, { useState, useEffect } from 'react';
import { Edit3, Trash2, X, Printer } from 'lucide-react';

export default function ElectionsPage() {
  const [elections, setElections] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    electionType: '',
    date: '',
    status: '',
  });
  const [editIndex, setEditIndex] = useState(null);
  const [confirmDeleteIndex, setConfirmDeleteIndex] = useState(null);

  const electionTypes = ['Presidential', 'Parliamentary', 'Local', 'Senatorial'];
  const statuses = ['Upcoming', 'Ongoing', 'Completed'];

  useEffect(() => {
    const saved = localStorage.getItem('elections');
    if (saved) setElections(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('elections', JSON.stringify(elections));
  }, [elections]);

  const openModal = (election = null, index = null) => {
    setEditIndex(index);
    setFormData(election || { name: '', electionType: '', date: '', status: '' });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormData({ name: '', electionType: '', date: '', status: '' });
    setEditIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updated = [...elections];
    if (editIndex !== null) {
      updated[editIndex] = { ...formData };
    } else {
      updated.push({ ...formData });
    }
    setElections(updated);
    closeModal();
  };

  const handleDelete = (index) => {
    const updated = elections.filter((_, i) => i !== index);
    setElections(updated);
  };

  // Print functionality: print only table with heading
  const printList = () => {
    const printContent = document.getElementById('printableElections').innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = `<h1 class="print-title" style="text-align:center; margin-bottom: 1rem;">Registered Elections</h1>${printContent}`;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload(); // reload to restore React app state
  };

  return (
    <div className="max-w-7xl mx-auto print:p-0">
      {/* Header */}
      <header className="mb-4 print:hidden">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white">Elections Overview</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Manage elections, their types, dates, and statuses.
        </p>
      </header>

      {/* Controls */}
      <div className="flex justify-between items-center mb-3 print:hidden">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Elections List</h2>
        <div className="flex gap-3">
          <button
            onClick={() => openModal()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow transition"
          >
            Add Election
          </button>
          <button
            onClick={printList}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg shadow transition"
          >
            <Printer className="w-5 h-5" /> Print List
          </button>
        </div>
      </div>

      {/* Table */}
      <div
        id="printableElections"
        className="overflow-x-auto rounded-lg shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
      >
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-indigo-100 dark:bg-indigo-900">
            <tr>
              {['Name', 'Type', 'Date', 'Status', 'Actions'].map((head, i) => (
                <th
                  key={i}
                  className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {elections.map((election, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-6 py-4">{election.name}</td>
                <td className="px-6 py-4">{election.electionType}</td>
                <td className="px-6 py-4">{election.date}</td>
                <td className="px-6 py-4">{election.status}</td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => openModal(election, idx)}
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    <Edit3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setConfirmDeleteIndex(idx)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
            {elections.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No elections registered yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
              {editIndex !== null ? 'Edit Election' : 'Add Election'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Election Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              />
              <select
                value={formData.electionType}
                onChange={(e) => setFormData({ ...formData, electionType: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Election Type</option>
                {electionTypes.map((type, idx) => (
                  <option key={idx} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              />
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                required
                className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select Status</option>
                {statuses.map((status, idx) => (
                  <option key={idx} value={status}>
                    {status}
                  </option>
                ))}
              </select>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700"
                >
                  {editIndex !== null ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirm Delete */}
      {confirmDeleteIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm relative">
            <button
              onClick={() => setConfirmDeleteIndex(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
              Confirm Deletion
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Are you sure you want to delete election <strong>{elections[confirmDeleteIndex]?.name}</strong>?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmDeleteIndex(null)}
                className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDelete(confirmDeleteIndex);
                  setConfirmDeleteIndex(null);
                }}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
