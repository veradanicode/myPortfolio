import React from "react";
import Portfoliopic from "../assets/portfoliopic.png"
import athenapic from "../assets/athenapic.png"
import ecommerce from "../assets/ecommerce.png"
import SimpleInvest from "../assets/simpleinvest.png"

const projects = [
  {
    title: "Athena – Educational AI App",
    description:
      "An AI-powered platform that transcribes videos, summarizes content, and generates CBT-style quizzes for students.",
    image: athenapic,
    link: "https://athenaaifrontend.netlify.app/",
  },
  {
    title: "E-Commerce Inventory Manager",
    description:
        "Terminal-based inventory and sales tracker for small-scale vendors using JavaScript and MongoDB.",
    image: ecommerce,
    link: "#",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "This portfolio site! Built with React and TailwindCSS, showcasing my fullstack creativity.",
    image:Portfoliopic,
    link: "https://veradanicodeportfolio.netlify.app/",
  },
   {
    title: "SimpleInvest-A Modern Investment Web UI",
    description:
      "SimpleInvest is a fully responsive, React-based frontend investment UI inspired by modern fintech platforms. It features a clean landing page, dynamic layout adjustments for small screens, and a stylish mobile-friendly navbar with hamburger menu.",
    image:SimpleInvest,
    link: "https://modexinvestui.netlify.app/",
  }
];


function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
         <div
            key={index}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
            >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {project.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{project.description}</p>
                <a
                href={project.link}
                target="_blank" rel="noopener noreferrer"
                className="text-indigo-500 hover:underline text-sm font-medium"
                >View here
              </a>
            </div>
        </div>

          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
