import { useState } from "react";

const services = [
  {
    title: "Full Stack Web Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        fill="currentColor"
        className="text-blue-600 dark:text-blue-400"
        viewBox="0 0 16 16"
      >
        <path d="M3.5 2A1.5 1.5 0 0 1 5 3.5V5H3.5a1.5 1.5 0 1 1 0-3zM6 5V3.5A2.5 2.5 0 1 0 3.5 6H5v4H3.5A2.5 2.5 0 1 0 6 12.5V11h4v1.5a2.5 2.5 0 1 0 2.5-2.5H11V6h1.5A2.5 2.5 0 1 0 10 3.5V5H6zm4 1v4H6V6h4z" />
      </svg>
    ),
    short:
      "Scalable full-stack apps using MERN: MongoDB, Express.js, React.js, Node.js...",
    full:
      "Skilled in building robust, scalable web applications using MongoDB, Express.js, React.js, and Node.js. Developed systems like the Online Cake Order Platform and BookMyStay, focusing on authentication, user dashboards, admin panels, and RESTful APIs.",
  },
  {
    title: "UI/UX & Web Design",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        fill="currentColor"
        className="text-blue-600 dark:text-blue-400"
        viewBox="0 0 16 16"
      >
        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
      </svg>
    ),
    short: "Responsive design using Tailwind, GSAP, HTML, CSS...",
    full:
      "Crafts visually engaging, mobile-friendly websites using HTML, CSS, GSAP, and Tailwind CSS. Strong focus on user-centered design. Built Forecastify with a clean UI and animated transitions for weather tracking.",
  },
  {
    title: "Creative Design & Branding",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        fill="currentColor"
        className="text-blue-600 dark:text-blue-400"
        viewBox="0 0 16 16"
      >
        <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
      </svg>
    ),
    short:
      "YouTube thumbnails, posters, postcards, Canva and Coral design work...",
    full:
      "Offers complete design solutions including posters, postcards, event banners, YouTube thumbnails, and social content. Uses Coral Draw and Canva for branding visuals aligned with digital strategies and target audiences.",
  },
  {
    title: "Backend & API Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        fill="currentColor"
        className="text-blue-600 dark:text-blue-400"
        viewBox="0 0 16 16"
      >
        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z" />
      </svg>
    ),
    short: "Efficient APIs with Node.js/Express, MongoDB integrations...",
    full:
      "Developed scalable and efficient REST APIs using Express.js and MongoDB. Built backend architecture for projects like flight ticket booking bot, real-time data handling, and secure data exchange with JWT and middleware.",
  },
  {
    title: "Hackathon & Mentorship",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="42"
        height="42"
        fill="currentColor"
        className="text-blue-600 dark:text-blue-400"
        viewBox="0 0 16 16"
      >
        <path d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z" />
        <path d="M0 12.5a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5V4H0v8.5z" />
      </svg>
    ),
    short: "Hackathon finalist, team mentor, and student guide...",
    full:
      "Finalist at IIT Delhi Hackathon, Winner of Transcend 2024 (NITK), and India Science Fest 2022. I mentor students on GitHub practices, project deployment, UI feedback, coding interviews, and how to build standout portfolios.",
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState(Array(services.length).fill(false));

  const toggleExpand = (index: number) => {
    const updated = [...expanded];
    updated[index] = !updated[index];
    setExpanded(updated);
  };

  return (
    <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          My Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          I build full-stack web applications, design clean user interfaces, and
          mentor aspiring developers. From backend APIs to visual design—my goal
          is to deliver value with impact.
        </p>
        <hr className="w-1/2 mx-auto mb-10 border-gray-300 dark:border-gray-600" />
      </div>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-md rounded-lg hover:shadow-xl transition"
          >
            <div className="mb-4">{service.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
            <p className="text-sm mb-4">
              {expanded[index] ? service.full : service.short}
            </p>
            <button
              onClick={() => toggleExpand(index)}
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline text-sm"
            >
              {expanded[index] ? "Show Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
