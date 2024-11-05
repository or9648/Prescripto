import React from 'react';
import Card from '../common/Card';

function Doctors() {
  return (
    <div className="flex flex-col items-center py-12 px-4 md:px-16 lg:px-32 bg-gray-50">
      {/* Header */}
      <h1 className="text-3xl font-bold  text-gray-400 mb-6 text-center">
        Browse through the doctors specialist
      </h1>
      
      {/* Specialties List */}
      <div className="mb-8 w-full">
  <ul className="flex flex-wrap justify-center gap-4">
    {["General Physician", "Gastroenterologist", "Dermatologist", "Pediatrician", "Neurologist", "Gynecologist"].map((specialty, index) => (
      <li key={index}>
        <button className="px-4 py-2 rounded-full   bg-slate-200 text-black font-semibold hover:bg-slate-500 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
          {specialty}
        </button>
      </li>
    ))}
  </ul>
</div>

      {/* Doctors Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          name="Dr. Richard James"
          drtype="General Physician"
          link="/assets/assets_frontend/doc1.png"
          isavailable="true"
        />
        <Card
          name="Dr. Emma Brown"
          drtype="Gastroenterologist"
          link="/assets/assets_frontend/doc2.png"
          isavailable="true"
        />
        <Card
          name="Dr. John Smith"
          drtype="Dermatologist"
          link="/assets/assets_frontend/doc3.png"
          isavailable="true"
        />
      </div>
    </div>
  );
}

export default Doctors;
