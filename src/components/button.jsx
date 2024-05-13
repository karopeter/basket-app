import React from 'react';
import { Link } from 'react-router-dom';

const EnrollButton = () => {
    const scrollToForm = () => {
        document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <Link to="">
      <button className="block mx-auto w-48 h-12 px-4 py-2 mt-4 text-white  rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600" 
       style={{ 
        backgroundColor: "#4CC082", 
        borderRadius: "30px"
        }} 
        onClick={scrollToForm}
        >
        Enroll Now
        </button>
    </Link>
  );
}

export default EnrollButton;