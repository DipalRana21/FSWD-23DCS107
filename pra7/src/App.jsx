import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Charusat from './components/Charusat.jsx'
import Depstar from './components/Depstar.jsx'
import CSE from './components/Cse.jsx'



const Home = () => (
  <div className="ml-10 flex flex-col items-center justify-center w-full text-center p-8 bg-white rounded-xl shadow-lg">
    <h1 className="text-5xl font-extrabold text-blue-800 mb-4">Welcome to Charusat </h1>
    <p className="text-lg text-gray-600 max-w-2xl">
      Discover the academic excellence of <span className="font-semibold text-blue-700">Charusat University</span> and its
      renowned institutions. Explore departments, courses, and achievements of <span className="font-semibold text-blue-700">Depstar</span> and <span className="font-semibold text-blue-700">CSE</span>.
    </p>
  </div>
)

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen  pl-20 md:pl-64 flex items-center justify-center transition-all duration-300">
          <div className="max-w-4xl w-full text-center p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/charusat" element={<Charusat />} />
              <Route path="/depstar" element={<Depstar />} />
              <Route path="/cse" element={<CSE />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  )
}

export default App
