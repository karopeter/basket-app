import React from 'react';
import EnrollButton from '../button';
import { FaClock, FaUserGraduate, FaUsers, FaBriefcase } from "react-icons/fa";

import "./content.styles.css";

const Category = () => {
    return (
      <>
       <section className="bg-white mt-10 p-10">
       <h2 className="text-center text-red-500 text-2xl md:text-2xl font-bold font-mono">
         Your Success Is Our Priority
        </h2>
        <div className="flex flex-col md:flex-row justify-around p-10 gap-4">
         <div className="w-full md:w-1/3 transition-all ease-in p-6 m-4" style={{ backgroundColor: "#E2F3F0", transition: "background-color 0.3s ease-in"}}>
         <div className="flex items-center">
          <FaClock size={80} color="#4CC082" />
          <p className="ml-4 text-base font-medium font-mono md:text-lg md:font-normal">Flexible learning options to fit your schedule</p>
         </div>
       </div>
       <div className="w-full md:w-1/3 transition-all ease-in  p-6 m-4" style={{ backgroundColor: "#4CC082"}}>
        <div className="flex items-center">
        <FaUserGraduate size={50} color="#fff" />
        <p className="ml-4 text-base font-medium font-mono md:text-lg md:font-normal">Personalized mentorship and support</p>
        </div>
       </div>
       </div>
       <div className="flex flex-col md:flex-row justify-around p-10 gap-4">
         <div className="w-full md:w-1/3 transition-all ease-in p-6 m-4" style={{ backgroundColor: "#E0E5EB"}}>
         <div className="flex items-center">
          <FaUsers size={80} color="#31333A" />
          <p className="ml-4 text-base font-medium font-mono md:text-lg md:font-normal">Access to a vibrant community of like-minded learners</p>
         </div>
       </div>
       <div className="w-full md:w-1/3 transition-all ease-in  p-6 m-4" style={{ backgroundColor: "#FFE9E5"}}>
         <div className="flex items-center">
           <FaBriefcase size={80} color="#f8be60" />
          <p className="ml-4 text-base font-medium font-mono md:text-lg md:font-normal">Career guidance and job placement assistance</p>
         </div>
       </div>
       </div>
       </section>
       <section className="mt-4 p-10" style={{ backgroundColor: "#FFEED3"}}>
       <h2 className="text-center md:text-lg mb-5" style={{ color: "#31333A"}}>
         Don't Miss Out on This Opportunity to Thrive in the Digital Age! 🎓
      </h2>
      <p className="text-center md:text-base" style={{ color: "#EC6C5A"}}>
       📢 Limited slots available! Enroll now and embark on your journey <br className="hidden md:block"/> 
       to becoming a Fullstack Web Development expert! 
       </p>
       <p className="text-center md:text-base mt-5">
        Click the button below to secure your spot today
       </p>
       <div className="flex justify-center">
          <EnrollButton />
       </div>
       </section>
      </>
    );
}

export default Category;