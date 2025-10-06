import React, { useState, useEffect } from 'react';
import axios from 'axios';

// API URL for the backend
const API_URL = 'http://localhost:5000/api/students';

// A simple loading spinner component
const Spinner = () => (
  <div className="flex justify-center items-center p-4">
    <div className="w-6 h-6 border-4 border-t-transparent border-cyan-400 rounded-full animate-spin"></div>
  </div>
);

const AdminPanel = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({ name: '', subject: '', grade: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all students on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(API_URL);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const action = isEditing 
      ? axios.put(`${API_URL}/${currentStudentId}`, formData)
      : axios.post(API_URL, formData);
    
    try {
      await action;
      fetchStudents(); // Refresh the list after action
      cancelEdit();    // Reset form
    } catch (error) {
      console.error(`Error ${isEditing ? 'updating' : 'adding'} student:`, error);
    }
  };

  const handleEdit = (student) => {
    setIsEditing(true);
    setCurrentStudentId(student._id);
    setFormData({ name: student.name, subject: student.subject, grade: student.grade });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchStudents(); // Refresh the list
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setCurrentStudentId(null);
    setFormData({ name: '', subject: '', grade: '' });
  };

  return (
    <div className="min-h-screen bg-slate-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-slate-300 font-sans">
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Tuition Class Admin Panel
        </h1>

        {/* Form Card with Glassmorphism Effect */}
        <div className="max-w-xl mx-auto bg-slate-800/50 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-700 mb-10">
          <h2 className="text-2xl font-bold text-white mb-6">{isEditing ? 'Edit Student Record' : 'Add New Student'}</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Input with Icon */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/></svg>
              </div>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Student Name" required className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300" />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M5 5a1 1 0 0 1 1-1h1.586a1 1 0 0 1 .707.293l1.414 1.414c.293.293.293.768 0 1.061l-1.414 1.414a1 1 0 0 1-.707.293H6a1 1 0 0 1-1-1V5Zm9.586 0a1 1 0 0 0-1.414-1.414l-2.829 2.828a1 1 0 0 0 0 1.414l2.829 2.829a1 1 0 0 0 1.414-1.414L13.414 8l1.172-1.172a1 1 0 0 0 0-1.414L13.414 4.172 14.586 3Z"/></svg>
              </div>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" required className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300" />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M100 50 A 50 50 0 0 1 100 150" stroke="white" stroke-width="15" fill="none" transform="translate(-40 -90) scale(0.9)" /><path d="M25 85 L 175 85" stroke="white" stroke-width="15" fill="none" transform="translate(-40 -90) scale(0.9)" /><circle cx="100" cy="100" r="15" fill="white"  transform="translate(-40 -90) scale(0.9)" /><circle cx="100" cy="20" r="15" fill="white" transform="translate(-40 -90) scale(0.9)"/></svg>
              </div>
              <input type="number" name="grade" value={formData.grade} onChange={handleChange} placeholder="Grade (%)" min="0" max="100" required className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300" />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <button type="submit" className="w-full font-bold py-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/40 transform hover:scale-105 transition-all duration-300 ease-in-out">
                {isEditing ? 'Update Student' : 'Add Student'}
              </button>
              {isEditing && <button type="button" onClick={cancelEdit} className="w-full font-bold py-3 px-6 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transform hover:scale-105 transition-all duration-300 ease-in-out">Cancel</button>}
            </div>
          </form>
        </div>

        {/* Student List Table with Glassmorphism Effect */}
        <div className="bg-slate-800/50 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Student List</h2>
          <div className="overflow-x-auto">
            {isLoading ? <Spinner /> : (
              <table className="w-full text-left">
                <thead className="border-b border-slate-600">
                  <tr>
                    <th className="p-4 text-white font-semibold">Name</th>
                    <th className="p-4 text-white font-semibold">Subject</th>
                    <th className="p-4 text-white font-semibold">Grade</th>
                    <th className="p-4 text-white font-semibold text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.length > 0 ? students.map(student => (
                    <tr key={student._id} className="border-b border-slate-700 hover:bg-slate-800/60 transition-colors duration-200">
                      <td className="p-4 align-middle">{student.name}</td>
                      <td className="p-4 align-middle">{student.subject}</td>
                      <td className="p-4 align-middle font-mono">{student.grade}%</td>
                      <td className="p-4 flex justify-center items-center gap-2">
                        <button onClick={() => handleEdit(student)} className="p-2 rounded-full bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-300 transition duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M17.414 2.586a2 2 0 0 0-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 0 0 0-2.828Z"/><path fillRule="evenodd" d="M2 6a2 2 0 0 1 2-2h4a1 1 0 0 1 0 2H4v10h10v-4a1 1 0 1 1 2 0v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z" clipRule="evenodd"/></svg>
                        </button>
                        <button onClick={() => handleDelete(student._id)} className="p-2 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-400 transition duration-300">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.58.22-2.365.468a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z" clipRule="evenodd"/></svg>
                        </button>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan="4" className="text-center p-8 text-slate-500">
                        No students found. Add one using the form above.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;