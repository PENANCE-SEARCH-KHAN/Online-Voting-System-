import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Register data:', formData);
  };

  return (
    <div className="py-12 bg-slate-100 dark:bg-slate-900 flex items-center justify-center px-4">
      <div className="max-w-5xl w-full bg-white dark:bg-slate-800 shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* Left section: Form */}
        <div className="p-8 md:p-12">
          {/* Logo and Brand */}
          <div className="flex items-center mb-4">
            <img
              src="/vote3.png" 
              alt="Logo"
              className="w-10 h-10 rounded-full ring-2 ring-indigo-400 mr-3"
            />
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">VoteSecure</span>
          </div>

          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-1">
            Register Your Account
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-300 mb-2">
            Please fill in the form below to create your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Enter password"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                placeholder="Confirm password"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                <option value="">Select Role</option>
                <option value="voter">Voter</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <Link
            to="/auth/OTPVerify"
            className="block text-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition"
            >
               Register
            </Link>

          </form>

          <p className="text-sm text-slate-500 dark:text-slate-300 mt-4 text-center">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-indigo-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>

        {/* Right section: Image with overlay text */}
        <div className="relative h-full">
          <img
            src="/background.jpg" 
            alt="Voting"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-white text-center px-4">
              <h3 className="text-xl font-bold mb-2">Welcome to VoteSecure</h3>
              <p className="text-sm leading-relaxed">
                A modern platform for secure and transparent digital voting.
                Empowering voters and admins with a seamless experience.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
