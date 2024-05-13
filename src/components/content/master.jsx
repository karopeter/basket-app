import React from 'react';
import Coding from "../../assets/images/coder11.png";
import FormInput from '../../data/formInput/formInput.component';
import Laptop from "../../assets/images/rec.png";
import Laptop1 from "../../assets/images/tags.avif";
import Laptop2 from "../../assets/images/shine.png";
import Laptop3 from "../../assets/images/changing.jpg";
import Laptop4 from "../../assets/images/finitive.webp";
import Laptop5 from "../../assets/images/working.jpg";
import "./content.styles.css";

const MasterPage = () => {
 
    return (
      <>
    <section className="bg-blue-300 py-10 md:py-20 h-70vh flex flex-col items-center justify-center">
     <p className="text-lg md:text-xl italic text-gray-900 text-center font-serif font-medium">
      🔥 Master the art of coding from scratch with our <br />
       industry-leading instructors. Whether you're a <br />
       newbie or a seasoned pro, our hands-on approach ensures you'll <br />
      thrive in the digital world. 🔥
    </p>
    <div>
      <img src={Coding} alt="coding" />
  </div>
  <FormInput />
</section>
  <section className="bg-white mt-10 p-10">
    <h2 className="text-center text-red-500 text-2xl md:text-2xl font-bold font-mono">What You'll Gain</h2>
    <div className="flex flex-col md:flex-row justify-around p-10">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src={Laptop} alt="laptop"   />
         <h3 className="text-black font-medium text-base md:text-lg font-mono mt-4 md:mt-0">
          Expertise in front-end and
          <br /> 
          back-end development
          </h3>
      </div>
      <div className="md:w-3/5 mb-8 md:mb-0">
        <img src={Laptop1} alt="laptop" style={{ height: '33vh'}} />
         <h3 className="text-black font-medium text-base md:text-lg font-mono mt-4 md:mt-0">
         Proficiency in HTML, CSS, 
         <br />
         JavaScript, Python, and more!
        </h3>
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src={Laptop2} alt="laptop"  />
         <h3 className="text-black font-medium text-base md:text-lg font-mono mt-4 md:mt-0">
         Hands-on experience with cutting-edge
         <br /> 
         frameworks like React, Angular, and Node.js
        </h3>
      </div>
    </div>
    <div className="flex flex-col md:flex-row justify-end p-10">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src={Laptop3} alt="laptop" className="kala"  />
         <h3 className="text-black font-medium text-base md:text-lg font-mono mt-4 md:mt-0">
         Insider tips and tricks from
         <br />
         seasoned professionals
          </h3>
      </div>
      <div className="md:w-3/5 mb-8 md:mb-0">
        <img src={Laptop5} alt="laptop" className="kala"  />
         <h3 className="text-black font-medium text-base md:text-lg font-mono mt-4 md:mt-0">
         Portfolio-worthy projects to
         <br />
          showcase your skills
        </h3>
      </div>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img src={Laptop4} alt="laptop" className="kala"   />
         <h3 className="text-black font-medium text-base md:text-lg font-mono mt-4 md:mt-0">
         Hands on Pratical to boost
         <br />
          your skills
        </h3>
      </div>
    </div>
  </section>
 </>
    );
}

export default MasterPage;
