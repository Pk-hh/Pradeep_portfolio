
import { ArrowDown, Code, User } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/30 to-purple-600/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        {/* Profile Image Placeholder */}
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 mx-auto glass-card p-1">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <User className="h-16 w-16 text-white" />
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="gradient-text">John Doe</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Java Developer | Embedded Systems | AI Enthusiast
        </h2>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Crafting innovative solutions at the intersection of software development, 
          embedded systems, and artificial intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={scrollToAbout}
            className="ios-button-primary"
          >
            <Code className="h-5 w-5 mr-2 inline" />
            View My Work
          </button>
          <a 
            href="#contact" 
            className="ios-button-secondary"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce cursor-pointer group"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="glass-card p-3 group-hover:scale-110 transition-transform duration-300">
            <ArrowDown className="h-6 w-6 text-slate-600 dark:text-slate-300" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
