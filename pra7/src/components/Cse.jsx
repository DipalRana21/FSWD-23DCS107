import React from 'react'

const achievements = [
  { title: 'Hackathon Wins', desc: 'Our students have won national and international hackathons.' },
  { title: 'Research Papers', desc: 'Published papers in top-tier AI, ML, and Cybersecurity journals.' },
  { title: 'Skill Development', desc: 'Focused training on full-stack development, DevOps, and Cloud.' }
]

const CSE = () => (
  <div className="text-center">
    <h1 className="text-4xl font-bold text-purple-700 mb-6">CSE Achievements & Skills</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {achievements.map(({ title, desc }) => (
        <div key={title} className="bg-white p-6 shadow rounded-lg hover:shadow-xl transition">
          <h2 className="text-xl font-semibold text-purple-800">{title}</h2>
          <p className="text-gray-600 mt-2">{desc}</p>
        </div>
      ))}
    </div>
  </div>
)

export default CSE
