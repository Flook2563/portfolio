
import { useEffect, useRef } from 'react';
import { Mail, Phone, Github, Linkedin, Facebook } from 'lucide-react';

export const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = contactRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <section id="contact" ref={contactRef} className="py-20 bg-primary/5">
      <div className="container mx-auto px-6">
        <h2 className="animate-on-scroll text-5xl font-bold mb-16 text-center">
          Contact Me
        </h2>

        <div className="animate-on-scroll flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <a 
            href="mailto:Flook2563@gmail.com" 
            className="flex flex-col items-center gap-2 p-6 hover:bg-background rounded-xl transition-all duration-300 group"
            aria-label="Email"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="font-medium text-lg">Email</h3>
            <p className="text-muted-foreground">Flook2563@gmail.com</p>
          </a>

          <a 
            href="tel:+66902693680" 
            className="flex flex-col items-center gap-2 p-6 hover:bg-background rounded-xl transition-all duration-300 group"
            aria-label="Phone"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="font-medium text-lg">Phone</h3>
            <p className="text-muted-foreground">+66 90 269 3680</p>
          </a>

          <a 
            href="https://github.com/Flook2563" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center gap-2 p-6 hover:bg-background rounded-xl transition-all duration-300 group"
            aria-label="GitHub"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Github className="text-primary" size={24} />
            </div>
            <h3 className="font-medium text-lg">GitHub</h3>
            <p className="text-muted-foreground">Flook2563</p>
          </a>

          <a 
            href="https://linkedin.com/in/nattanon-hanpap-6a32791b2/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center gap-2 p-6 hover:bg-background rounded-xl transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Linkedin className="text-primary" size={24} />
            </div>
            <h3 className="font-medium text-lg">LinkedIn</h3>
            <p className="text-muted-foreground">Nattanon Hanpap</p>
          </a>

          <a 
            href="https://facebook.com/FlookNattanon" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center gap-2 p-6 hover:bg-background rounded-xl transition-all duration-300 group"
            aria-label="Facebook"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Facebook className="text-primary" size={24} />
            </div>
            <h3 className="font-medium text-lg">Facebook</h3>
            <p className="text-muted-foreground">Flook Nattanon</p>
          </a>
        </div>
      </div>
    </section>
  );
};
