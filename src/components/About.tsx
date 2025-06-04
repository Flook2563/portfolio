
import { useEffect, useRef } from 'react';

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="animate-on-scroll text-5xl font-bold mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience
                creating innovative web solutions. I specialize in building scalable
                applications using modern technologies like React, Node.js, and TypeScript.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My expertise spans across frontend frameworks, backend development,
                database design, and cloud deployment. I'm constantly learning and
                adapting to new technologies to deliver cutting-edge solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                  5+ Years Experience
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                  50+ Projects Completed
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">
                  Startup Founder
                </span>
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Developer workspace"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
