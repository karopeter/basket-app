import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

// bg-teal-100
// 31333A

const SuccessPage = () => {
    return (
      <>
       <section className="bg-white mt-5 p-10">
        <h2 className="text-center text-red-500 text-2xl md:text-2xl font-bold font-mon">
          Stand Out in Today's Competitive Job Market
        </h2>
        <div className="flex flex-col md:flex-row justify-around p-10">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex mb-4">
             <FaCheckCircle 
              className="inline-block text-red-500 mr-2 mt-1" />
             <p className="text-base md:text-lg font-medium font-serif">
              Elevate your resume with sought-after skills
             </p>
            </div>
            <div className="flex mb-4">
             <FaCheckCircle 
              className="inline-block text-red-500 mr-2 mt-1" />
             <p className="text-base md:text-lg font-medium font-serif">
              Impress recruiters with your versatile skill set
             </p>
            </div>
             <div className="flex">
             <FaCheckCircle 
              className="inline-block text-red-500 mr-2 mt-1" />
              <p className="text-base md:text-lg font-medium font-serif">
               Learn a skill of your choice from the experts around the world.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex mb-4">
             <FaCheckCircle 
              className="inline-block text-red-500 mr-2 mt-1" />
             <p className="text-base md:text-lg font-medium font-serif">
             Open doors to lucrative career opportunities
             </p>
            </div>
            <div className="flex mb-4">
             <FaCheckCircle 
              className="inline-block text-red-500 mr-2 mt-1" />
             <p className="text-base md:text-lg font-medium font-serif">
              Command top salaries in the tech industry
             </p>
            </div>
            <div className="flex">
            <FaCheckCircle 
              className="inline-block text-red-500 mr-2 mt-1" />
             <p className="text-base md:text-lg font-medium font-serif">
             Learn a skill of your choice from the experts around the world.
             </p>
            </div>
          </div>
        </div>
       </section>
      </>
    );
}

export default SuccessPage;