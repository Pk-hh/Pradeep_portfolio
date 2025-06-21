
import { User, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Passionate developer with a focus on creating efficient, scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="glass-card p-8 text-center">
              <div className="w-64 h-64 mx-auto glass-card p-2 mb-6">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <User className="h-32 w-32 text-white" />
                </div>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-2">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="font-medium text-blue-600 dark:text-blue-400">3+</div>
                    <div className="text-slate-500">Years Experience</div>
                  </div>
                  <div>
                    <div className="font-medium text-purple-600 dark:text-purple-400">50+</div>
                    <div className="text-slate-500">Projects Completed</div>
                  </div>
                  <div>
                    <div className="font-medium text-indigo-600 dark:text-indigo-400">10+</div>
                    <div className="text-slate-500">Technologies</div>
                  </div>
                  <div>
                    <div className="font-medium text-green-600 dark:text-green-400">5+</div>
                    <div className="text-slate-500">Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              
              <div className="space-y-6 text-slate-600 dark:text-slate-300">
                <p className="leading-relaxed">
                  I'm a passionate Java developer with a strong background in embedded systems 
                  and a growing expertise in artificial intelligence. My journey began with a 
                  fascination for how software and hardware work together to create innovative solutions.
                </p>
                
                <p className="leading-relaxed">
                  With over 3 years of experience in software development, I've worked on projects 
                  ranging from enterprise Java applications to IoT devices and AI-powered systems. 
                  I believe in writing clean, efficient code that not only works but is also 
                  maintainable and scalable.
                </p>

                <div className="glass-card p-6">
                  <h4 className="font-semibold mb-3 text-foreground">What drives me:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                      Creating solutions that make a real-world impact
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                      Continuous learning and staying updated with technology
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-indigo-500 mr-2 flex-shrink-0" />
                      Bridging the gap between software and hardware
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      Exploring the potential of AI in everyday applications
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
