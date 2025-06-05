import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Circle } from 'lucide-react';

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
    <section id="home" ref={heroRef} className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      
      {/* Left Section - Main Content */}
      <div className="relative z-10 max-w-xl">
        <p className="animate-on-scroll text-xl mb-2">Hello! I'm</p>
        
        <h1 className="animate-on-scroll text-6xl md:text-7xl font-bold mb-3">
          Nattanon <span className="text-blue-500">Hanpap</span>
        </h1>
        
        <p className="animate-on-scroll text-xl md:text-2xl text-muted-foreground mb-6">
          Software Developer
        </p>
        
        <p className="animate-on-scroll text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
          Embracing continuous learning to solve tomorrow's technological challenges.
        </p>
          <div className="animate-on-scroll flex flex-col gap-6 mb-6">
          <div className="flex flex-row gap-4">
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
        </div>
      </div>

      {/* Right Section - Code Window */}
      <div className="animate-on-scroll relative z-10 w-full max-w-md rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
        <div className="bg-[#1e1e2e] text-white font-mono">
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-[#181825] border-b border-gray-800">
            <div className="flex items-center gap-1.5">
              <Circle size={12} fill="#ff5f57" stroke="none" />
              <Circle size={12} fill="#febc2e" stroke="none" />
              <Circle size={12} fill="#28c840" stroke="none" />
            </div>
            <span className="text-xs text-gray-400">developer.js</span>
            <div className="w-16"></div> {/* Empty space for balance */}
          </div>
          
          {/* Code Content */}
          <div className="p-5 text-sm">
            <div className="text-gray-500">// Software Engineer</div>
            <div className="mt-2">
              <span className="text-pink-400">const</span> <span className="text-blue-400">developer</span> <span className="text-white">=</span> <span className="text-white">&#123;</span>
            </div>
            
            <div className="ml-4 mt-2">
              <span className="text-purple-400">name</span><span className="text-white">:</span> <span className="text-green-400">'Nattanon Hanpap'</span><span className="text-white">,</span>
            </div>
            
            <div className="ml-4 mt-1">
              <span className="text-purple-400">skills</span><span className="text-white">:</span> <span className="text-white">[</span>
              <span className="text-green-400">'React'</span><span className="text-white">,</span> <span className="text-green-400">'Node.js'</span><span className="text-white">,</span> <span className="text-green-400">'Golang'</span>
              <span className="text-white">],</span>
            </div>
            
            <div className="ml-4 mt-1">
              <span className="text-purple-400">focuses</span><span className="text-white">:</span> <span className="text-white">[</span>
              <span className="text-green-400">'Full-Stack'</span><span className="text-white">,</span> <span className="text-green-400">'Backend'</span>
              <span className="text-white">],</span>
            </div>
            
            <div className="ml-4 mt-1">
              <span className="text-purple-400">learning</span><span className="text-white">:</span> <span className="text-green-400">'Always'</span>
            </div>
            
            <div className="mt-2">
              <span className="text-white">&#125;</span><span className="text-white">;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
