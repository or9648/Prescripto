import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-16 lg:px-32 bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        ABOUT <span className="text-indigo-500">US</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <img
          src="/assets/assets_frontend/about_image.png"
          alt="About Us"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="text-gray-700 space-y-6 md:w-1/2">
          <p>
            Welcome to <span className="font-bold text-indigo-500">Prescripto</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <h2 className="text-2xl font-semibold text-blue-600 mt-6">Our Vision</h2>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-blue-600 mt-8 mb-4">
        WHY <span className="text-indigo-500">CHOOSE US</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">EFFICIENCY</h3>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">CONVENIENCE</h3>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">PERSONALIZATION</h3>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
