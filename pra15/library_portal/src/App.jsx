import React, { useState } from 'react';
import LoginView from './components/LoginView';
import DashboardView from './components/DashboardView';
import ProfileView from './components/ProfileView';

function App() {
  const [session, setSession] = useState(null);
  const [loginForm, setLoginForm] = useState({ name: '', email: '' });
  const [currentView, setCurrentView] = useState('login');

  const handleLogin = () => {
    if (loginForm.name.trim() && loginForm.email.trim()) {
      const newSession = {
        name: loginForm.name,
        email: loginForm.email,
        loginTime: new Date().toISOString(),
        sessionId: Math.random().toString(36).substr(2, 9)
      };
      setSession(newSession);
      setCurrentView('dashboard');
      setLoginForm({ name: '', email: '' });
    }
  };

  const handleLogout = () => {
    setSession(null);
    setCurrentView('login');
  };

  if (currentView === 'login' && !session) {
    return (
      <LoginView 
        loginForm={loginForm} 
        setLoginForm={setLoginForm} 
        handleLogin={handleLogin} 
      />
    );
  }

  if (currentView === 'dashboard' && session) {
    return (
      <DashboardView 
        session={session} 
        setCurrentView={setCurrentView} 
        handleLogout={handleLogout} 
      />
    );
  }

  if (currentView === 'profile' && session) {
    return (
      <ProfileView 
        session={session} 
        setCurrentView={setCurrentView} 
        handleLogout={handleLogout} 
      />
    );
  }

  return null;
}

export default App;