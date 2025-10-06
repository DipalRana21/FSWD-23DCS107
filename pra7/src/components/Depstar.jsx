import React from 'react'

const courses = ['B.Tech CSE', 'B.Tech IT', 'B.Tech CE', 'B.Tech Cyber Security', 'B.Tech Data Science']

const Depstar = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-green-700 mb-6">Courses Offered at Depstar</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course} className="bg-white p-6 shadow rounded-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-green-800">{course}</h2>
          <p className="text-gray-600 mt-2">A professional degree focused on industry-demanded skills.</p>
        </div>
      ))}
    </div>
  </div>
)

export default Depstar
