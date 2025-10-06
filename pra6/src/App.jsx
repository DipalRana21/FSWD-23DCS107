

import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [edit, setEdit] = useState(null)
  const [listening, setListening] = useState(false)    

  const addToDo = () => {
    if (input.trim() === "") return

    if (edit !== null) {
      const updated = todos.map((todo, i) =>
        i === edit ? { ...todo, text: input } : todo
      )
      setTodos(updated)
      setEdit(null)
    } else {
      setTodos([ ...todos, { text: input, status: "pending" } ])
    }

    setInput("")
  }

  const handleEdit = (index) => {
    setInput(todos[index].text)
    setEdit(index)
  }

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
    if (edit === index) {
      setInput("")
      setEdit(null)
    }
  }

  const toggleStatus = (index) => {
    const updated = todos.map((todo, i) =>
      i === index
        ? { ...todo, status: todo.status === "pending" ? "completed" : "pending" }
        : todo
    )
    setTodos(updated)
  }

const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition
    
    if (!SpeechRecognition) {
      alert("Sorry, your browser doesn't support Speech Recognition.")
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = "en-US"
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => setListening(true)
    recognition.onend = () => setListening(false)

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim()
      
      
      if (transcript === "") return

      setInput(transcript)
      
    
      if (edit !== null) {
       
        const updatedTodos = todos.map((todo, index) =>
          index === edit ? { ...todo, text: transcript } : todo
        )
        setTodos(updatedTodos)
        setEdit(null)
      } else {
     
        setTodos(prevTodos => [...prevTodos, { text: transcript, status: "pending" }])
      }
      
   
      setTimeout(() => setInput(""), 1000)
    }

    recognition.onerror = (err) => {
      console.error("Voice recognition error:", err)
      setListening(false)
      
     
      if (err.error === 'no-speech') {
        alert("No speech detected. Please try again.")
      } 
      else {
        alert("Speech recognition error. Please try again.")
      }
    }

    recognition.start()
}

  const pendingTodos = todos.filter((t) => t.status === "pending")
  const completedTodos = todos.filter((t) => t.status === "completed")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-blue-300">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="font-bold text-2xl mb-4 text-center text-purple-700">
          Get Things Done!
        </h1>

        {/* INPUT + BUTTONS */}
        <div className="mb-6 flex gap-2 items-center">
          <input
            type="text"
            placeholder="Enter the task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          {/* Add / Update */}
          <button
            onClick={addToDo}
            className={`px-4 py-2 rounded text-white ${
              edit !== null
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-purple-600 hover:bg-purple-700"
            }`}
          >
            {edit !== null ? "Update" : "Add"}
          </button>

        
          <button
            onClick={handleVoiceInput}
            disabled={listening}
            className={`px-4 py-2 rounded text-white ${
              listening
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
            title="Click and speak to add a task"
          >
            {listening ? "Listening…" : "🎤"}
          </button>
        </div>

        {/* Pending Tasks */}
        <h2 className="text-lg font-semibold text-yellow-600 mb-2">
          Pending Tasks
        </h2>
        <ul className="space-y-2 mb-6">
          {pendingTodos.length === 0 ? (
            <li className="text-gray-500 text-sm">No pending tasks.</li>
          ) : (
            pendingTodos.map((todo) => {
              const idx = todos.indexOf(todo)
              return (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded"
                >
                  <div>
                    <span>{todo.text}</span>
                    <p className="text-sm text-yellow-600">{todo.status}</p>
                  </div>
                  <div className="space-x-2 flex-shrink-0">
                    <button
                      className="px-2 py-1 bg-green-500 hover:bg-green-600 text-white rounded"
                      onClick={() => toggleStatus(idx)}
                    >
                      Mark Done
                    </button>
                    <button
                      className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
                      onClick={() => handleEdit(idx)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                      onClick={() => handleDelete(idx)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )
            })
          )}
        </ul>

        {/* Completed Tasks */}
        <h2 className="text-lg font-semibold text-green-600 mb-2">
          Completed Tasks
        </h2>
        <ul className="space-y-2">
          {completedTodos.length === 0 ? (
            <li className="text-gray-500 text-sm">No completed tasks yet.</li>
          ) : (
            completedTodos.map((todo) => {
              const idx = todos.indexOf(todo)
              return (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded"
                >
                  <div>
                    <span className="line-through text-gray-500">
                      {todo.text}
                    </span>
                    <p className="text-sm text-green-600">{todo.status}</p>
                  </div>
                  <div className="space-x-2 flex-shrink-0">
                    <button
                      className="px-2 py-1 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
                      onClick={() => toggleStatus(idx)}
                    >
                      Mark Pending
                    </button>
                    <button
                      className="px-2 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
                      onClick={() => handleEdit(idx)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
                      onClick={() => handleDelete(idx)}
                    >
                      Delete
                    </button>
                  </div>
                </li>
              )
            })
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
