import React from 'react';

function About() {
  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <div className="bg-indigo-50 dark:bg-slate-800 p-5 rounded-xl shadow-md border border-indigo-100 dark:border-slate-700 hover:scale-[1.01] transition-transform">
        {/* Title */}
        <h1 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
          About VoteSecure
        </h1>

        {/* Intro */}
        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-6">
          VoteSecure is a modern, secure voting platform designed to make digital elections transparent, trusted, and accessible to everyone. 
          Whether you're a voter, candidate, or admin, our goal is to ensure that your voice is heard clearly and securely.
        </p>

        {/* Core Values */}
        <h2 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
          Our Core Values
        </h2>
        <ul className="space-y-3 text-slate-600 dark:text-slate-300 list-disc list-inside">
          <li><span className="font-medium text-indigo-700 dark:text-white">Transparency:</span> Every step of the voting process is verifiable and auditable.</li>
          <li><span className="font-medium text-indigo-700 dark:text-white">Security:</span> Built using best-in-class security standards and encryption.</li>
          <li><span className="font-medium text-indigo-700 dark:text-white">Accessibility:</span> Designed to be inclusive and easy to use across devices and demographics.</li>
          <li><span className="font-medium text-indigo-700 dark:text-white">Integrity:</span> Fair elections are non-negotiable — results are protected from tampering or bias.</li>
        </ul>
      </div>

      {/* Features Section */}
      <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-10 mb-4">
        Why Choose VoteSecure?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Feature 1 - Highlighted */}
        <div className="bg-indigo-50 dark:bg-slate-800 p-5 rounded-xl shadow-md border border-indigo-100 dark:border-slate-700 hover:scale-[1.01] transition-transform">
          <h3 className="text-lg font-bold mb-2 text-indigo-700">End-to-End Encryption</h3>
          <p className="text-sm">
            Every vote is encrypted to ensure privacy and prevent tampering.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-indigo-50 dark:bg-slate-800 p-5 rounded-xl shadow-md border border-indigo-100 dark:border-slate-700 hover:scale-[1.01] transition-transform">
          <h3 className="text-lg font-bold text-indigo-700 dark:text-white mb-2">Real-Time Results</h3>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Get instant access to election outcomes as soon as voting ends.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-indigo-50 dark:bg-slate-800 p-5 rounded-xl shadow-md border border-indigo-100 dark:border-slate-700 hover:scale-[1.01] transition-transform">
          <h3 className="text-lg font-bold text-indigo-700 dark:text-white mb-2">User-Friendly Interface</h3>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Simple navigation for both voters and administrators of all levels.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <h2 className="text-xl font-semibold text-slate-800 dark:text-white mt-10 mb-4">
        Meet the Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Team Card */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md text-center border dark:border-slate-700 hover:shadow-lg transition">
          <img src="/profile.jpg" alt="Serge Johnson" className="w-20 h-20 rounded-full mx-auto mb-3 ring-2 ring-indigo-200" />
          <h3 className="text-lg font-bold text-indigo-700 dark:text-white">Serge Johnson</h3>
          <p className="text-sm text-slate-600 dark:text-slate-300">Lead Developer & Admin</p>
        </div>

        {/* CTA Card to the right */}
        <div className="bg-indigo-200  dark:bg-indigo-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition">
          <h2 className="text-2xl font-bold mb-2 text-indigo-700">Ready to Experience Fair & Secure Elections?</h2>
          <p className="mb-4">Join us today and take part in the future of transparent voting</p>
          <button className="bg-white text-indigo-600 font-semibold px-5 py-2 rounded-xl hover:bg-indigo-100 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
