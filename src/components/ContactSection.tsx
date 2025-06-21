
import { useState } from 'react';
import { Mail, Phone, User, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    { name: 'Email', href: 'mailto:john.doe@example.com', icon: Mail, color: 'text-red-500' },
    { name: 'Phone', href: 'tel:+1234567890', icon: Phone, color: 'text-green-500' },
    { name: 'LinkedIn', href: '#', icon: User, color: 'text-blue-500' },
    { name: 'GitHub', href: '#', icon: ArrowRight, color: 'text-purple-500' },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 glass-effect rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full ios-button-primary"
                >
                  Send Message
                  <ArrowRight className="h-4 w-4 ml-2 inline" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              
              <div className="space-y-8">
                <div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    I'm always excited to work on innovative projects and collaborate with 
                    like-minded individuals. Whether you have a project in mind, need 
                    technical consultation, or just want to chat about technology, 
                    feel free to reach out!
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Quick Response</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass-card p-4 text-center">
                      <Mail className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-xs text-slate-500">< 24 hours</p>
                    </div>
                    <div className="glass-card p-4 text-center">
                      <Phone className="h-8 w-8 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-xs text-slate-500">Available</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-4">Connect with me</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="glass-card p-4 text-center hover:scale-105 transition-all duration-300 group"
                      >
                        <link.icon className={`h-6 w-6 ${link.color} mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`} />
                        <p className="text-sm font-medium">{link.name}</p>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h4 className="font-semibold mb-3">Available for:</h4>
                  <ul className="text-sm space-y-2 text-slate-600 dark:text-slate-300">
                    <li className="flex items-center">
                      <ArrowRight className="h-3 w-3 text-blue-500 mr-2" />
                      Full-stack development projects
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-3 w-3 text-purple-500 mr-2" />
                      Embedded systems consulting
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-3 w-3 text-indigo-500 mr-2" />
                      AI/ML project collaboration
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="h-3 w-3 text-green-500 mr-2" />
                      Technical mentoring
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

export default ContactSection;
