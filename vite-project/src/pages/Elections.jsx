import React, { useState } from 'react';
import {
  CalendarDays,
  CheckCircle,
  Clock,
  ListChecks,
  Pencil,
  Trash2,
  Plus,
  Printer,
  X,
} from 'lucide-react';

export default function ElectionsPage() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [formData, setFormData] = useState({ type: '', startDate: '', endDate: '' });

  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [electionToDelete, setElectionToDelete] = useState(null);

  const [elections, setElections] = useState([
    { id: 1, type: 'Presidential Election', startDate: '2025-07-20', endDate: '2025-07-30', status: 'Active' },
    { id: 2, type: 'Parliamentary Election', startDate: '2025-08-05', endDate: '2025-08-10', status: 'Upcoming' },
    { id: 3, type: 'Municipal Election', startDate: '2025-06-01', endDate: '2025-06-05', status: 'Completed' },
  ]);

  const totalElections = elections.length;
  const activeElections = elections.filter(e => e.status === 'Active').length;
  const upcomingElections = elections.filter(e => e.status === 'Upcoming').length;
  const completedElections = elections.filter(e => e.status === 'Completed').length;

  const handlePrint = () => {
    const printContents = document.getElementById('election-table').outerHTML;
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write(`
      <html>
        <head>
          <title>Registered Elections</title>
          <style>
            body { font-family: sans-serif; padding: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { padding: 10px; border: 1px solid #ccc; text-align: left; }
            h2 { text-align: center; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <h2>Registered Elections</h2>
          ${printContents}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const StatCard = ({ icon, label, count, bgColor, hoverColor }) => (
    <div className={`flex items-center space-x-4 p-6 rounded-2xl shadow-md transition cursor-pointer ${bgColor} ${hoverColor}`}>
      <div className="p-3 rounded-full bg-white shadow">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{label}</p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{count}</h3>
      </div>
    </div>
  );

  const openAddModal = () => {
    setFormData({ type: '', startDate: '', endDate: '' });
    setEditMode(false);
    setModalOpen(true);
  };

  const openEditModal = (index) => {
    const election = elections[index];
    setFormData({ type: election.type, startDate: election.startDate, endDate: election.endDate });
    setEditingIndex(index);
    setEditMode(true);
    setModalOpen(true);
  };

  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (editMode) {
      const updated = [...elections];
      updated[editingIndex] = { ...updated[editingIndex], ...formData };
      setElections(updated);
    } else {
      const newElection = {
        id: elections.length + 1,
        ...formData,
        status: 'Upcoming',
      };
      setElections(prev => [...prev, newElection]);
    }
    setModalOpen(false);
    setFormData({ type: '', startDate: '', endDate: '' });
  };

  const confirmDelete = (index) => {
    setElectionToDelete(index);
    setDeleteConfirmOpen(true);
  };

  const handleDeleteConfirmed = () => {
    const updated = [...elections];
    updated.splice(electionToDelete, 1);
    setElections(updated);
    setDeleteConfirmOpen(false);
    setElectionToDelete(null);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8  pb-10">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Elections Management</h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
          Manage and monitor all elections efficiently
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard icon={<ListChecks className="w-7 h-7 text-purple-600" />} label="Total Elections" count={totalElections} bgColor="bg-purple-100" hoverColor="hover:bg-purple-200" />
        <StatCard icon={<CheckCircle className="w-7 h-7 text-green-600" />} label="Active Elections" count={activeElections} bgColor="bg-green-100" hoverColor="hover:bg-green-200" />
        <StatCard icon={<Clock className="w-7 h-7 text-yellow-600" />} label="Upcoming Elections" count={upcomingElections} bgColor="bg-yellow-100" hoverColor="hover:bg-yellow-200" />
        <StatCard icon={<CalendarDays className="w-7 h-7 text-gray-600" />} label="Completed Elections" count={completedElections} bgColor="bg-gray-100" hoverColor="hover:bg-gray-200" />
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Elections Table</h2>
          <div className="flex gap-3">
            <button
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition text-sm"
              onClick={openAddModal}
            >
              <Plus size={16} /> Add Election
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-gray-800 rounded-xl hover:bg-slate-200 transition text-sm"
            >
              <Printer size={16} /> Print List
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table id="election-table" className="min-w-full text-sm text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-700 font-semibold">
              <tr>
                <th className="px-4 py-2">Election Type</th>
                <th className="px-4 py-2">Start Date</th>
                <th className="px-4 py-2">End Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {elections.map((e, idx) => (
                <tr key={e.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-2">{e.type}</td>
                  <td className="px-4 py-2">{e.startDate}</td>
                  <td className="px-4 py-2">{e.endDate}</td>
                  <td className="px-4 py-2">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      e.status === 'Active' ? 'bg-green-100 text-green-700'
                        : e.status === 'Upcoming' ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-slate-100 text-slate-700'
                    }`}>
                      {e.status}
                    </span>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex space-x-3">
                      <button onClick={() => openEditModal(idx)} className="text-blue-600 hover:text-blue-800">
                        <Pencil size={16} />
                      </button>
                      <button onClick={() => confirmDelete(idx)} className="text-red-600 hover:text-red-800">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
            <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
            <h3 className="text-lg font-bold text-gray-800 mb-4">{editMode ? 'Edit Election' : 'Add New Election'}</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Election Type</label>
                <input type="text" name="type" value={formData.type} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input type="date" name="startDate" value={formData.startDate} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input type="date" name="endDate" value={formData.endDate} onChange={handleInputChange} className="w-full px-3 py-2 border border-gray-300 rounded-md mt-1" />
              </div>
              <button type="button" onClick={handleSubmit} className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition">
                {editMode ? 'Update Election' : 'Submit Election'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Are you sure you want to delete "{elections[electionToDelete]?.type}"?
            </h2>
            <div className="flex justify-end space-x-4">
              <button onClick={() => setDeleteConfirmOpen(false)} className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-700">
                Cancel
              </button>
              <button onClick={handleDeleteConfirmed} className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
