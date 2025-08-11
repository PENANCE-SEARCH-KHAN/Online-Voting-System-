import React, { useState } from 'react';

function Support() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const faqs = [
    {
      question: 'How do I reset my candidate password?',
      answer:
        'Go to your profile settings and click on "Change Password". Follow the instructions to reset your password.',
    },
    {
      question: 'How do I update my candidate profile?',
      answer:
        'Navigate to your Profile page from the sidebar menu, then click "Edit Profile" to update your information, photo, and campaign details.',
    },
    {
      question: 'How can I reach technical support?',
      answer:
        'Use the contact form below or email khanpenancesearch@gmail.com for any technical assistance.',
    },
    {
      question: 'Where can I view my election results?',
      answer:
        'Go to "My Results" page from the sidebar menu to view your personal election results and performance statistics.',
    },
    {
      question: 'How do I check my campaign progress?',
      answer:
        'Visit your Dashboard page to see real-time campaign analytics, voter engagement metrics, and polling data.',
    },
    {
      question: 'How am I assigned to participate in elections?',
      answer:
        'Election administrators will assign you to specific elections. You will receive a notification when you have been added as a candidate for an election.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Request sent!\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    );
    handleReset();
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400">
          Support & Help Center
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-base max-w-xl mx-auto">
          Need assistance? Browse our FAQs or reach out to our support team directly.
        </p>
      </div>

      {/* FAQ + Contact Form Cards */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* FAQ Card */}
        <div className="flex-1 bg-gradient-to-br from-indigo-100 to-white dark:from-slate-800 dark:to-slate-900  shadow-2xl border border-indigo-200 dark:border-slate-700 rounded-2xl p-6 transition">
          <h2 className="text-xl font-semibold text-indigo-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-md overflow-hidden border border-indigo-200 dark:border-slate-600"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 py-3 font-medium text-sm text-gray-800 dark:text-white flex justify-between items-center bg-white dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 transition"
                >
                  {faq.question}
                  <span className="text-xl font-bold">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-5 py-3 text-gray-600 dark:text-gray-300 text-sm bg-indigo-50 dark:bg-slate-800">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support Form */}
        <div className="flex-1 bg-gradient-to-br from-indigo-100 to-white dark:from-slate-800 dark:to-slate-900 shadow-2xl border border-indigo-200 dark:border-slate-700 rounded-2xl p-6 transition ">
          <h2 className="text-xl font-semibold text-indigo-900 dark:text-white mb-6">
            Contact Support
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-gray-800 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="flex justify-between gap-4">
              <button
                type="reset"
                onClick={handleReset}
                className="w-full py-2 rounded-lg bg-gray-200 dark:bg-slate-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-slate-600 transition"
              >
                Reset
              </button>
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Send Request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Download Manual + Contact Info Row */}
      <div className="flex flex-col md:flex-row gap-8 mt-10">
        {/* Download Manual */}
        <div className="flex-1 bg-gradient-to-br from-indigo-100 to-white dark:from-slate-800 dark:to-slate-900 shadow-xl rounded-2xl p-6 border border-indigo-200 dark:border-slate-700 transition hover:scale-[1.01]">
          <h2 className="text-xl font-semibold text-indigo-900 dark:text-white mb-3">
            Download User Manual
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
            Need help navigating the system? Download our comprehensive user manual to get started quickly.
          </p>
          <a
            href="/manuals/user-manual.pdf"
            download
            className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            ⬇️ Download Manual (PDF)
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex-1 bg-gradient-to-br from-indigo-100 to-white dark:from-slate-800 dark:to-slate-900 shadow-xl rounded-2xl p-6 border border-indigo-200 dark:border-slate-700 transition hover:scale-[1.01]">
          <h3 className="text-lg font-semibold text-indigo-800 dark:text-white mb-2">
            Contact Information
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li><strong>Email:</strong> khanpenancesearch@gmail.com</li>
            <li><strong>Phone:</strong> +237 651508182</li>
            <li><strong>Hours:</strong> Mon - Sat, 9:00 AM – 5:00 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Support;
