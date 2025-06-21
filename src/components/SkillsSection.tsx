
import { Code, User, ArrowRight } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 90, color: "bg-red-500" },
        { name: "Python", level: 85, color: "bg-yellow-500" },
        { name: "C/C++", level: 80, color: "bg-blue-500" },
        { name: "JavaScript", level: 75, color: "bg-green-500" },
        { name: "SQL", level: 85, color: "bg-purple-500" },
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: ArrowRight,
      skills: [
        { name: "Spring Boot", level: 88, color: "bg-green-600" },
        { name: "React", level: 80, color: "bg-blue-400" },
        { name: "Docker", level: 75, color: "bg-blue-600" },
        { name: "Git", level: 90, color: "bg-orange-500" },
        { name: "Maven", level: 85, color: "bg-red-400" },
      ]
    },
    {
      title: "Technologies",
      icon: User,
      skills: [
        { name: "Microservices", level: 85, color: "bg-indigo-500" },
        { name: "REST APIs", level: 90, color: "bg-teal-500" },
        { name: "Arduino", level: 80, color: "bg-cyan-500" },
        { name: "Machine Learning", level: 70, color: "bg-pink-500" },
        { name: "IoT", level: 75, color: "bg-violet-500" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-50/50 dark:bg-slate-800/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card p-8 animate-fade-in-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="glass-car p-3 mr-4">
                  <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 5 + skillIndex) * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Certifications</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Skill India", color: "bg-orange-500" },
              { name: "Intel", color: "bg-blue-600" },
              { name: "Coursera", color: "bg-blue-400" },
              { name: "AWS", color: "bg-yellow-500" },
            ].map((cert, index) => (
              <div 
                key={cert.name}
                className="glass-card p-6 text-center hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 ${cert.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <Code className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium text-sm">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
