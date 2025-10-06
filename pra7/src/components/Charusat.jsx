import React from 'react'

const departments = ['Depstar', 'CSPIT', 'CMPICA', 'PDPIAS', 'RPCP', 'IIIM', 'MTIN']

const Charusat = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-blue-800 mb-6">Departments at Charusat</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {departments.map((dept) => (
        <div key={dept} className="bg-white p-6 shadow rounded-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-blue-700">{dept}</h2>
          <p className="text-gray-600 mt-2">Explore programs, research, and innovation in {dept}.</p>
        </div>
      ))}
    </div>
  </div>
)

export default Charusat
