import React from 'react';

function Card({ link, isavailable, name, drtype }) {
  return (
    <div className="max-w-xs p-6 rounded-lg shadow-lg bg-gray-900 hover:shadow-xl  cursor-pointer transition-all duration-300 transform hover:-translate-y-2">
      <img
        src={link}
        alt={name}
        className="object-cover object-center w-full rounded-lg h-64 bg-gray-500"
      />
      <div className="mt-4 mb-2 text-center">
        <span className="block text-lg font-bold text-indigo-400">
          {name}
        </span>
        <h2 className="text-lg font-medium text-white">{drtype}</h2>
      </div>
      <p className="text-gray-400 text-sm mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tempora ipsum soluta amet.
      </p>

      {/* Availability Status */}
      <div className="text-center mt-4">
        <span
          className={`px-3 py-1 text-sm font-semibold rounded-full ${
            isavailable === 'true' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
          }`}
        >
          {isavailable === 'true' ? 'Available' : 'Not Available'}
        </span>
      </div>
    </div>
  );
}

export default Card;
