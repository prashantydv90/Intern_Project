import { useState } from 'react'
import { WelcomeScreen } from './components/WelcomeScreen'
import LoginScreen from './components/LoginScreen'
import SignupScreen from './components/SignUpScreen'
import ProfileView from './components/ProfileView'
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/welcome" />} />

        {/* Routes */}
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/profile" element={<ProfileView />} />
      </Routes>
    </Router>
  );
}

