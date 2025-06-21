import { ArrowRight, Code, User } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "A scalable e-commerce platform built with Spring Boot microservices, featuring user management, product catalog, order processing, and payment integration.",
      tech: ["Java", "Spring Boot", "Docker", "PostgreSQL", "Redis"],
      image: "photo-1556742049-0cfed4f6a45d",
      liveUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      title: "IoT Smart Home System",
      description: "An integrated smart home solution using Arduino and Raspberry Pi, with real-time monitoring and control through a mobile app.",
      tech: ["C++", "Python", "Arduino", "Raspberry Pi", "MQTT"],
      image: "photo-1518709268805-4e9042af2176",
      liveUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      title: "AI-Powered Code Analyzer",
      description: "Machine learning tool that analyzes code quality, suggests improvements, and detects potential bugs using natural language processing.",
      tech: ["Python", "TensorFlow", "NLP", "Flask", "Docker"],
      image: "photo-1555949963-aa79dcee981c",
      liveUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      title: "Real-time Chat Application",
      description: "A modern chat application with real-time messaging, file sharing, and video calling capabilities built with React and Node.js.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "WebRTC"],
      image: "photo-1611224923853-80b023f02d71",
      liveUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      title: "Embedded Weather Station",
      description: "IoT weather monitoring system with sensors for temperature, humidity, and air quality, featuring data visualization dashboard.",
      tech: ["C", "Arduino", "LoRa", "React", "InfluxDB"],
      image: "photo-1504608524841-42fe6f032b4b",
      liveUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting system built on blockchain technology ensuring immutable records and voter privacy.",
      tech: ["Solidity", "Web3.js", "React", "Node.js", "IPFS"],
      image: "photo-1559526324-4b87b5e36e44",
      liveUrl: "#",
      codeUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A showcase of my recent work spanning web development, embedded systems, and AI
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects - Large Cards */}
          {projects.filter(p => p.featured).map((project, index) => (
            <div 
              key={project.title}
              className={`glass-card overflow-hidden animate-fade-in-up hover:scale-[1.02] transition-all duration-300 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="lg:w-1/2">
                <div className="h-64 lg:h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Code className="h-16 w-16 text-white" />
                </div>
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-medium glass-effect rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl}
                    className="ios-button-primary text-sm"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeUrl}
                    className="ios-button-secondary text-sm"
                  >
                    <Code className="h-4 w-4 mr-2 inline" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Other Projects - Grid Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div 
                key={project.title}
                className="glass-card overflow-hidden animate-fade-in-up hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <User className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 text-xs glass-effect rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-slate-500">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.liveUrl}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium flex items-center transition-colors"
                    >
                      View
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </a>
                    <a 
                      href={project.codeUrl}
                      className="text-slate-600 dark:text-slate-300 hover:text-slate-700 dark:hover:text-slate-200 text-sm font-medium flex items-center transition-colors"
                    >
                      <Code className="h-3 w-3 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
