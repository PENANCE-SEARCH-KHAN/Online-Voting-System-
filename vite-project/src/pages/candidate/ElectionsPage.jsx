import React from 'react';

const ElectionsPage = () => {
  // Sample elections data
  const elections = [
    {
      id: 1,
      title: "Presidential Election 2025",
      date: "March 15, 2025",
      status: "Ongoing",
      isMyElection: true
    },
    {
      id: 2,
      title: "Parliamentary Elections",
      date: "April 20, 2025",
      status: "Upcoming",
      isMyElection: false
    },
    {
      id: 3,
      title: "Local Government Chairperson",
      date: "January 25, 2025",
      status: "Completed",
      isMyElection: true
    },
    {
      id: 4,
      title: "Student Council President",
      date: "February 28, 2025",
      status: "Ongoing",
      isMyElection: false
    },
    {
      id: 5,
      title: "Community Board Elections",
      date: "May 10, 2025",
      status: "Upcoming",
      isMyElection: false
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ongoing': return 'bg-green-100 text-green-800';
      case 'Upcoming': return 'bg-yellow-100 text-yellow-800';
      case 'Completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Elections</h1>
          <p className="text-gray-600 mt-1">All elections - ongoing, upcoming, and completed</p>
        </div>

        <div className="space-y-4">
          {elections.map((election) => (
            <div
              key={election.id}
              className={`bg-white rounded-lg shadow-sm p-4 ${election.isMyElection ? 'ring-2 ring-indigo-500' : ''}`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{election.title}</h3>
                  <p className="text-sm text-gray-600">{election.date}</p>
                </div>
                <div className="flex items-center space-x-3">
                  {election.isMyElection && (
                    <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
                      My Election
                    </span>
                  )}
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(election.status)}`}>
                    {election.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectionsPage;
