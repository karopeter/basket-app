import React from 'react';
import "./formInput.component.css";

const FormInput = () => {
    return (
     <>
      <div id="formSection" className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
       <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Enroll Now</h2>
        <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                 Name
              </label>
              <input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
               type="text"
               placeholder="Your Name"
             />
            </div>
            <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course">
            Course
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="course"
            type="text"
            placeholder="Course Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            placeholder="Tell us about yourself and why you want to enroll in this course"
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            className="text-white font-bold py-2 px-4 w-48 h-12 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            style={{
              backgroundColor: "#4CC082",
              borderRadius: "30px"
            }}
          >
            Send
          </button>
        </div>
        </form>
      </div>
     </>
    );
}

export default FormInput;