import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar } from 'lucide-react';

function Profile() {
  const [candidate] = useState({
    fullName: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA",
    joinedDate: "January 2024",
    profileImage: "/profile.jpg"
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-indigo-600 px-6 py-8">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-24 w-24 rounded-full border-4 border-white object-cover"
                  src={candidate.profileImage}
                  alt={candidate.fullName}
                />
              </div>
              <div className="ml-6">
                <h1 className="text-2xl font-bold text-white">{candidate.fullName}</h1>
                <p className="text-indigo-200 mt-1">Candidate for Public Office</p>
              </div>
            </div>
          </div>

          <div className="px-6 py-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-700">{candidate.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-700">{candidate.phone}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-700">{candidate.location}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-700">Joined {candidate.joinedDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
