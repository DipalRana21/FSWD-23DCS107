import React from 'react';
import { User, LogOut, BookOpen } from 'lucide-react';

const Header = ({ currentView, setCurrentView, handleLogout }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Library Portal</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {currentView === 'dashboard' && (
              <button
                onClick={() => setCurrentView('profile')}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                <User className="w-4 h-4" />
                <span className="font-medium">Profile</span>
              </button>
            )}
            {currentView === 'profile' && (
              <button
                onClick={() => setCurrentView('dashboard')}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                Dashboard
              </button>
            )}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
            >
              <LogOut className="w-4 h-4" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;