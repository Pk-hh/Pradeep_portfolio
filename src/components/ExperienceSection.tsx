
import { ArrowDown, Code, User } from 'lucide-react';

const ExperienceSection = () => {
  const timeline = [
    {
      year: "2024",
      title: "Senior Java Developer",
      company: "Tech Solutions Inc.",
      type: "work",
      description: "Led development of microservices architecture, mentored junior developers, and implemented CI/CD pipelines.",
      technologies: ["Java", "Spring Boot", "Docker", "AWS"]
    },
    {
      year: "2023",
      title: "Full Stack Developer",
      company: "Innovation Labs",
      type: "work",
      description: "Developed end-to-end web applications and IoT solutions for smart city projects.",
      technologies: ["Java", "React", "Arduino", "MongoDB"]
    },
    {
      year: "2022",
      title: "Software Engineering Intern",
      company: "StartupXYZ",
      type: "internship",
      description: "Built REST APIs and contributed to embedded systems projects.",
      technologies: ["Java", "C++", "Raspberry Pi"]
    },
    {
      year: "2021",
      title: "Bachelor of Technology",
      company: "Computer Science Engineering",
      type: "education",
      description: "Graduated with honors, specialized in embedded systems and artificial intelligence.",
      technologies: ["Java", "Python", "C", "Machine Learning"]
    },
    {
      year: "2017",
      title: "Higher Secondary",
      company: "Science Stream",
      type: "education",
      description: "Completed with distinction, developed passion for programming and electronics.",
      technologies: ["Mathematics", "Physics", "Chemistry"]
    }
  ];

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case 'work':
        return <Code className="h-5 w-5 text-white" />;
      case 'internship':
        return <User className="h-5 w-5 text-white" />;
      case 'education':
        return <ArrowDown className="h-5 w-5 text-white" />;
      default:
        return <Code className="h-5 w-5 text-white" />;
    }
  };

  const getTimelineColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-purple-600';
      case 'internship':
        return 'from-green-500 to-blue-500';
      case 'education':
        return 'from-purple-500 to-indigo-600';
      default:
        return 'from-blue-500 to-purple-600';
    }
  };

  return (
    <section id="experience" className="section-padding bg-slate-50/50 dark:bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 h-full rounded-full"></div>

          {timeline.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center mb-12 animate-fade-in-up ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 mr-3">
                      {item.year}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.type === 'work' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
                      item.type === 'internship' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                      'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                    }`}>
                      {item.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{item.company}</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs glass-effect rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="relative z-10">
                <div className={`w-12 h-12 bg-gradient-to-br ${getTimelineColor(item.type)} rounded-full flex items-center justify-center shadow-lg`}>
                  {getTimelineIcon(item.type)}
                </div>
              </div>

              {/* Spacer */}
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>

        {/* Resume Download */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Download Resume</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm">
              Get a comprehensive overview of my experience and skills
            </p>
            <button className="ios-button-primary">
              <ArrowDown className="h-4 w-4 mr-2 inline" />
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
