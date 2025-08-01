import { motion } from "framer-motion";

// Import images manually
import js from "../image/Skillimage/js.svg";
import html from "../image/Skillimage/HTML5.svg";
import css from "../image/Skillimage/Css.svg";
import react from "../image/Skillimage/react.svg";
import nodejs from "../image/Skillimage/Node.js.svg";
import express from "../image/Skillimage/Express.svg";
import mongodb from "../image/Skillimage/mongodb.svg";
import mysql from "../image/Skillimage/mysql.svg";
import redux from "../image/Skillimage/redux.svg";
import bootstrap from "../image/Skillimage/bootstrap.svg";
import tailwind from "../image/Skillimage/tailwind.svg";
import gsap from "../image/Skillimage/gsap.svg";
import ejs from "../image/Skillimage/ejs.svg";
import github from "../image/Skillimage/github.svg";
import c from "../image/Skillimage/C.svg";
import cpp from "../image/Skillimage/Cpp.svg";
import python from "../image/Skillimage/Python.svg";
import figma from "../image/Skillimage/figma.svg";
import canva from "../image/Skillimage/Cnava.svg";

// Skills Array
const skills = [
  { name: "JavaScript", image: js, link: "https://github.com/nandkumar1000/JS-codeValut-part-2-" },
  { name: "HTML5", image: html },
  { name: "CSS3", image: css },
  { name: "React", image: react, link: "https://github.com/nandkumar1000/_React-Js" },
  { name: "Node.js", image: nodejs, link: "https://github.com/nandkumar1000/Node-Js" },
  { name: "Express", image: express, link: "https://github.com/nandkumar1000/Express-Js" },
  { name: "MongoDB", image: mongodb, link: "https://github.com/nandkumar1000/Mongo-Db" },
  { name: "MySQL", image: mysql },
  { name: "Redux", image: redux },
  { name: "Bootstrap", image: bootstrap, link: "https://github.com/nandkumar1000/Bootstrap" },
  { name: "Tailwind", image: tailwind, link: "https://github.com/nandkumar1000/Quantam-School" },
  { name: "GSAP", image: gsap, link: "https://github.com/nandkumar1000/GSAP" },
  { name: "EJS", image: ejs },
  { name: "GitHub", image: github, link: "https://github.com/nandkumar1000/" },
  { name: "C", image: c },
  { name: "C++", image: cpp, link: "https://github.com/nandkumar1000/CppCanvas" },
  { name: "Python", image: python },
  { name: "Figma", image: figma },
  { name: "Canva", image: canva },
];

const Skills = () => {
  return (
    <section id="Skills" className="py-24 bg-gradient-to-br from-gray-100 via-slate-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          My Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.12, rotate: 1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center p-4 rounded-2xl shadow-md hover:shadow-xl dark:shadow-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            >
              {skill.link ? (
                <a href={skill.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="w-16 h-16 object-contain rounded-md"
                  />
                </a>
              ) : (
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-16 h-16 object-contain rounded-md"
                />
              )}
              <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-200">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
