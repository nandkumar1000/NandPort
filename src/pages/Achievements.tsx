
import { Trophy, Medal, Star, Award, Calendar } from 'lucide-react';

// Import certificate images
import chemodessy from "../image/Ceritficate/chemodessy.png";
import iisf from "../image/Ceritficate/iisf.jpeg";
import iitdelhi from "../image/Ceritficate/iitdelhi.jpg";

const achievements = [
  {
    title: "Winner - Transcend 2024, NIT Karnataka",
    description:
      "Won the hackathon by building an AI-powered resume matcher and job platform using React and Node.js.",
    date: "May 2024",
    category: "Hackathon",
    icon: Trophy,
    color: "bg-yellow-500",
    level: "National Level",
    image: chemodessy,
  },
  {
    title: "Finalist - Hack4Purpose, IIT Delhi",
    description:
      "Built a mental health web app using React and Firebase; shortlisted among top 5 nationwide.",
    date: "June 2024",
    category: "Hackathon",
    icon: Medal,
    color: "bg-blue-500",
    level: "National Level",
    image: iitdelhi,
  },
  {
   title: 'Presented Digital Stethoscope Prototype at IISF',
  description:
    'Showcased an AI-powered digital stethoscope at the India International Science Festival (IISF), enabling patients to transmit real-time health data such as heart and lung sounds directly from their mobile device to healthcare providers.',

    date: "January 2023",
    category: "Presentation",
    icon: Star,
    color: "bg-teal-500",
    level: "National Expo",
    image: iisf,
  },
 {
  title: "Participant - Rajasthan Police Hackathon",
  description: "Built an analysis system for the Rajasthan Police Hackathon using the MERN stack. The system focused on [insert core functionalities here, e.g., real-time data tracking, predictive analysis, case clustering, etc.].",
  date: "17-18 jan 2024", 
  category: "Hackathon",
  icon: Trophy,
  color: "bg-blue-600", 
  level: "State Level",
},
  {
    title: "Built Flight Booking Chatbot using Microsoft Bot Framework & CLU",
    description:
      "Designed an AI-powered chatbot with natural language understanding for booking flights.",
    date: "April 2024",
    category: "Project",
    icon: Star,
    color: "bg-green-500",
    level: "AI/ML Showcase",
  },
];

const Achievements = () => {

  const categories = [...new Set(achievements.map((achievement) => achievement.category))];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Achievements & Tech Milestones
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey of impactful projects, hackathons, internships, and open-source contributions in full-stack development.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-xl">
            <Trophy className="h-12 w-12 text-yellow-600 dark:text-yellow-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">8+</h3>
            <p className="text-gray-600 dark:text-gray-300">Achievements</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl">
            <Medal className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">4</h3>
            <p className="text-gray-600 dark:text-gray-300">Hackathons</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl">
            <Star className="h-12 w-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">2</h3>
            <p className="text-gray-600 dark:text-gray-300">Internships</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl">
            <Award className="h-12 w-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">6</h3>
            <p className="text-gray-600 dark:text-gray-300">Projects Built</p>
          </div>
        </div>
        {/* Achievements Grid */}
        <div className="bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8" id="achievements">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
               Achievements & Highlights
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="card-hover bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  {/* Render certificate image if available */}
                  {achievement.image && (
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-40 object-cover"
                    />
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center`}>
                        <achievement.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                          {achievement.category}
                        </span>
                        <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                          {achievement.level}
                        </p>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {achievement.description}
                    </p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {achievement.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Categories Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievement Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Diverse areas of recognition and excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">{category}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Achievement Timeline
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones and recognition throughout the journey
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-yellow-500 to-purple-500"></div>
            {achievements.slice(0, 4).map((achievement, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="card-hover p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 ${achievement.color} rounded-full flex items-center justify-center`}>
                          <achievement.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {achievement.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{achievement.description}</p>
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {achievement.level}
                      </span>
                    </div>
                  </div>
                  <div className="hidden lg:block w-2/12 flex-shrink-0 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                      <div className={`w-4 h-4 ${achievement.color} rounded-full border-4 border-white dark:border-gray-900 shadow-lg`}></div>
                    </div>
                  </div>
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Keep Building & Evolving</h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Each milestone is a testament to growth, creativity, and contribution in the tech ecosystem.
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              View All Projects
              <Trophy className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
