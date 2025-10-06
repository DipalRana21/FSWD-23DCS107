
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div className={`fixed top-0 left-0 h-full bg-blue-900 text-white transition-all duration-300 z-50 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-4">
        <button
          onClick={toggle}
          className="mb-4 text-white bg-blue-700 px-3 py-2 rounded hover:bg-blue-600 w-full"
        >
          {isOpen ? '⬅' : '➡'}
        </button>

        {isOpen && (
          <ul className="space-y-4 mt-6"> 
            <li><Link to="/" className="hover:text-gray-300">🏠 Home</Link></li>
            <li><Link to="/charusat" className="hover:text-gray-300">🎓 Charusat</Link></li>
            <li><Link to="/depstar" className="hover:text-gray-300">📚 Depstar</Link></li>
            <li><Link to="/cse" className="hover:text-gray-300">💻 CSE</Link></li>
          </ul>
        )}
      </div>
    </div>
  )
}

export default Sidebar
