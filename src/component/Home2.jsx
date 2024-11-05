import React from 'react';

// Define the doctor types array
const doctortypes = [
  {
    link: "/assets/assets_frontend/1.svg",
    dr: "General physician",
  },
  {
    link: "/assets/assets_frontend/2.svg",
    dr: "Gastroenterologist",
  },
  {
    link: "/assets/assets_frontend/3.svg",
    dr: "Dermatologist",
  },
  {
    link: "/assets/assets_frontend/4.svg",
    dr: "Pediatricians",
  },
  {
    link: "/assets/assets_frontend/5.svg",
    dr: "Neurologist",
  },
  {
    link: "/assets/assets_frontend/6.svg",
    dr: "Gynecologist",
  }
];

function Home2() {
  return (
    <div className='flex flex-col items-center p-8'>
      <h1 className='text-4xl font-bold mb-4'>
        Find by Specialty
      </h1>
      <h2 className='text-xl text-center mb-8'>
        Simply browse through our extensive list of trusted doctors,<br/>
        schedule your appointment hassle-free.
      </h2>
      
      <div className='flex gap-6'> {/* Use grid layout for doctor types */}
        {doctortypes.map((doctor, index) => (
          <div key={index} className='flex flex-col cursor-pointer  hover:-translate-y-4 transition-all duration-300 items-center bg-white p-4 '>
            <img src={doctor.link} alt={doctor.dr} className=' w-28   h-28 mb-2' /> {/* Doctor image */}
            <h3 className='text-lg font-semibold'>{doctor.dr}</h3> {/* Doctor specialty */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home2;
