import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import ecoBuddyImage from '../image/ProjectImage/ecobuddy.png';
import BookMyStay from '../image/ProjectImage/BookMyStay.png';
import cakehub from '../image/ProjectImage/cakehub.png';
import forcastify from '../image/ProjectImage/forcastify.png';
import local from '../image/ProjectImage/local.png';

const Projects = () => {
  const projects = [
    {
      title: 'ecoBuddy',
      description: 'A web platform that promotes eco-friendly practices and sustainability using analytics and user engagement tools.',
      image: ecoBuddyImage,
      technologies: ['ejs', 'js', 'Css', 'Bootstrap', 'NodeJS', 'ExpressJs', 'Mongodb', 'PassportJs', 'GoogleOauth', "RestFullApi's", 'Flash'],
      github: 'https://github.com/nandkumar1000/ecoBuddy',
      live: 'https://github.com/nandkumar1000/ecoBuddy',
    },
    {
      title: 'BooKMyStay',
      description: 'An online hotel booking system that allows users to search, book, and manage their stays with ease.',
      image: BookMyStay,
      technologies: ['ejs', 'js', 'Css', 'Bootstrap', 'NodeJS', 'ExpressJs', 'Mongodb', 'PassportJs', "RestFullApi's", 'Flash'],
      github: 'https://github.com/nandkumar1000/BookMyStay',
      live: 'https://github.com/nandkumar1000/BookMyStay',
    },
    {
      title: 'Online Cake Order System',
      description: 'An e-commerce platform for ordering customized cakes with user authentication and a seamless checkout process.',
      image: cakehub,
      technologies: ['ejs', 'js', 'Css', 'Bootstrap', 'NodeJS', 'ExpressJs', 'Mongodb', 'PassportJs', "RestFullApi's", 'Flash'],
      github: 'https://github.com/nandkumar1000/C-A-K-K-HAVEN',
      live: 'https://github.com/nandkumar1000/C-A-K-K-HAVEN',
    },
    {
      title: 'Flight Ticket Booking Bot',
      description: 'An intelligent bot built to automate flight ticket bookings using real-time user inputs and conversational AI. It integrates MongoDB for data storage, uses CLU for understanding language, and is powered by Node.js and Express on the backend.',
      image: 'https://tse2.mm.bing.net/th/id/OIP.m6DJATxKWA0wOGqDIIL6IAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      technologies: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Bot Framework', 'CLU', 'REST APIs'],
      github: 'https://github.com/nandkumar1000/Flight-Ticket-Booking-Bot',
      live: 'https://github.com/nandkumar1000/Flight-Ticket-Booking-Bot',
    }
    ,
    {
      title: 'Online E-Commerce platform',
      description: 'A feature-rich e-commerce application that provides product listings, cart management, and secure checkout.',
      image: local,
      technologies: ['ReactJs', 'TailwindCss', 'Toastify', 'LocalStorage', 'FakeStoreApi', 'react-icon'],
      github: 'https://github.com/nandkumar1000/local_bazzar',
      live: 'https://extraordinary-peony-c2423a.netlify.app/',
    },
    {
      title: 'ForCastify',
      description: 'A weather forecast application providing real-time weather data, including temperature, humidity, wind speed, and more.',
      image: forcastify,
      technologies: ['Html', 'Css', 'Js', 'CDN', 'WeatherAPI'],
      github: 'https://github.com/nandkumar1000/Forecastify',
      live: 'https://nandkumar1000.github.io/Forecastify/',
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg border-4 border-transparent hover:border-gradient-to-r hover:from-blue-500 hover:to-purple-500 overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
