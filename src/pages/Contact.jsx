import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-16 lg:px-32 bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-8">
        CONTACT <span className="text-indigo-500">US</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <img
          src="/assets/assets_frontend/contact_image.png"
          alt="Contact Us"
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />

        {/* Contact Details Section */}
        <div className="bg-white p-8 rounded-lg shadow-md text-gray-700 space-y-6 md:w-1/2">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">OUR OFFICE</h2>
            <p>00000 Willms Station, Suite 000, Washington, USA</p>
            <p className="mt-2">
              <span className="font-semibold">Tel:</span> (000) 000-0000 <br />
              <span className="font-semibold">Email:</span> greatstackdev@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mt-6 mb-2">CAREERS AT PRESCRIPTO</h2>
            <p>Learn more about our teams and job openings.</p>
            <button className="mt-4 px-6 py-2 text-white bg-indigo-500 rounded-md shadow hover:bg-indigo-600 transition-all duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
