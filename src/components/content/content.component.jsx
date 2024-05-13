import React from 'react';
import simple from "../../assets/images/illu2.png";
import MasterPage from './master';
import SuccessPage from './success';
import Category from './categories';
import "./content.styles.css";

const ContentPage = () => {
    return (
      <>
        <div className="flex flex-col md:flex-row justify-around p-10">
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 font-serif">
              Unlock Your Full Potential 
              <br />
              in Web Development
             </h1>
             <p className="mt-5 text-base md:text-lg text-black">
             🌟 Ready to take your career to the next level? 
              <br />
               Dive into our comprehensive Fullstack Web Development 
               <br />
               Training and transform into a tech powerhouse! 🌟
             </p>
            <button className="mt-5 px-4 py-2 text-base font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
             Join Us Now
           </button>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2">
             <img 
             src={simple} 
             alt="simple"
              className="h-80"
             />
          </div>
        </div>
        <MasterPage />
        <SuccessPage />
        <Category />
      </>
    );
}

export default ContentPage;