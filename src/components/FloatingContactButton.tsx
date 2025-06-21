
import { Mail } from 'lucide-react';

const FloatingContactButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 glass-card p-4 hover:scale-110 transition-all duration-300 animate-float shadow-xl"
      aria-label="Contact me"
    >
      <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
    </button>
  );
};

export default FloatingContactButton;
