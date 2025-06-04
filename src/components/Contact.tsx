
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  message: ''
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@example.com',
    key: 'email'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    key: 'phone'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'San Francisco, CA',
    key: 'location'
  }
];

export const Contact = () => {
  const contactRef = useIntersectionObserver({ 
    threshold: 0.1, 
    triggerOnce: true 
  });
  
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    setFormData(initialFormData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" ref={contactRef} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="animate-on-scroll text-5xl font-bold mb-16 text-center">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in hearing about new projects and opportunities.
              Whether you're a company looking to hire, or you're a fellow developer
              who wants to collaborate, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, value, key }) => (
                <div key={key} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium">{title}</h4>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background"
                  placeholder="your.email@example.com"
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
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
