import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [role, setRole] = useState("voter");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email.trim()) {
      alert("Email is required");
      return;
    }
    
    if (role !== "candidate" && !password.trim()) {
      alert("Password is required");
      return;
    }

    console.log('Login attempt:', { role, email, password: role === "candidate" ? 'N/A' : password });
    
    // Store user info in localStorage for demo
    localStorage.setItem('userRole', role);
    localStorage.setItem('userEmail', email);
    
    // Navigate based on role using React Router with if statements
    if (role === "candidate") {
      navigate("/candidate-dashboard");
    } else if (role === "admin") {
      navigate("/dashboard");
    } else {
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 space-y-6">
        
        {/* Logo & Title Section */}
        <div className="flex items-center justify-center space-x-3">
          <img
            src="/vote3.png" 
            alt="Logo"
            className="h-12 w-12 object-contain"
          />
          <h1 className="text-2xl font-bold text-indigo-700">VoteSecure</h1>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">Access your voting dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Role Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Login as
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="voter">Voter</option>
              <option value="candidate">Candidate</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Field - Hide for candidate role */}
          {role !== "candidate" && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-3 rounded-md transition duration-300 shadow-md"
          >
            Login
          </button>
        </form>

        {/* Links */}
        {role !== "candidate" && (
          <>
            <div className="text-sm text-center text-gray-600">
              <a href="/auth/password" className="text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="text-sm text-center text-gray-600">
              Don’t have an account?{" "}
              <Link to="/auth/register" className="text-indigo-600 hover:underline">
                Register
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}