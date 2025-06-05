import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="animate-on-scroll text-xl mb-2">Hello! I'm</p>
          
          <h1 className="animate-on-scroll text-6xl md:text-8xl font-bold mb-3">
            Nattanon <span className="text-blue-500">Hanpap</span>
          </h1>
          
          <p className="animate-on-scroll text-xl md:text-2xl text-muted-foreground mb-6">
            Software Developer
          </p>
          
          <p className="animate-on-scroll text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Embracing continuous learning to solve tomorrow's technological challenges.
          </p>
            <div className="animate-on-scroll grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-border rounded-lg hover:bg-accent transition-colors duration-200"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex items-center gap-6 justify-start md:justify-end">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:example@example.com" 
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
