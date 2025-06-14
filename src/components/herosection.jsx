import React from 'react';
import verapic from "../assets/verapic.png"
import { motion } from "framer-motion";

export default function Hero() {
return (
    <main id='about' className="min-h-screen w-full bg-gradient-to-tr from-purple-100 via-white to-pink-50 text-gray-800 px-6 py-16 font-sans">
      
      <section className="max-w-4xl mx-auto text-center relative z-10">
        
        
      <div className="absolute w-80 h-80 bg-pink-400 rounded-full opacity-30 blur-3xl animate-float-blob -z-10 top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-purple-400 rounded-full opacity-30 blur-3xl animate-float-blob-reverse -z-10 bottom-10 right-10"></div>
     
      <img
        src={verapic}
        alt="Vera's Profile"
        className="w-48 h-48 rounded-full object-cover shadow-xl mb-6 border-4 border-white"
      />
      
      
       <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.5  }}
        >
            <h1 className="text-5xl font-extrabold text-[#4b0082]">Hi, I'm Vera Daniel 👋</h1>
           <h2 className="text-2xl font-medium text-[#7e22ce] mt-2">Creative Fullstack Developer</h2>
 
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.5  }}
        >
            <p className="text-lg text-gray-700 leading-relaxed">
            I'm <span className="font-semibold text-purple-600">Vera</span>, a passionate
            <span className="font-semibold text-pink-500"> Fullstack Developer</span> who loves building beautiful, functional,
            and efficient applications. From crafting pixel-perfect frontend interfaces to designing powerful backend systems with Node.js, MongoDB, and Express, I strive to create seamless digital experiences.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
            I'm constantly learning, solving problems, and pushing myself to build projects that not only work — but wow. 🚀
            </p>
      </motion.div>
        {/* <div className="mt-6 flex justify-center gap-4">
          <a
            href="#"
            className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
          >
            Download CV
          </a>
         <a href="#contact">
            <button className="bg-white text-indigo-600 border border-indigo-500 px-6 py-2 rounded-full font-medium shadow hover:bg-indigo-600 hover:text-white transition duration-300">
                Contact
            </button>
        </a>
        </div> */}
      </section>

      
    </main>
  );
}

