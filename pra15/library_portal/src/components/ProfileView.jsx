import React from 'react';
import { User, Calendar, Clock } from 'lucide-react';
import Header from './Header';
import { formatDate, formatTime, getSessionDuration } from '../utils/dateFormatter';

const ProfileView = ({ session, setCurrentView, handleLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentView="profile" 
        setCurrentView={setCurrentView} 
        handleLogout={handleLogout} 
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-32"></div>
          
          <div className="px-8 pb-8">
            <div className="flex flex-col items-center -mt-16 mb-6">
              <div className="bg-white p-2 rounded-full shadow-lg">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-full">
                  <User className="w-16 h-16 text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">{session.name}</h2>
              <p className="text-gray-600">{session.email}</p>
            </div>

            {/* Session Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Session Information</h3>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-indigo-500" />
                      <span className="font-medium text-gray-700">Login Date</span>
                    </div>
                    <span className="text-gray-800">{formatDate(session.loginTime)}</span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-purple-500" />
                      <span className="font-medium text-gray-700">Login Time</span>
                    </div>
                    <span className="text-gray-800">{formatTime(session.loginTime)}</span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-pink-500" />
                      <span className="font-medium text-gray-700">Session Duration</span>
                    </div>
                    <span className="text-gray-800">{getSessionDuration(session.loginTime)}</span>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-700">Session ID</span>
                    </div>
                    <span className="text-gray-800 font-mono text-sm">{session.sessionId}</span>
                  </div>
                </div>
              </div>

              {/* Account Details */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Account Details</h3>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Full Name</span>
                    <span className="text-gray-800">{session.name}</span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Email</span>
                    <span className="text-gray-800">{session.email}</span>
                  </div>

                  <div className="flex items-center justify-between py-3 border-b border-gray-200">
                    <span className="font-medium text-gray-700">Member Since</span>
                    <span className="text-gray-800">January 2024</span>
                  </div>

                  <div className="flex items-center justify-between py-3">
                    <span className="font-medium text-gray-700">Account Status</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileView;