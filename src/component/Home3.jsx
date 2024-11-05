import React from 'react';
import Card from '../common/Card';

function Home3() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 p-8">
      <h1 className="text-4xl font-bold text-blue-600">Top Doctors</h1>
      <p className="text-lg text-center text-gray-600 max-w-md">
        Simply browse through our extensive list of trusted doctors.
      </p>
      
      {/* Card Component */}
      <Card
        name="Dr. Richard James"
        drtype="General Physician"
        link="/assets/assets_frontend/doc1.png"
        isavailable="true"
      />
      <button className=' bg-gray-400  h-8  w-28  text-gray-300 hover:-translate-y-1 transition-all duration-300 hover:bg-slate-400 hover:text-black flex justify-center items-center rounded-3xl'>More..</button>
    </div>
  );
}

export default Home3;
