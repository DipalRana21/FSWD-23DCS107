export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export const formatTime = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit'
  });
};

export const getSessionDuration = (loginTime) => {
  if (!loginTime) return '0 minutes';
  const now = new Date();
  const login = new Date(loginTime);
  const diff = Math.floor((now - login) / 1000 / 60);
  return `${diff} minute${diff !== 1 ? 's' : ''}`;
};