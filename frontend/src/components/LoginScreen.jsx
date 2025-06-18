import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page refresh

    try {
      const res = await axios.post("http://localhost:5000/api/login", loginData);
      const token = res.data.token;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/profile");
      } else {
        alert("Login failed: No token received");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Invalid credentials or server error");
    }
  };

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Sign in to your <br /> PopX account
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={loginData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-purple-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={loginData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
