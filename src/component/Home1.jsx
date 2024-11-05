import React from 'react';

function Home1() {
  return (
    <div className="flex justify-center items-center h-screen"> {/* Full height of viewport */}
      <div className='bg-indigo-500 mt-8 mb-4 mr-3 ml-3 flex justify-center rounded-lg items-center p-9 h-[600px] w-[900px] shadow-lg'>
        <div className='flex'>
          <div className='flex flex-col justify-center mr-6 w-[400px]'> {/* Adjusted spacing */}
            <h2 className='text-white text-3xl font-bold mb-2'>Book Appointment</h2>
            <h2 className='text-white text-3xl font-bold mb-2'>With Trusted</h2>
            <h2 className='text-white text-3xl font-bold mb-6'>Doctors</h2>
            
            <div className='flex  items-start gap-3'>
              <img src='/assets/assets_frontend/1.png' alt="Doctors" className='mb-4 w-40  object-cover shadow-md' />
              <p className='text-gray-200 mb-4'>
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
              </p>
              
            </div>
            <button className='bg-white text-indigo-600 font-semibold py-2 px-4 rounded-3xl hover:bg-gray-200   hover:-translate-y-1  w-52 transition-all duration-200 '>
                Book Appointment
              </button>
          </div>

          <div className=' w-[400px] mb-0'>
            <img src='/assets/assets_frontend/2.png' alt="Additional Info" className=' object-cover ' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1;
