import { useState } from 'react'
import './App.css'

function App() {
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = () => {
    setShowToast(true)
 
    setTimeout(() => {
      setShowToast(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-85 p-16 bg-white shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-center">LOGIN</h2>
        
        <input
          type="text"
          placeholder="Enter username"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 w-full" 
        />
        
        <input
          type="password"
          placeholder="Enter password"
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />

        <button
          className="w-full py-2 mt-4 bg-green-700 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>

  
        {showToast && (
          <div className="fixed top-5 left-1/2 transform -translate-x-1/2 mb-5 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg animate-fadeIn">
            <p>Login successful!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
