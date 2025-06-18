import React from 'react'
import { useNavigate } from 'react-router-dom'

export const WelcomeScreen = () => {
  let navigate=useNavigate();
  return (
    <div className="min-h-screen flex items-end md:items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm p-6 pb-12 text-center">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-500 mb-6 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="space-y-4">
          <button className="w-full bg-purple-600 text-white font-semibold py-3 rounded-md hover:bg-purple-700 transition"
          onClick={()=>navigate('/signup')}
          >
            Create Account
          </button>
          <button className="w-full bg-purple-100 text-purple-800 font-semibold py-3 rounded-md hover:bg-purple-200 transition"
          onClick={()=>navigate('/login')}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  )
}
