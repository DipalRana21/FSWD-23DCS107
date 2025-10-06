import React from 'react';
import { BookOpen, Clock } from 'lucide-react';
import Header from './Header';
import { getSessionDuration } from '../utils/dateFormatter';

const DashboardView = ({ session, setCurrentView, handleLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentView="dashboard" 
        setCurrentView={setCurrentView} 
        handleLogout={handleLogout} 
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome back, {session.name}!
          </h2>
          <p className="text-gray-600">
            You're currently logged in to your library account
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Session Duration</p>
                <p className="text-2xl font-bold text-gray-800">
                  {getSessionDuration(session.loginTime)}
                </p>
              </div>
              <Clock className="w-10 h-10 text-indigo-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Books Borrowed</p>
                <p className="text-2xl font-bold text-gray-800">12</p>
              </div>
              <BookOpen className="w-10 h-10 text-purple-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Active Status</p>
                <p className="text-2xl font-bold text-green-600">Online</p>
              </div>
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-indigo-100 p-3 rounded-lg">
                <BookOpen className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Borrowed "The Great Gatsby"</p>
                <p className="text-sm text-gray-600">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-purple-100 p-3 rounded-lg">
                <BookOpen className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Returned "1984"</p>
                <p className="text-sm text-gray-600">5 days ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <div className="bg-pink-100 p-3 rounded-lg">
                <BookOpen className="w-5 h-5 text-pink-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800">Reserved "To Kill a Mockingbird"</p>
                <p className="text-sm text-gray-600">1 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardView;