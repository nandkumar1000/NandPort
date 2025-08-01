import { Award, Target, Heart } from 'lucide-react';
import aboutImg from '../image/ProjectImage/aboutimg.jpg';


const About = () => {
  const timeline = [
    {
      year: '2019',
      title: 'Class 10th Board Examination',
      description: 'Achieved 84% marks in CBSE Board Examination',
      icon: Award,
      color: 'bg-blue-500',
    },
    {
      year: '2019–2021',
      title: 'Class 12th (Intermediate)',
      description: 'Completed with 68.4% marks from Bihar Board',
      icon: Award,
      color: 'bg-purple-500',
    },
    {
      year: '2022–Present',
      title: 'B.Tech in Computer Science',
      description: 'Pursuing B.Tech from Arya College of Engineering, Jaipur with 8.5 CGPA',
      icon: Award,
      color: 'bg-green-500',
    },
    {
      year: '2024–2025',
      title: 'Software Developer Internships',
      description: 'Completed full-stack and backend internships at iNeuron and Celebal Technologies',
      icon: Target,
      color: 'bg-orange-500',
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About My Journey
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From coding simple scripts to developing full-stack applications, here's how I shaped my path into tech.
          </p>
        </div>

        {/* Personal Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
              <Heart className="h-5 w-5" />
              <span className="font-medium">My Story</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Passionate About Building in Tech
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I started my journey in computer science with a passion for solving problems through code. Over time, I gained hands-on experience with full-stack technologies including React, Node.js, Express, and MongoDB.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My internships at iNeuron and Celebal Technologies allowed me to build scalable applications and backends, enhancing my technical and collaborative skills in real-world environments.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I am now focused on contributing to meaningful projects, open-source work, and sharpening my skills in both front-end and back-end development.
            </p>
          </div>
          <div className="relative">
            <img
              src={aboutImg}
              alt="Developer working"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </div>

        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Academic & Career Timeline
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Key milestones in my learning and development journey
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {timeline.map((item, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className="card-hover p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center`}>
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-2/12 flex-shrink-0 relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                      <div className={`w-4 h-4 ${item.color} rounded-full border-4 border-white dark:border-gray-900 shadow-lg`}></div>
                    </div>
                  </div>
                  <div className="hidden lg:block w-5/12"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values & Motivation */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Core Values & Motivation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The principles that guide my software development journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Passion for Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Continuously expanding my skill set and exploring the evolving landscape of technology.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Building with Purpose
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I strive to create meaningful and impactful web applications that solve real-world problems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in learning through teamwork and growing by contributing to open-source and group projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
