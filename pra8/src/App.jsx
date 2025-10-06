import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [count, setCount] = useState(0)


  useEffect(()=>{
    const loadCount= async()=>{
      const res= await axios.get('http://localhost:5000/api/counter');
      setCount(res.data.count);
    };
    loadCount();
  },[]);

  const updateCount = async(newCount)=>{
    setCount(newCount);
    await axios.post('http://localhost:5000/api/counter',{count:newCount});
  }


  return (
 
     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center font-sans p-4">
            <div className="w-full max-w-md mx-auto bg-gray-800 rounded-2xl shadow-2xl p-6 md:p-10 text-center">
                
               
                <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">Gym Rep Counter</h1>
                <p className="text-gray-400 mb-8">Click the buttons to count your reps.</p>

               
                <div className="bg-gray-900 rounded-full w-48 h-48 md:w-64 md:h-64 flex items-center justify-center mx-auto mb-8 border-4 border-cyan-400 shadow-lg">
                    <span className="text-7xl md:text-8xl font-bold text-white">{count}</span>
                </div>

             
                <div className="flex justify-center items-center space-x-4">
                    
                    <button
                        onClick={() => updateCount(count - 1)}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-5xl transition-transform transform hover:scale-105 shadow-lg"
                        aria-label="Decrease rep count"
                    >
                        -
                    </button>
                    
                   
                    <button
                        onClick={() => updateCount(count + 1)}
                        className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-5xl transition-transform transform hover:scale-105 shadow-lg"
                        aria-label="Increase rep count"
                    >
                        +
                    </button>
                </div>

          
                <div className="mt-8">
                    <button
                        onClick={() => updateCount(0)}
                        className="bg-gray-700 hover:bg-gray-600 text-cyan-400 font-semibold py-3 px-6 rounded-lg transition-colors shadow-md"
                        aria-label="Reset rep count"
                    >
                        Reset
                    </button>
                </div>

            </div>

            <footer className="text-gray-500 mt-8 text-sm">
                <p>Your count is saved automatically in this browser.</p>
            </footer>
        </div>
  )
}

export default App
