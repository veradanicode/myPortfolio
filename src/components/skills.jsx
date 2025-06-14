import React from "react";

// Import your logos
import htmllogo from "../assets/htmllogo.jpg";
import csslogo from "../assets/csslogo.png";
import jsLogo from "../assets/jsLogo.png";
import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/mongodb.jpg";
import pythonLogo from "../assets/python.jpg";
import gitLogo from "../assets/git.png";


const skills = [
  { name: "HTML", logo: htmllogo },
  { name: "CSS", logo: csslogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "MongoDB", logo: mongoLogo },
  {name:"Python", logo:pythonLogo},
  {name:"Git", logo:gitLogo}
];

function Skills() {
  return (
    <section id="skills" className="py-16 bg-gradient-to-tr from-purple-100 via-white to-pink-50 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">My Tech Stack</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center px-6">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center space-y-2">
            <img
              src={skill.logo}
              alt={skill.name}
              className="bg-white shadow rounded-full w-14 h-14 object-contain hover:scale-110 transition-transform duration-300"
            />
            <p className="text-sm text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
