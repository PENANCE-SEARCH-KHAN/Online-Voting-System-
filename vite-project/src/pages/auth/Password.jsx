import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Password() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1500);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate OTP verification
    setTimeout(() => {
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    setError('');
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    setLoading(true);
    
    // Simulate password reset
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 1500);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <form onSubmit={handleEmailSubmit} className="space-y-5">
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
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold px-4 py-3 rounded-md transition duration-300 shadow-md"
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
        );
        
      case 2:
        return (
          <form onSubmit={handleOtpSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Verification Code
              </label>
              <input
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter 6-digit code"
                maxLength="6"
              />
              <p className="text-xs text-gray-500 mt-1">
                We've sent a 6-digit verification code to {email}
              </p>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold px-4 py-3 rounded-md transition duration-300 shadow-md"
            >
              {loading ? 'Verifying...' : 'Verify Code'}
            </button>
          </form>
        );
        
      case 3:
        return (
          <form onSubmit={handlePasswordReset} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                New Password
              </label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter new password"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Confirm new password"
              />
            </div>
            
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold px-4 py-3 rounded-md transition duration-300 shadow-md"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        );
        
      case 4:
        return (
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900">Password Reset Successful!</h3>
            <p className="text-gray-600">
              Your password has been successfully reset. You can now log in with your new password.
            </p>
            
            <Link
              to="/auth/login"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 shadow-md"
            >
              Go to Login
            </Link>
          </div>
        );
        
      default:
        return null;
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
          <h2 className="text-xl font-semibold text-gray-900">
            {step === 1 && 'Forgot Password'}
            {step === 2 && 'Verify Email'}
            {step === 3 && 'Reset Password'}
            {step === 4 && 'Success'}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {step === 1 && 'Enter your email to reset your password'}
            {step === 2 && 'Enter the verification code sent to your email'}
            {step === 3 && 'Create a new password for your account'}
            {step === 4 && 'Your password has been successfully reset'}
          </p>
        </div>

        {renderStep()}

        {step < 4 && (
          <div className="text-sm text-center text-gray-600">
            <Link to="/auth/login" className="text-indigo-600 hover:underline">
              Back to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Password;
