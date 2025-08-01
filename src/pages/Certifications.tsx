import { Award, ExternalLink, Calendar } from 'lucide-react';
import nptelc from "../image/Ceritficate/nptelc.jpeg";
import python from "../image/Ceritficate/python.png";
import cpp from "../image/Ceritficate/cpptranining.png";
import ctraining from "../image/Ceritficate/ctraninigiitbombay.png";
import tcs from "../image/Ceritficate/tcs.png";
import html from "../image/Ceritficate/hml.png";
import learnandbuild from "../image/Ceritficate/learnandbuild.png";
import rajasthanvigyanmah from "../image/Ceritficate/rajasthanvigyanmahotsav.jpeg";
import ric from "../image/Ceritficate/ric.jpeg";
import shankra from "../image/Ceritficate/shankraglobalhackathon.png";
import aryahackathon from "../image/Ceritficate/aryahackathon.png";
import celebal from "../image/Ceritficate/CelebalTechnologyNand.jpg"

const courseCertificates = [
  { title: "Certification of C", description: "This is a certification of C Through NPTEL by IIT Kharagpur", image: nptelc },
  { title: "The Joy of Using Python", description: "Certification from NPTEL by IIT Madras", image: python },
  { title: "C++ Training", description: "Training in C++ through Spoken Tutorial by IIT Bombay", image: cpp },
  { title: "C Training", description: "Certification from Spoken Tutorial by IIT Bombay", image: ctraining },
  { title: "HTML", description: "Certification for the completion of HTML Training", image: html },
  { title: "Soft Skills Certification", description: "Certification through TCS iON Career Edge - Young Professional", image: tcs },
];
const internshipcertificate = [
  {
    title: "Learn And Build",
    description: "Certification through Learn and Build",
    image: learnandbuild
  },
  {
    title: "Celebal Technology",
    description: "Internship certificate from Celebal Technology",
    image: celebal
  }
];

const hackathonCertificates = [
  { title: "Rajasthan Vigyan Mahotsav", description: "Participated in Rajasthan Vigyan Mahotsav", image: rajasthanvigyanmah },
  { title: "Rajasthan Police Hackathon", description: "Participated in Rajasthan Police Hackathon", image: ric },
  { title: "Shankra Global Hackathon", description: "Participated in Shankra Global Hackathon", image: shankra },
  { title: "Hack-a-Mania", description: "Participated in Hack-a-Mania", image: aryahackathon },
];

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Development Internship',
      issuer: 'iNeuron Pvt Ltd',
      date: 'July 2024 – October 2024',
      description: 'Built the Online Cake Order System using MERN Stack, improving skills in MongoDB, Express.js, Node.js, and authentication.',
      category: 'Full Stack Development',
      color: 'bg-blue-500',
    },
    {
      title: 'Frontend Development Internship',
      issuer: 'Celebal Technologies',
      date: 'June 2024 – July 2024',
      description: 'Worked on building frontend components and dashboards using React.js, improving design implementation and API integration.',
      category: 'Frontend',
      color: 'bg-green-500',
    },
    {
      title: 'Hackathon Project – Deep Fake Detection',
      issuer: 'DST Rajasthan Hackathon',
      date: 'April 2024',
      description: 'Developed frontend interface for a tool that detects fake images/videos, using HTML, CSS, and JavaScript.',
      category: 'Hackathon',
      color: 'bg-purple-500',
    },
    {
      title: 'Chrome Extension – QuickLaunch',
      issuer: 'Self Project',
      date: 'March 2024',
      description: 'Built a productivity Chrome extension to launch tools quickly from browser, using HTML, CSS, JS.',
      category: 'Extension',
      color: 'bg-yellow-500',
    },
    {
      title: 'NPM Package – camelcase-converter',
      issuer: 'NPM Registry',
      date: 'February 2024',
      description: 'Published a utility to convert strings to camelCase format with focus on time/space efficiency.',
      category: 'Open Source',
      color: 'bg-red-500',
    },
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Certifications & Learning
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Curated certifications and internship experience in development, design, and software engineering.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">5+</h3>
            <p className="text-gray-600 dark:text-gray-300">Projects & Internships</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">4+</h3>
            <p className="text-gray-600 dark:text-gray-300">Months Experience</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">5</h3>
            <p className="text-gray-600 dark:text-gray-300">Core Areas</p>
          </div>
        </div>

        {/* Certifications */}
        {/* Course Certificates */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Course Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCertificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* internship certificates */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Work Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {internshipcertificate.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hackathon Certificates */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Hackathon Certificates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathonCertificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Skills Overview */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills Developed
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Emphasized frontend/backend development, UI design, REST API integration, and open-source contribution.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Lifelong Learning Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Empowering growth in web development, problem-solving, and UI/UX through continuous learning.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-purple-700 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              View All Certificates
              <ExternalLink className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;