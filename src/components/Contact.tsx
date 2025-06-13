
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

        <div className="animate-on-scroll grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 max-w-6xl mx-auto">          <a 
            href="mailto:Flook2563@gmail.com" 
            className="flex flex-col items-center gap-3 p-4 sm:p-6 hover:bg-background rounded-xl transition-all duration-300 group"
            aria-label="Email"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Mail className="text-primary" size={20} />
            </div>            <h3 className="font-medium text-base sm:text-lg">Email</h3>
            <p className="text-muted-foreground text-sm sm:text-base text-center break-words sm:break-normal">Flook2563@gmail.com</p>
          </a>          <a 
            href="tel:+66902693680" 
            className="flex flex-col items-center gap-3 p-4 sm:p-6 hover:bg-background rounded-xl transition-all duration-300 group"
            aria-label="Phone"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Phone className="text-primary" size={20} />
            </div>
            <h3 className="font-medium text-base sm:text-lg">Phone</h3>
            <p className="text-muted-foreground text-sm sm:text-base text-center">+66 90 269 3680</p>
          </a>          <a 
            href="https://github.com/Flook2563" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center gap-3 p-4 sm:p-6 hover:bg-background rounded-xl transition-all duration-300 group"
            aria-label="GitHub"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Github className="text-primary" size={20} />
            </div>
            <h3 className="font-medium text-base sm:text-lg">GitHub</h3>
            <p className="text-muted-foreground text-sm sm:text-base text-center">Flook2563</p>
          </a>          <a 
            href="https://linkedin.com/in/nattanon-hanpap-6a32791b2/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center gap-3 p-4 sm:p-6 hover:bg-background rounded-xl transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Linkedin className="text-primary" size={20} />
            </div>
            <h3 className="font-medium text-base sm:text-lg">LinkedIn</h3>
            <p className="text-muted-foreground text-sm sm:text-base text-center">Nattanon Hanpap</p>
          </a>          <a 
            href="https://facebook.com/FlookNattanon" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex flex-col items-center gap-3 p-4 sm:p-6 hover:bg-background rounded-xl transition-all duration-300 group"
            aria-label="Facebook"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Facebook className="text-primary" size={20} />
            </div>
            <h3 className="font-medium text-base sm:text-lg">Facebook</h3>
            <p className="text-muted-foreground text-sm sm:text-base text-center">Flook Nattanon</p>
          </a>
        </div>
      </div>
    </section>
  );
};
