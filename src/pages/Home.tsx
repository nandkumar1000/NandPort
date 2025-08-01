import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import Homeimg from '../image/ProjectImage/homeimg.jpg';
import myjourney from '../image/ProjectImage/myjurney.jpg';
import {
  ArrowRight,
  Download,
  Award,
  BookOpen,
  Target,
  Users,
  TrendingUp,
  Mail,
  Linkedin,
  Github,
  Package,
  Chrome
} from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '../components/ui/card';

const Home = () => {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const options = {
      strings: [
        '<span class="typed-text text-primary">Full Stack Developer</span>',
        '<span class="typed-text text-primary">MERN Stack Enthusiast</span>',
        '<span class="typed-text text-primary">Open Source Contributor</span>',
        '<span class="typed-text text-primary">Tech Explorer</span>',
        '<span class="typed-text text-primary">Software Developer</span>'
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const achievements = [
    'Full Stack Internship at Celebal Technologies',
    'Built Online Cake Ordering Platform (iNeuron)',
    'Finalist - Hack4Purpose IIT Delhi',
    'Winner - Transcend 2024 (NIT Karnataka)',
    'Forecastify - Real-Time Weather App',
    'EcoBuddy - Green Lifestyle Platform',
    'BookMyStay - Online Booking System',
    'GitHub Contributor & UI Designer'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-15 lg:py-32 overflow-hidden curve-shape ">
        <div className="absolute inset-0 bg-gradient-to-br from-background to-muted"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeIn">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Hi, I'm
                <span className="gradient-text block">Nand Kumar Sahu</span>
              </h1>
              <div className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-8">
                I am a <span ref={typedRef}></span>
              </div>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I build scalable full-stack web applications, craft intuitive user interfaces, and mentor aspiring developers. From backend architecture to front-end design, I focus on delivering impactful digital solutions that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="pulse-animation">
                  <Link to="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" className="w-full sm:w-auto flex justify-center">
                  <a
                    href="https://drive.google.com/file/d/1HShqs9c7A91Zgl5JPlcH2OmmMJCP2ZL3/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                <a href="mailto:shivanandbasal9520@gmail.com" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" title="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="https://linkedin.com/in/nandkumarsahu1234" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" title="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://github.com/nandkumar1000" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" title="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.npmjs.com/~nandkumarsahu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-500 dark:hover:text-rose-400" title="NPM Profile">
                  <Package className="h-5 w-5" />
                </a>
                <a href="https://github.com/nandkumar1000/Chrome-Extension-Time-stamp-" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 dark:hover:text-green-400" title="Chrome Extension">
                  <Chrome className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="animate-slideUp">
              <div className="relative">
                <img
                  src={Homeimg}
                  alt="Developer working"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Achievements */}
      < section className="py-4 overflow-hidden" >
        <div className="marquee">
          <div className="marquee-content text-lg font-medium">
            {achievements.concat(achievements).map((achievement, index) => (
              <span key={index} className="mx-8 inline-flex items-center">
                ⭐ {achievement}
              </span>
            ))}
          </div>
        </div>
      </section >

      {/* Academic Stats */}
      < section className="py-16 bg-card" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-hover">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl">84%</CardTitle>
                <CardDescription>Class 10th (2019)</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center card-hover">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl">68.4%</CardTitle>
                <CardDescription>Class 12th (2019–2021)</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center card-hover">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-3xl">8.5 CGPA</CardTitle>
                <CardDescription>B.Tech CSE (2022–Present)</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section >

      {/* About Preview */}
      < section className="py-16 bg-muted" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              My Journey in Tech
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From problem-solving with C++ to building real-world full-stack applications, explore my transformation into a software developer.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={myjourney}
                alt="Coding journey"
                className="rounded-2xl shadow-lg w-full h-80 object-cover border"
              />
            </div>
            <div className="space-y-6">
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">Academic Excellence</CardTitle>
                      <CardDescription>
                        Strong academic record from school through engineering, backed by certifications from IITs and practical experience.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">Full Stack Development</CardTitle>
                      <CardDescription>
                        Built scalable full-stack apps using React.js, Node.js, Express, and MongoDB through internships and personal projects.
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
              <Button variant="link" asChild className="p-0">
                <Link to="/about" className="inline-flex items-center">
                  Read Full Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section >

      {/* Quick Stats */}
      < section className="py-16 bg-card" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">8+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">10+</h3>
              <p className="text-muted-foreground">Certifications Earned</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">50+</h3>
              <p className="text-muted-foreground">Professional Connections</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">2</h3>
              <p className="text-muted-foreground">Internships Completed</p>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="py-16 bg-primary text-primary-foreground" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Interested in collaborating or hiring a passionate software developer? I’d love to connect with you.
          </p>
          <Button variant="secondary" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section >
    </div >
  );
};

export default Home;
