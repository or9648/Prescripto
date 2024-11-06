import React from 'react';

function Input({ type = 'text', value, setname, name, placeholder }) {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={name} className="mb-1 text-sm font-semibold text-gray-700">
        {placeholder}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => setname(e.target.value)}
        name={name}
        id={name}
        placeholder={placeholder}
        className="px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 text-gray-700"
      />
    </div>
  );
}

export default Input;
