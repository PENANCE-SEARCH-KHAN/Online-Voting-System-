import React, { useState } from 'react';
import { Users, CheckCircle, XCircle, Search, Pencil, Trash2 } from 'lucide-react';

const regions = [
  'Adamawa', 'Centre', 'East', 'Far North', 'Littoral', 
  'North', 'Northwest', 'West', 'South', 'Southwest'
];

const mockVotersInit = [
  { name: 'John Serge', email: 'john@gmail.com', region: 'North', voterId: 'VTR001', status: 'Not Voted' },
  { name: 'Mary Anne', email: 'mary@gmail.com', region: 'East', voterId: 'VTR002', status: 'Voted' },
  { name: 'Peter Doe', email: 'peter@gmail.com', region: 'South', voterId: 'VTR003', status: 'Not Voted' },
  { name: 'Alice Smith', email: 'alice@gmail.com', region: 'West', voterId: 'VTR004', status: 'Voted' },
  { name: 'John Serge', email: 'john@gmail.com', region: 'Central', voterId: 'VTR005', status: 'Not Voted' },
  { name: 'Rose Kay', email: 'rose@gmail.com', region: 'Far North', voterId: 'VTR006', status: 'Voted' },
  { name: 'Sam Lee', email: 'sam@gmail.com', region: 'Littoral', voterId: 'VTR007', status: 'Not Voted' },
  { name: 'Ella Joe', email: 'ella@gmail.com', region: 'Adamawa', voterId: 'VTR008', status: 'Voted' },
];

function Voters() {
  const [searchTerm, setSearchTerm] = useState('');
  const [mockVoters, setMockVoters] = useState(mockVotersInit);

  // Popup states
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  // Selected voter for edit/delete
  const [selectedVoter, setSelectedVoter] = useState(null);

  // Form state for add/edit
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    region: regions[0],
  });

  // Filtered voters for search
  const filteredVoters = mockVoters.filter(voter =>
    voter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voter.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voter.voterId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    voter.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const total = mockVoters.length;
  const voted = mockVoters.filter(v => v.status === 'Voted').length;
  const notVoted = total - voted;

  // Handle form change
  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  // Open add popup and reset form
  function openAddPopup() {
    setFormData({ name: '', email: '', region: regions[0] });
    setShowAddPopup(true);
  }

  // Add voter
  function addVoter() {
    if (!formData.name || !formData.email) {
      alert('Please fill in all fields');
      return;
    }
    const newVoter = {
      ...formData,
      voterId: 'VTR' + String(mockVoters.length + 1).padStart(3, '0'),
      status: 'Not Voted',
    };
    setMockVoters(prev => [...prev, newVoter]);
    setShowAddPopup(false);
  }

  // Open edit popup
  function openEditPopup(voter) {
    setSelectedVoter(voter);
    setFormData({
      name: voter.name,
      email: voter.email,
      region: voter.region,
    });
    setShowEditPopup(true);
  }

  // Save edited voter
  function saveEditVoter() {
    if (!formData.name || !formData.email) {
      alert('Please fill in all fields');
      return;
    }
    setMockVoters(prev =>
      prev.map(v =>
        v.voterId === selectedVoter.voterId
          ? { ...v, name: formData.name, email: formData.email, region: formData.region }
          : v
      )
    );
    setShowEditPopup(false);
    setSelectedVoter(null);
  }

  // Open delete popup
  function openDeletePopup(voter) {
    setSelectedVoter(voter);
    setShowDeletePopup(true);
  }

  // Delete voter
  function deleteVoter() {
    setMockVoters(prev => prev.filter(v => v.voterId !== selectedVoter.voterId));
    setShowDeletePopup(false);
    setSelectedVoter(null);
  }

  // Close all popups
  function closePopups() {
    setShowAddPopup(false);
    setShowEditPopup(false);
    setShowDeletePopup(false);
    setSelectedVoter(null);
  }

  return (
    <div className='pb-6'>
      {/* Header */}
      <div className='mb-6'>
        <h2 className='text-2xl font-bold text-slate-800 dark:text-white'>Voters</h2>
        <p className='text-sm text-slate-500 dark:text-slate-400'>
          Manage and view all registered voters for the election.
        </p>
      </div>

      {/* Stats */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
        <StatCard icon={<Users className='w-6 h-6 text-blue-600 dark:text-blue-300' />} label="Registered Voters" count={total} />
        <StatCard icon={<CheckCircle className='w-6 h-6 text-green-600 dark:text-green-300' />} label="Voted" count={voted} />
        <StatCard icon={<XCircle className='w-6 h-6 text-red-600 dark:text-red-300' />} label="Not Voted" count={notVoted} />
      </div>

      {/* Search */}
      <div className='w-full max-w-sm mb-6'>
        <div className='relative'>
          <input
            type='text'
            placeholder='Search voters...'
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full pl-10 pr-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition'
          />
          <Search className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-slate-500' />
        </div>
      </div>

      {/* Title & Button */}
      <div className='flex items-center justify-between mb-4'>
        <h3 className='text-lg font-semibold text-slate-800 dark:text-white'>Voter List</h3>
        <button
          className='bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors'
          onClick={openAddPopup}
        >
          + Add Voter
        </button>
      </div>

      {/* Table */}
      <table className='w-full text-left border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden'>
        <thead className='bg-slate-200 dark:bg-slate-800'>
          <tr>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>Voter ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </tr>
        </thead>
        <tbody className='divide-y divide-slate-200 dark:divide-slate-700 text-sm bg-white dark:bg-slate-900'>
          {filteredVoters.map((voter, idx) => (
            <tr key={idx}>
              <td className='px-4 py-3'>{voter.name}</td>
              <td className='px-4 py-3'>{voter.email}</td>
              <td className='px-4 py-3'>{voter.region}</td>
              <td className='px-4 py-3'>{voter.voterId}</td>
              <td className='px-4 py-3'>
                <span
                  className={`inline-block ${
                    voter.status === 'Voted'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  } text-xs font-semibold px-2 py-1 rounded-full`}
                >
                  {voter.status}
                </span>
              </td>
              <td className='px-4 py-3'>
                <button
                  className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300'
                  onClick={() => openEditPopup(voter)}
                >
                  <Pencil className='w-4 h-4' />
                </button>
                <button
                  className='ml-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300'
                  onClick={() => openDeletePopup(voter)}
                >
                  <Trash2 className='w-4 h-4' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add Voter Popup */}
      {showAddPopup && (
        <Popup title="Add New Voter" onClose={closePopups}>
          <form
            onSubmit={e => {
              e.preventDefault();
              addVoter();
            }}
            className="space-y-4"
          >
            <InputField label="Full Name" name="name" value={formData.name} onChange={handleFormChange} />
            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleFormChange} />
            <SelectField label="Region" name="region" options={regions} value={formData.region} onChange={handleFormChange} />
            <div className="flex justify-end space-x-2">
              <button type="button" onClick={closePopups} className="btn-cancel">Cancel</button>
              <button type="submit" className="btn-submit">Add</button>
            </div>
          </form>
        </Popup>
      )}

      {/* Edit Voter Popup */}
      {showEditPopup && (
        <Popup title="Edit Voter Info" onClose={closePopups}>
          <form
            onSubmit={e => {
              e.preventDefault();
              saveEditVoter();
            }}
            className="space-y-4"
          >
            <InputField label="Full Name" name="name" value={formData.name} onChange={handleFormChange} />
            <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleFormChange} />
            <SelectField label="Region" name="region" options={regions} value={formData.region} onChange={handleFormChange} />
            <div className="flex justify-end space-x-2">
              <button type="button" onClick={closePopups} className="btn-cancel">Cancel</button>
              <button type="submit" className="btn-submit">Save</button>
            </div>
          </form>
        </Popup>
      )}

      {/* Delete Confirmation Popup */}
      {showDeletePopup && (
        <Popup title="Confirm Delete" onClose={closePopups}>
          <p className="mb-4">Are you sure you want to delete voter <strong>{selectedVoter?.name}</strong>?</p>
          <div className="flex justify-end space-x-2">
            <button onClick={closePopups} className="btn-cancel">Cancel</button>
            <button onClick={deleteVoter} className="btn-delete">Delete</button>
          </div>
        </Popup>
      )}

      {/* Popup styles */}
      <style jsx>{`
        .btn-cancel {
          background: #ccc;
          color: #333;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 600;
          cursor: pointer;
        }
        .btn-cancel:hover {
          background: #bbb;
        }
        .btn-submit {
          background: #2563eb;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 600;
          cursor: pointer;
        }
        .btn-submit:hover {
          background: #1e40af;
        }
        .btn-delete {
          background: #dc2626;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 600;
          cursor: pointer;
        }
        .btn-delete:hover {
          background: #991b1b;
        }
      `}</style>
    </div>
  );
}

function StatCard({ icon, label, count }) {
  return (
    <div className='bg-white dark:bg-slate-900 shadow-md rounded-2xl p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow'>
      <div className='bg-blue-100 dark:bg-blue-800 p-3 rounded-full'>{icon}</div>
      <div>
        <p className='text-sm text-slate-500 dark:text-slate-400'>{label}</p>
        <h3 className='text-xl font-bold text-slate-800 dark:text-white'>{count}</h3>
      </div>
    </div>
  );
}

function TableHead({ children }) {
  return (
    <th className='px-4 py-3 text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300'>
      {children}
    </th>
  );
}

// Generic popup component (centered, smaller than full screen)
function Popup({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">{title}</h2>
        {children}
        <button
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700 dark:hover:text-white"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

// Input field component
function InputField({ label, name, type = "text", value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
      />
    </div>
  );
}

// Select field component for region dropdown
function SelectField({ label, name, options, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
      >
        {options.map((region, idx) => (
          <option key={idx} value={region}>{region}</option>
        ))}
      </select>
    </div>
  );
}

export default Voters;
