import React from 'react';
import { BookOpen } from 'lucide-react';

const LoginView = ({ loginForm, setLoginForm, handleLogin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 transform transition-all">
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-full">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Library Portal
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Sign in to access your account
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={loginForm.name}
              onChange={(e) => setLoginForm({ ...loginForm, name: e.target.value })}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={loginForm.email}
              onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              placeholder="Enter your email"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg"
          >
            Sign In
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Secure session management powered by React
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginView;